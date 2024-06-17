# Stage 1: Build Vite assets
FROM node:lts-alpine AS vite-builder
RUN corepack enable

# Set working directory
WORKDIR /app

RUN apk update
RUN apk add git --no-cache

# Copy Vite project files
COPY vite-demo/package.json ./
COPY vite-demo/pnpm-lock.yaml ./
COPY vite-demo .

# Install dependencies and build Vite assets
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Stage 2: Build Maven project
FROM maven:3.8.5-openjdk-8-slim AS maven-builder

# Set working directory
WORKDIR /app

# Copy Maven project files
COPY pom.xml ./
COPY src ./src

# Copy built Vite assets to the Maven project
COPY --from=vite-builder /src/main/webapp/WEB-INF/dist ./src/main/webapp/WEB-INF/dist

# Package the Maven project
RUN mvn clean package

# Stage 3: Run the application
FROM openjdk:8-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the WAR file from the Maven build stage
COPY --from=maven-builder /app/target/demo-app.war ./app.war

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.war"]
