# dilligent

## Assignment 1
Node js app for product listing 

### How to Run
#### DB Setup
Install My sql server
change below details in https://github.com/bipinkm/dilligent/blob/main/.env

1. DB_HOST=localhost
2. DB_PORT=3306
3. DB_USER=root
4. DB_PASS=Qq123456!
5. DB_DATABASE=dilligent
6. DB_LIMIT_PER_PAGE=10
7. DB_DIALECT=mysql

```
npm run dserver
```
### Tech Stack
Node js , Express, 
Sequelize,
My Sql

### Tools Used
1. VS code
2. My Sql CE
3. My Sql Workbench
4. Postman

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
1. Node js with Express and Mongoose
2. Mongo DB
3. Socket IO for Websocket 
4. JWT authentication
5. CORS 
6. Kafka 
7. ELK
8. Flutter

### Tools In Consideration
1. Kubernetes / Openshift
2. AWS/Azure 
3. VS Code with necessary plugins
4. Mongo DB atles / Cloud-managed Mongo
5. Identity Provider service
6. Git
7. Gitops / CICD Tools
8. Docker
9. Android Studio & Xcode
10. Postman

### NFR Considerations
1. Security 
2. Reliability
3. Performance
4. Scalability
5. Maintainability
6. Recoverability




