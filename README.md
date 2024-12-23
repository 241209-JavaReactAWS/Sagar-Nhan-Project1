# Diecast Toy Shop Project

## Description
Welcome to the Diecast Toy Shop project! This full-stack application serves as a platform for managing and showcasing a collection of diecast model cars. The project is built with Java Spring Boot for the backend, PostgreSQL for data persistence, and React with TypeScript for the frontend.

### Backend 
- **Framework:** Spring Boot
- **Modules:** 
  - Spring Web
  - Spring Data JPA
- **Database Options:** 
  - PostgreSQL


### Frontend
- **Framework:** React
- **Language:** TypeScript
- **Communication**: Axios

## Installation
###Backend Setup
Generate the Project
Visit Spring Initializr.
Configure the project with the following settings:
- #Project: Maven
- #Language: Java
- #Spring Boot Version: 3.3.6 
  ##Dependencies:
- #Spring Web
- #Spring Data JPA
- #PostgresSQL

## Configure the Database
- Create a PostgreSQL database 
- Update the **src/main/resources/application.properties** file with your database credentials: 
```
spring.datasource.url=jdbc:postgresql://localhost:5432/ecommerce_db
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
```
