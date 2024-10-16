# Use the Playwright image as the base
FROM mcr.microsoft.com/playwright:v1.48.1-noble

# Install OpenJDK (Java) and necessary tools
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    apt-get clean;

# Set environment variable for Java
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH="$JAVA_HOME/bin:$PATH"

# Set working directory inside the container
WORKDIR /nextjs

# Copy the rest of the application code
COPY . .

# Install Node.js dependencies
RUN npm ci

# Entry point: Run all tests (adjust based on your needs)
CMD npm run test:ct
