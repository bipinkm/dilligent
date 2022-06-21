# dilligent

## Assignment 1
Node js app for product listing 

### How to Run
```
npm run dserver
```
### Tech Stack
Node js , Express, 
Sequelize,
My Sql

### How to Run Test
Run test using postman
https://github.com/bipinkm/dilligent/blob/main/Dilligent.postman_collection.json

### Test result
https://github.com/bipinkm/dilligent/blob/main/TestResults.png

## Assignment 2
Design Speedy Cheers

### Design Diagram 
Available here
https://github.com/bipinkm/dilligent/blob/main/Assiment2design.jpg

### Overview
Requester request for a cheer driver, once the cheer driver gets the pop-up message, The driver will accept the request this particular driver will be allocated to this task. Once the task is completed the price will be calculated and the requester will pay and he can provide feedback on the service 

### Assumptions 
1. Both cheer driver and requestor are using the mobile app in a GPS-enabled mobile
2. deployed in cloud Kubernetes cluster
3. Manged Nosql DB cluster with backup and recovery
4. Deployed cloud should have elasticity and kubelet enabled 
5. ELK should be a separate cluster
6. All the Services should be Dockerized

### Technology stack
Node js with Express and Mongoose
Mongo DB
Socket IO for Websocket 
JWT authentication
CORS 
Kafka 
ELK
Flutter

### Tools In Consideration
Kubernetes / Openshift
AWS/Azure 
VS Code with necessary plugins
Mongo DB atles / Cloud-managed Mongo
Identity Provider service
Git
Gitops / CICD Tools
Docker
Android Studio & Xcode
Postman

### NFR Considerations
Security 
Reliability
Performance
Scalability
Maintainability
Recoverability




