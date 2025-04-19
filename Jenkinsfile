pipeline {
    agent any

    environment {
        // Define environment variables if needed
        JAVA_HOME = 'C:\\Program Files\\Java\\jdk-17'
        MAVEN_HOME = 'C:\\Program Files\\Apache\\apache-maven-3.8.1'
        PATH = "${JAVA_HOME}\\bin;${MAVEN_HOME}\\bin;${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git 'https://github.com/abhisri073/task-manager.git'
            }
        }

        stage('Build') {
            steps {
                // Execute Maven build using batch script (Windows)
                bat 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                // Execute Maven tests (adjust based on your project structure)
                bat 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy to your environment (if applicable)
                echo 'Deploying the application...'
                // Example of a deploy step (adjust as needed)
                // bat 'deploy.bat'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Perform any cleanup tasks here
        }
        success {
            echo 'Build and tests passed successfully.'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
