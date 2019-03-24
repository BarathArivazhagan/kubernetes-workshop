
FROM openjdk:8-jdk-alpine as final
ADD target/spring-boot-app-*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]