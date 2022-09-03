infra-dev:
	cd ./k8s/localhost && bash run.sh
	make serve-dev
	make login
	make start-dev

# https://argo-cd.readthedocs.io/en/stable/developer-guide/running-locally/
start-dev:
	kubectl -n argocd scale statefulset/argocd-application-controller --replicas 0
	kubectl -n argocd scale deployment/argocd-dex-server --replicas 0
	kubectl -n argocd scale deployment/argocd-repo-server --replicas 0
	kubectl -n argocd scale deployment/argocd-server --replicas 0
	kubectl -n argocd scale deployment/argocd-redis --replicas 0
	kubectl -n argocd scale deployment/argocd-applicationset-controller --replicas 0
	kubectl -n argocd scale deployment/argocd-notifications-controller --replicas 0
	kubectl config set-context --current --namespace=argocd
	kubectl apply -k ./k8s/argocd/overlays/localhost/

serve-dev:
	kubectl port-forward svc/argocd-server -n argocd 8080:443 & disown


clean:
	kind delete clusters infrastructure-professional-website

login:
	cd ./k8s/localhost && bash login.sh
