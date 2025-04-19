pipeline {
    agent any

    tools {
        maven 'Maven 3.x'
        jdk 'Java 11'
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning the repository...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application with Maven...'
                sh 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the Spring Boot App...'
                sh 'java -jar target/*.jar &'
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deployment Success!'
        }
        failure {
            echo '❌ Build Failed.'
        }
    }
}
