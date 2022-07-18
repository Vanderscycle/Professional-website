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
