# Purpose #

  

This is a PoC to learn how to put in work nestjs and a Kafka cluster to achieve a CQRS/ES architecture that fits well with IoT use cases.

  [NestJS](https://docs.nestjs.com) is the new enterprise app framework for Node.js ecosystems. It has many nice features such as dependency injection out of the box and a library for CQRS microservices

[kafka](https://kafka.apache.org/documentation/) is the popular messaging integrations platform that comes straight out from Linkedin. [Confluent](https://www.confluent.io/) is the main project contributor as well as the company that provided me the docker-compose image that i'll use through this project

# Run #

init -> cd /app && npm i (it will take some time to compile kafka client)
execute tests -> cd /app && npm run test
start http server -> cd /app && npm start
start everything -> chmod +x run.sh && ./run.sh