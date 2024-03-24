# Variables
sync_src_frontend= sync('./frontend', '/src')
frontend_port = 5173

# Build Docker image
docker_build('localhost:5000/frontend-sveltekit', context='./frontend', dockerfile='./frontend/Dockerfile', live_update=[sync_src_frontend] )

# Extensions
load('ext://helm_remote', 'helm_remote')

def infrastructure():
  print("""
  -----------------------------------------------------------------
  ✨ Kubernetes/Infrastructure Environment
  -----------------------------------------------------------------
  """.strip())
  # Apply Kubernetes manifests
  k8s_fullstack="./manifests/overlays/localhost"
  k8s_yaml([kustomize(k8s_fullstack, flags=['--enable-helm'])])

  # Customize a Kubernetes resource
  k8s_resource('sveltekit-frontend',labels="frontend",port_forwards='3000:3000')


def localhost():
    print("""
    -----------------------------------------------------------------
    ✨ Localhost Environment
    -----------------------------------------------------------------
    """.strip())
    
    update_settings(suppress_unused_image_warnings=["localhost:5000/frontend-sveltekit"])

    # ------------ frontend (sveltekit) ------------
    local_resource('localhost-frontend',
    serve_dir='./frontend',
    serve_cmd='pnpm run dev',
    deps='./frontend/pages',
    links=['http://localhost:{}'.format(frontend_port)],
    serve_env={},
    readiness_probe=probe(
        period_secs=60,
        http_get=http_get_action(port=frontend_port, path="/")
        )
    )


# Define the available modes and an initial selection
modes = ['localhost', 'infrastructure']
selection = modes[0]

if selection == 'localhost':
    localhost()
elif selection == 'infrastructure':
    infrastructure()