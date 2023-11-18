print("""
-----------------------------------------------------------------
✨ Hello Tilt! This appears in the (Tiltfile) pane whenever Tilt
   evaluates this file.
-----------------------------------------------------------------
""".strip())
warn('ℹ️ Open {tiltfile_path} in your favorite editor to get started.'.format(
    tiltfile_path=config.main_path))

update_settings ( max_parallel_updates = 6 , k8s_upsert_timeout_secs = 60)

# Build Docker image
#   Tilt will automatically associate image builds with the resource(s)
#   that reference them (e.g. via Kubernetes or Docker Compose YAML).
#
#   More info: https://docs.tilt.dev/api.html#api.docker_build

sync_src_frontend= sync('./frontend', '/src')
sync_src_backend= sync('./backend', '/')

docker_build('vandercycle/professional-website', './frontend', dockerfile='./frontend/Dockerfile', live_update=[sync_src_frontend] )
docker_build('vandercycle/professional-website-backend', './backend',dockerfile='./backend/Dockerfile', live_update=[sync_src_backend])
k8s_kind("kind-kind",image_json_path='{.spec.runtime.image}')

# Apply Kubernetes manifests
#   Tilt will build & push any necessary images, re-deploying your
#   resources as they change.
#
#   More info: https://docs.tilt.dev/api.html#api.k8s_yaml
#

#INFO: helm
load('ext://helm_resource', 'helm_resource', 'helm_repo')

k8s_fullstack="./k8s/website/overlays/localhost"
k8s_yaml([kustomize(k8s_fullstack)])
k8s_resource('frontend',labels="frontend",port_forwards=port_forward(3000,name="sveltekit"))
k8s_resource('gofiber',labels="backend",port_forwards=5000)


# TODO: goal is to forward kubectl port

# Run local commands
#   Local commands can be helpful for one-time tasks like installing
#   project prerequisites. They can also manage long-lived processes
#   for non-containerized services or dependencies.
#
#   More info: https://docs.tilt.dev/local_resource.html
#

local_resource('frontend-pnpm', dir='./frontend',cmd='pnpm install', deps='./frontend/package-lock.yaml',labels=['packages'])
local_resource('frontend-dev', dir='./frontend',cmd='pnpm run dev ', deps='./frontend/src',labels=['localhost'], auto_init=False, trigger_mode=TRIGGER_MODE_MANUAL)
local_resource('backend-go', dir='./backend',cmd='go get -u ./...',labels=['packages'])