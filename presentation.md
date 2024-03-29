# Localhost Continuous integration/delivery

## Table of content

- What is Tilt?
- What is starlark?
- K8s/Docker
- Demonstration
- Integration within Atreides

Presentation powered by Slides

---

# Tilt

## What is Titl

Tilt is a continuous integration tool for localhost development aiming to replicate the final kubernetes production environment locally.

## Why tilt

Tilt allows you to locally develop your stack/app as closely as you would use it, as a microservice, in production. Tilt allows you to run tests based on changes to a file so long as its present in your cli.

## Requirements

- Kubectl
- Kind
- Titl
- Helm
- Kustomize
- Any other cli tools that helps you

## Common commands

- local_ressource: run linters, tests, local cli programs, etc.

```python
local_resource('yarn', cmd='yarn install', deps=['package.json', 'yarn.lock'])
```

- k8s_ressource: expose ports, configure ressource, etc.
- k8s_yaml: from simple to custom k8s deployment

```python
k8s_yaml(kustomize('kustomize_dir'))
```

- helm: from simple to custom helm chart deployment
- extensions: allows you to extend tilt with plugins
- and [more](https://docs.tilt.dev/api.html)

---

# Starlark

Documentation can be found in the [repo](https://github.com/bazelbuild/starlark) but the TL;DR is that Starlark is a dialect of python and is used by Tilt when coding the Tiltfile.

```python
# list comprehension
above30 = [name for name, age in people.items() if age >= 30]
print("{} people are above 30.".format(len(above30)))
# support objects(dictionary)
people = {
    "Alice": 22,
    "Bob": 40,
    "Charlie": 55,
    "Dave": 14,
}
# Define a function
def greet(name):
    """Return a greeting."""
    return "Hello {}!".format(name)
```

All Starlark code is valid Python code

```python
# here's a simple function to init the stack
k8s_fullstack="./k8s/website/overlays/localhost"
def k8s_init(kustomize_charts):
  k8s_yaml([kustomize(kustomize_charts)])
  return None
 k8s_init(k8s_fullstack)
```

## Starlark allows us to dynamically configure the testing environment in a readable and dynamic way.

---

# Docker/k8s

Using Kind instead of minikube allows us to configure a full cluster with a registry that the local k8s cluster will pull.
Using [ctlptl](https://github.com/tilt-dev/ctlptl) we can create a local registry in conjunction with the kind cluster we previously created.

```bash
ctlptl create registry ctlptl-registry --port=5005
ctlptl create cluster kind --registry=ctlptl-registry
```

Great for full integration testing (20s build time usually), but terrible for immediate changes like CSS.

---

# kind

The better alternative to minikube as we can replicate, withing a single docker container, a full cluster

```YAML
apiVersion: ctlptl.dev/v1alpha1
kind: Cluster
product: kind
registry: ctlptl-registry
kindV1Alpha4Cluster:
  name: infrastructure-professional-website
  nodes:
    - role: control-plane
    - role: worker
    - role: worker
    - role: worker
```

## known problems

There is however a steeper learning curve to `kind` compared to `minikube`. Kind can have its own docker registry and its integration with tools like `ctlptl` eludes me.

Replicating a production ingress is more complicated than what can be done using minikube.

---

# Demonstration

Stack:

- Frontend: Sveltekit
- Backend: gofiber
- DB: postgres
- DB helper: pgadmin
- k8s monitoring: prometheus from helm
- editor: neovim

Workflow:

- add an item in `frontend` /projects page and see the difference localhost/k8s
  - show localhost and k8s diff
  - show registry
- using postman make a few api calls to the backend
  - confirm using pgadmin4

---

# Integration within Atreides

Monorepo that depending on the usage (e.g. configuring the backend/frontend/infrastructure) pulls the relevant repos, calls their respective Titlfile, build the application.
