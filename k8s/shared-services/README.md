# cheatsheet

https://kubernetes.io/docs/reference/kubectl/cheatsheet/

# k8s lessons learned

https://www.youtube.com/watch?v=6N7KUzIRO2k

add a github repo using argocd cli (ssh)

```
argocd repo add git@github.com:argoproj/argocd-example-apps.git --ssh-private-key-path ~/.ssh/id_rsa
```

first verification step

```
kustomize build overlays/non-prod
```

second verification step

```
kubectl apply -k overlays/non-prod
```

third verification

```
kustomize build overlays/non-prod/ | kubectl diff -f -
```

when changing labels you have to recreate the [deployment](https://github.com/kubernetes/client-go/issues/508#issuecomment-589296590)

```
kubectl get deploy
kubectl delete deploy <deployment name>
```

to get <all,pods...> by labels

```
kubectl get all --selector=app.kubernete
s.io/name=pgadmin
```

to show all the labels (pods in this case)

```bash
kubectl get pods --show-labels
```

Sometimes the deploy doesn't go the way we wanted

```
kubectl get deploy
kubectl delete deploy <namedeployment>
```

in this scenario we can login to the db
to create a new db use the minikubeip:given port
todo:

- move env variables to a configmap

## container building with podman

[ref](https://computingforgeeks.com/how-to-publish-docker-image-to-docker-hub-with-podman/)
to push containers directly from to a repository (must include a github action)

build the container and tag

```
podman build -t docker.io/vandercycle/professional-website-backend:latest .
```

figure out how to store the credentials on github

```
podman login docker.io
```

```
podman push docker.io/vandercycle/professional-website-backend:latest
```

to run locally using a local .env file

```bash
podman run --env-file .env -dt --name slack-bot -p 3001:3000/tcp docker.io/vandercycle/slack-bot:latest-dev
```

## access the stack

```
minikube ip
```

frontend

```
< minikube ip >:30400
```

# using minikube locally

add `minikube ip` to the list of hosts

```bash
sudoedit /etc/hosts
```

if entering manually

```bash
192.168.59.100 my.app.io
192.168.59.100 my.app.pgadmin.io
```

## volumes

Persistent Volume (PV) − It’s a piece of network storage that has been provisioned by the administrator. It’s a resource in the cluster which is independent of any individual pod that uses the PV.

```bash
kubectl get pv
kubectl describe pv <name>
```

Persistent Volume Claim (PVC) − The storage requested by Kubernetes for its pods is known as PVC. The user does not need to know the underlying provisioning. The claims must be created in the same namespace where the pod is created.

```bash
kubectl get pvc
kubectl describe pvc <name>
```

to view the space taken by a pod

```bash
kubectl -n <namespace> exec <pod-name> df
```

## pgadmin

```sql
SELECT datname FROM pg_database
WHERE datistemplate = false;
```

list only table that we created

```sql
SELECT table_name FROM information_schema.tables WHERE table_schema='public'
```

in this case if the db is called encrypted_data

```sql
SELECT * FROM encrypted_data LIMIT 10
```

## secrets (kubeseal)

### references

- [yt](https://www.youtube.com/watch?v=rnPqKOF05Mk)
- [dev]()
  install `kubeseal` using pacman/yay

install the client controller check kubeseal [repo](https://github.com/bitnami-labs/sealed-secrets) for the latest release

```bash
kubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.18.1/controller.yaml
```

using an env file

```bash
kubectl --namespace=<namespace>create secret generic <name>-secret --from-env-file=<location> -o json --dry-run=client
```

using literal

```bash
kubectl --namespace=<namespace>create secret generic <name>-secret --from-env-file=<location> -o json --dry-run=client
```

creating the sealed secret

```bash
kubectl --namespace=<namespace>create secret generic <name>-secret --from-env-file=<location> -o json --dry-run=client | kubeseal -o yaml > sealedsecret.yaml
```

adding to the sealed secret

```bash

kubectl --namespace=<namespace>create secret generic <name>-secret --from-env-file=<location> -o json --dry-run=client | kubeseal -o yaml --merge-into sealedsecret.yaml
```

you will have to add something along those lines to the deployment file

```bash
# within the container
          volumeMounts:
            - name: secrets-vol
              mountPath: /secrets
              readOnly: true
# within the spec
      volumes:
        - name: secrets-vol
          secret:
            secretName: historic-data-search-bot-secret
```

## ingress ssl certificate

run using this [reference](https://towardsdatascience.com/ssl-tls-for-your-kubernetes-cluster-with-cert-manager-3db24338f17)
