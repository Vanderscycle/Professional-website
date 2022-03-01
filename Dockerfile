FROM archlinux:latest
ENV GOPATH=/root/buildah

WORKDIR /home/node
COPY . /home/node
EXPOSE 3000
# arch for later
# From archlinux:latest
RUN pacman -Syu --noconfirm \
  && pacman -S npm --noconfirm
RUN (cd /home/node \ 
  && npm ci \
  && npm run build \
  && node dist/src/main.js)


