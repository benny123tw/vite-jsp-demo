# Vite + Spring MVC Integration Demo

This project demonstrates how to integrate Vite with a legacy Spring MVC project (Java 8 or higher).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Java 8 or higher
- Node.js and pnpm

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

#### Start the Spring MVC server

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

or run the following command to build the front-end assets for production mode:

```sh
cd vite-demo
pnpm build
```

### Building for Production

1. **Build the frontend assets**:
   ```sh
   cd vite-demo
   pnpm build
   ```

2. **Build the backend**:
   ```sh
   ./mvnw package
   ```

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

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature
requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Inspired by:

- [Spring Framework](https://spring.io/projects/spring-framework)
- [Vite](https://vitejs.dev/)

Feel free to customize this README further to better suit your project's needs.
