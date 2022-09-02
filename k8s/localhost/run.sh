#!/bin/bash
# needs: kind, kubectl, argocd
kind create cluster --config kind.yaml

# point to your ssh key
kind create cluster --config kind.yaml
kubectl get nodes

# argocd install
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
Disown allows you to detach a process to the shell
kubectl port-forward svc/argocd-server -n argocd 8080:443 & disown
# kubeseal install

# adding the ssh repo

# sleep 60 # giving time for the pod to start
# KEY_PATH="$HOME/.ssh/atreidesGit"
# TEMP_PASS=$(kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo)
# argocd login --password "$TEMP_PASS" --username admin localhost:8080
# argocd repo add git@github.com:Vanderscycle/Professional-website.gitt --ssh-private-key-path "$KEY_PATH" 

# starting
kubectl apply -k ../argocd/overlays/localhost/


# patch argocd install 
#TODO: makefile create local cluster
