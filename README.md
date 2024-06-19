# Vite + Spring MVC Integration Demo

This project demonstrates how to integrate Vite with a legacy Spring MVC project (Java 8 or higher).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Java 8 or higher
- Node.js and pnpm
- Docker (optional, for running the application in a container)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/benny123tw/vite-jsp-demo
   cd vite-jsp-demo
   ```

2. **Install backend dependencies**:
   ```sh
   ./mvnw clean install
   ```

3. **Install frontend dependencies**:
   ```sh
   cd vite-demo
   pnpm install
   ```

### Running the Application

#### Start the Spring MVC server with IDE

In this project, we will use IDEA to run the Spring MVC server. You could configure the server with
your preferred IDE.

1. Open the project in IDEA
2. Edit Run/Debug Configurations
3. Add a new configuration for Tomcat Server (version 9.0.x)
4. Add war exploded artifact at Deployment tab
5. You can modify the application context if you want, that said, the default context
   is `/spring_mvc`
6. Back to Server tab, you could also modify the HTTP port if you want, that said, the default port
   is `8989`
7. Edit the URL: `http://localhost:8989/spring_mvc/hello`
8. Switch to Startup/Connection tab, add Environment variable `spring.profiles.active` to `prod`
9. Click run the start the server in production mode; click the debug button to start the server in
   debug mode

#### Start the Vite development server

```sh
cd vite-demo
pnpm dev
```

After you run the above command, you will see the following output in the console:

```shell
VITE v5.2.12  ready in 3434 ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help

JAVA 1.8  plugin v0.0.1
```

#### Build and run in production mode

1. **Build the frontend assets**:
   ```sh
   cd vite-demo
   pnpm build
   ```

2. **Build the backend**:
   ```sh
   ./mvnw package
   ```

3. **Run the backend**:
   ```sh
   java -jar target/your-app-name.war --spring.profiles.active=prod
   ```

### Running the Application with Docker

You can also run the application using Docker:

1. **Build the Docker image**:
   ```sh
   docker build -t spring_mvc .
   ```

2. **Run the Docker container**:
   ```sh
   docker run -d -p 8989:8080 -e "SPRING_PROFILES_ACTIVE=prod" spring_mvc
   ```

3. **Access the application**:
   Open your browser and navigate to `http://localhost:8989/spring_mvc/hello`

### Project Structure

- **src/main/java/com/benny**: Contains Java source files
    - **bean**: Bean definitions
    - **config**: Configuration classes
    - **controller**: Spring MVC controllers
    - **service**: Service layer classes

- **src/main/resources**: Application resources
- **src/main/webapp**: Web application files
    - **WEB-INF**: Contains JSP views and web.xml configuration
    - **dist**: Directory where Vite builds assets

- **vite-demo**: Contains the Vite project
    - **src**: Frontend source files

## Profiles

This project uses Spring profiles to manage environment-specific configurations. The available
profiles are:

- **dev**: For development environment. Uses `application-dev.properties`.
- **prod**: For production environment. Uses `application-prod.properties`.
- **default**: Fallback configuration. Uses `application.properties`.

You can activate a profile by setting the `spring.profiles.active` environment variable.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature
requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Spring Framework](https://spring.io/projects/spring-framework)
- [Vite](https://vitejs.dev/)
