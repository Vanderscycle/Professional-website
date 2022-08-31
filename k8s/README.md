# kind

Cluster [configuration](https://kind.sigs.k8s.io/docs/user/configuration/). To initiate a new kind cluster:

```bash 
kind create cluster --config kind.yaml
```

To confirm the creation is correct.
```bash
kubectl get nodes
```
