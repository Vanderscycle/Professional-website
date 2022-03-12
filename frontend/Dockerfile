FROM archlinux:latest
ENV GOPATH=/root/buildah
ENV VITE_WEBSITE_STATE production

WORKDIR /home/app
COPY . /home/app
EXPOSE 3000
# arch for later
# From archlinux:latest
RUN pacman -Syu --noconfirm \
  && pacman -S npm --noconfirm
RUN (cd /home/node \ 
  && npm ci --only=production \
  && npm run build \
  && node /home/app/build/index.js)


