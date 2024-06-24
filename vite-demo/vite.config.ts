import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import java, { createRollupInputConfig } from 'vite-plugin-java'

export default defineConfig({
  build: {
    outDir: '../src/main/webapp/WEB-INF/dist',
    // For cleaning up the output directory outside the project before building
    emptyOutDir: true,
  },
  plugins: [
    // For resolving tsconfig alias
    tsconfigPaths(),
    java({
      javaProjectBase: '../',

      // This should be your application context path + resource handler configuration in your Spring MVC application.
      // Example:
      // @Override
      // public void addResourceHandlers(ResourceHandlerRegistry registry) {
      //     registry.addResourceHandler("/resources/**")
      //             .addResourceLocations("/WEB-INF/dist/");
      // }
      buildDirectory: 'spring_mvc/resources',

      // The directory in the Vite project that is treated as the public directory.
      // Static assets in this directory are served directly at the root level.
      // For example, if `publicDirectory` is set to 'public':
      // import '/vite.svg' will resolve to 'public/vite.svg'.
      publicDirectory: 'public',

      // Function to create Rollup input configuration based on the provided patterns.
      input: createRollupInputConfig('src/**/main.ts', 'src'),
    }),
  ],
})

