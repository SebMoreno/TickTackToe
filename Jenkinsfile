pipeline {
  agent any
  tools { nodejs "nodejs" }
  stages{
    stage("Install Application") {
       steps {
          print("--------------------------------Running Install--------------------------------")
          sh 'npm install'
       }
    }
    stage("Build Application") {
       steps {
          print("--------------------------------Running Build--------------------------------")
          sh 'npm run build'
       }
    }
    stage("Test Application") {
        steps {
          print("--------------------------------Running Tests--------------------------------")
          sh 'npm run test-headless'
       }
    }
    stage ('Deploy Application') {
      steps {
          print("--------------------------------Deploying--------------------------------")
          withCredentials([string(credentialsId: 'firebase_token', variable: 'token')]) {
            sh "firebase deploy --token '${token}'"
          }
      }
    }
  }
}


