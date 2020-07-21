# Coding Challenge Vaga Full-time 42 São Paulo

This is a simple API that register a student data. It was created for the 42 challenge. Please find the

For documentation click this [link](https://github.com/wblech/42_challenge/blob/master/documentation.md)

You can get the insomnia json [here](https://github.com/wblech/42_challenge/blob/master/insomnia)


- [Coding Challenge Vaga Full-time 42 São Paulo](#coding-challenge-vaga-full-time-42-são-paulo)
	- [How to install and run](#how-to-install-and-run)
	- [What it does and how it works?](#what-it-does-and-how-it-works)
		- [What is does?](#what-is-does)
		- [How it Works](#how-it-works)

## How to install and run

1) To install first you need to clone this repository:

   ```git
   git clone https://github.com/42sp/full-time-selection-process-wblech
   ```

2) Run [docker-compose](https://docs.docker.com/compose/) at the root folder:

   ```
   docker-compose up
   ```

2) Wait until you get this message:

   ```
   🐶 Server running at port 3000
   ```

* The APP will be running at in a dev:

   ```
   http://localhost:3000
   ```

## What it does and how it works?

### What is does?

   1) It Create, Read and Delete an Student data, using the http method **POST**,
   **GET** and **DELETE**.

* The data is stored in a Postgres Database.

* The Student data has this struct:

```json
    {
     "id": "integer",
     "name": "string",
     "intra_id": "string",
     "projects": "string[]"
    }
```

   2) It Create a User data using the http method **POST**.

* The data is stored in a Postgres Database.
* The User data has this struct:

```json
    {
     "id": "integer",
     "name": "string",
     "email": "string",
	 "password": "string",
	 "created_at": "date",
	 "updated_at": "date"
    }
```

3) It uses a JWT authentication and allow a User authenticated to access a
`testauth` route.

### How it Works

1) Students route

   a) To create a new Student send an http POST method in a json body to
   `http://localhost:3000/students`

   b) To read a Student send an http GET method to `http://localhost:3000/students`

   b.1) This GET method allows query named `project` which brings only
   Student data that has the project in the project item.
   Send a GET method to `http://localhost:3000/students?project=name_project`

   c) To delete a Student send an http method delete with a id param
   `http://localhost:3000/students/:id`

2) User route

   To create a User send an http POST method in a json body to
   `http://localhost:3000/users`

3) Create a JWT token

   To create a JWT token send an http POST method in a json body to
   `http://localhost:3000/sessions`

4) Access Test Auth get

   To access the auth route, send and http GET method with a header Authorization
   to `http://localhost:3000/testauth`
