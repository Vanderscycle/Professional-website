# Welcome to Tilt!
#   To get you started as quickly as possible, we have created a
#   starter Tiltfile for you.
#
#   Uncomment, modify, and delete any commands as needed for your
#   project's configuration.


# Output diagnostic messages
#   You can print log messages, warnings, and fatal errors, which will
#   appear in the (Tiltfile) resource in the web UI. Tiltfiles support
#   multiline strings and common string operations such as formatting.
#
#   More info: https://docs.tilt.dev/api.html#api.warn
print("""
-----------------------------------------------------------------
✨ Hello Tilt! This appears in the (Tiltfile) pane whenever Tilt
   evaluates this file.
-----------------------------------------------------------------
""".strip())
warn('ℹ️ Open {tiltfile_path} in your favorite editor to get started.'.format(
    tiltfile_path=config.main_path))


# Build Docker image
#   Tilt will automatically associate image builds with the resource(s)
#   that reference them (e.g. via Kubernetes or Docker Compose YAML).
#
#   More info: https://docs.tilt.dev/api.html#api.docker_build
#
# docker_build('registry.example.com/my-image',
#              context='.',
#              # (Optional) Use a custom Dockerfile path
#              dockerfile='./deploy/app.dockerfile',
#              # (Optional) Filter the paths used in the build
#              only=['./app'],
#              # (Recommended) Updating a running container in-place
#              # https://docs.tilt.dev/live_update_reference.html
#              live_update=[
#                 # Sync files from host to container
#                 sync('./app', '/src/'),
#                 # Execute commands inside the container when certain
#                 # paths change
#                 run('/src/codegen.sh', trigger=['./app/api'])
#              ]
# )
sync_src_frontend= sync('./frontend', '/src')
sync_src_backend= sync('./backend', '/')
docker_build('vandercycle/professional-website', './frontend', dockerfile='./frontend/Dockerfile', live_update=[sync_src_frontend] )
docker_build('vandercycle/professional-website-backend', './backend',dockerfile='./backend/Dockerfile', live_update=[sync_src_backend])
# k8s_kind("kind-kind",image_json_path='{.spec.runtime.image}')

# Apply Kubernetes manifests
#   Tilt will build & push any necessary images, re-deploying your
#   resources as they change.
#
#   More info: https://docs.tilt.dev/api.html#api.k8s_yaml
#

#BUG: full argocd (not working)
# kustomize_path="./k8s/argocd/overlays/localhost"
# k8s_yaml([kustomize(kustomize_path)])
#INFO: helm
load('ext://helm_resource', 'helm_resource', 'helm_repo')
helm_repo('kube-prometheus-stack', 'https://prometheus-community.github.io/helm-charts')
helm_resource('kube-prometheus', 'prometheus-community/kube-prometheus-stack',release_name='monitoring', flags=['--create-namespace'], namespace='monitoring')

#INFO: https://github.com/prometheus-operator/kube-prometheus/blob/main/docs/access-ui.md
# local_resource('grafana-ui', dir='./k8s/charts/prometheus-grafana',cmd='kubectl port-forward --namespace=monitoring svc/monitoring-grafana 9092:3000',labels=['port-fwd'])
# local_resource('alertmanager-ui', dir='./k8s/charts/prometheus-grafana',cmd='kubectl port-forward --namespace=monitoring svc/alertmanager-operated 9093:9093',labels=['port-fwd'])
k8s_fullstack="./k8s/website/overlays/localhost"

k8s_yaml([kustomize(k8s_fullstack)])
# k8s_custom_deploy(
#      'website',
#      apply_cmd='kustomize build ./k8s/website | kubectl apply -f -',delete_cmd='kubectl delete all --all', deps=['']
#  )
k8s_resource('frontend',labels="frontend",port_forwards=port_forward(3000,name="sveltekit"))
k8s_resource('pgadmin',labels="backend",port_forwards=8000)
k8s_resource('gofiber',labels="backend",port_forwards=5000)
k8s_resource('postgres',labels="backend",port_forwards=5433)
k8s_resource('kube-prometheus',extra_pod_selectors=[{'app.kubernetes.io/component': 'app'}],port_forwards=['9090:9090','9092:3000','9093:9093'])

#BUG: custom argocd (kinda working)
# k8s_custom_deploy(
#      'argocd',
#      apply_cmd='kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml 1>&2',delete_cmd='kubectl delete all --all -n argocd', deps=['']
#  )
# Customize a Kubernetes resource
#   By default, Kubernetes resource names are automatically assigned
#   based on objects in the YAML manifests, e.g. Deployment name.
#
#   Tilt strives for sane defaults, so calling k8s_resource is
#   optional, and you only need to pass the arguments you want to
#   override.
#
#   More info: https://docs.tilt.dev/api.html#api.k8s_resource
#
# k8s_resource('my-deployment',
#              # map one or more local ports to ports on your Pod
#              port_forwards=['5000:8080'],
#              # change whether the resource is started by default
#              auto_init=False,
#              # control whether the resource automatically updates
#              trigger_mode=TRIGGER_MODE_MANUAL
# )
# TODO: goal is to forward kubectl port

# Run local commands
#   Local commands can be helpful for one-time tasks like installing
#   project prerequisites. They can also manage long-lived processes
#   for non-containerized services or dependencies.
#
#   More info: https://docs.tilt.dev/local_resource.html
#
# local_resource('install-helm',
#                cmd='which helm > /dev/null || brew install helm',
#                # `cmd_bat`, when present, is used instead of `cmd` on Windows.
#                cmd_bat=[
#                    'powershell.exe',
#                    '-Noninteractive',
#                    '-Command',
#                    '& {if (!(Get-Command helm -ErrorAction SilentlyContinue)) {scoop install helm}}'
#                ]
# )
local_resource('frontend-pnpm', dir='./frontend',cmd='pnpm install', deps='./frontend/package-lock.yaml',labels=['packages'])
local_resource('backend-go', dir='./backend',cmd='go get -u ./...',labels=['packages'])


# local_resource('argocd', dir='.',)
# ,''
# Extensions are open-source, pre-packaged functions that extend Tilt
#
#   More info: https://github.com/tilt-dev/tilt-extensions
#
load('ext://git_resource', 'git_checkout')


# Organize logic into functions
#   Tiltfiles are written in Starlark, a Python-inspired language, so
#   you can use functions, conditionals, loops, and more.
#
#   More info: https://docs.tilt.dev/tiltfile_concepts.html
#
def tilt_demo():
    # Tilt provides many useful portable built-ins
    # https://docs.tilt.dev/api.html#modules.os.path.exists
    if os.path.exists('tilt-avatars/Tiltfile'):
        # It's possible to load other Tiltfiles to further organize
        # your logic in large projects
        # https://docs.tilt.dev/multiple_repos.html
        load_dynamic('tilt-avatars/Tiltfile')
    watch_file('tilt-avatars/Tiltfile')
    git_checkout('https://github.com/tilt-dev/tilt-avatars.git',
                 checkout_dir='tilt-avatars')


# Edit your Tiltfile without restarting Tilt
#   While running `tilt up`, Tilt watches the Tiltfile on disk and
#   automatically re-evaluates it on change.
#
#   To see it in action, try uncommenting the following line with
#   Tilt running.
tilt_demo()
