#free port 3100 (dev)
PORT=3000
lsof -i TCP:$PORT | grep LISTEN | awk -F " " '{print$2}' | xargs kill -9
podman pull docker.io/library/archlinux
ctr=$(buildah from --name frontend-svelte archlinux)
# buildah config --env GOPATH=/root/buildah $ctr
# buildah config --port 3100 $ctr # can also use cmd
buildah add $ctr .

buildah run $ctr /bin/sh -c 'pacman -Syu --noconfirm \
  && pacman -S npm --noconfirm'

buildah run $ctr /bin/sh -c 'npm run build \
  && rm -rf dist/documentation \
  && node dist/src/main.js'


buildah config $ctr --env _BUILDAH_STARTED_IN_USERNS="" --env BUILDAH_ISOLATION=chroot
# saves the file
buildah commit $ctr nestjs-miner
buildah rm frontend-svelte 

#INFO: runs the image
podman -dt run $ctr
#-p 3100:3100 # host port: container port

