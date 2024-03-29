# using the non-alpine image because of datadog glibc requirement
FROM --platform=linux/x86_64 node:18 AS builder
WORKDIR /app

# Install pnpm
RUN apt install curl && \
    curl -fsSL https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Export the PATH variable where pnpm is installed
ENV PATH /root/.pnpm/bin:$PATH

# Files required by pnpm install
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the app and prune dev dependencies
RUN pnpm run build
# Use a separate stage to minimize the final image size
FROM --platform=linux/x86_64 node:18
# It's a good practice to not run the application as root; use the node user instead
USER node

WORKDIR /app

# Copy the build output and node_modules from the previous stage
COPY --from=builder --chown=node:node /app/build /app
COPY --from=builder --chown=node:node /app/node_modules /app/node_modules
COPY --from=builder --chown=node:node /app/package.json /app/package.json

# Expose the port the app runs on
EXPOSE 3000

CMD ["node","./index.js"]