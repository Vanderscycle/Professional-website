# cheatsheet

https://kubernetes.io/docs/reference/kubectl/cheatsheet/

# k8s lessons learned

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

## access the stack

```
minikube ip
```

frontend

```
< minikube ip >:30400
```
