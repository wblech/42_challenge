**Full-Time-Selection-Process-Wblech**
----

* **URL**

  http://localhost:3000/students

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   Return all students register in the database

   `http://localhost:3000/students`

* **Success Response:**

   * **Code:** 200 <br />
    **Content:**

```json
  [
      {
          "id": 1,
          "name": "Gustavo Belfort",
          "intra_id": "gus",
          "projects": [
              "42cursus_libft",
              "42cursus_get-next-line",
              "42cursus_ft-printf",
          ]
      },
      {
          "id": 2,
          "name": "Guilhemar Caixeta",
          "intra_id": "guiga",
          "projects": [
              "cub3d",
          ]
      }
  ]
  ```

   **Optional:**

	Return only the project in the param

   `http://localhost:3000/students?project=[name of the project]`

* **Success Response:**

    * **Code:** 200 <br />
    **Content:**

`/students?project=42cursus_libft`

```json
[
    {
        "id": 1,
        "name": "Gustavo Belfort",
        "intra_id": "gus",
        "projects": [
            "42cursus_libft",
            "42cursus_get-next-line",
            "42cursus_ft-printf",
        ]
    }
]
```

* **Method:**

  `POST`

 * **Data Body**

```json
    {
     "name": "Wincenty Lech",
     "intra_id": "wbertoni",
     "projects": [
       "42cursus_get-next-line",
       "42cursus_ft-printf"
     ]
    }
```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**

```json
    {
     "name": "Wincenty Lech",
     "intra_id": "wbertoni",
     "projects": [
       "42cursus_get-next-line",
       "42cursus_ft-printf"
     ]
    }
```

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{  "error": "duplicate key value violates unique constraint \"UQ_71357dfe51cc887dedbb5ec6899\"" }`

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**

   Delete the student related to the id

   `http://localhost:3000/students/:id`

* **Success Response:**

   * **Code:** 200 <br />
    **Content:** `{}`

	**URL**

  http://localhost:3000/users


* **Method:**

  `POST`

 * **Data Body**

 Creates a User

```json
   {
    "name": "Wincenty Lech",
    "email": "wblech@teste.com",
    "password": "12345"
   }
```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**

```json
   }
     "name": "Wincenty Lech",
     "email": "wblech@teste.com",
     "id": 5,
     "created_at": "2020-07-15T23:07:46.853Z",
     "updated_at": "2020-07-15T23:07:46.853Z"
   }
```
* **Error Response:**

 * **Code:** 400 Bad Request <br />
    **Content:** `{ "error": "Email address used" }`

**URL**

  http://localhost:3000/sessions


* **Method:**

  `POST`

 * **Data Body**

Creates a session

```json
   {
    "email": "wblech@teste.com",
    "password": "12345"
   }
```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**

```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTQ4NDUzMzgsImV4cCI6MTU5NDkzMTczOCwic3ViIjoiNSJ9.zIcBCkM34S56l-4c2mYbmSXqPHTaPG-vXj4iCGXmN1Y"
    }
```

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{  "error": "Email/Password invalid" }`


**URL**

  http://localhost:3000/testauth


* **Method:**

  `GET`

 * **Data Header**

Give a json if user is authenticated

```
   name: Authorization
   value: Bearer <token>
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

```json
  {
    "message": "Only auth user gets this message",
    "user_id": "5"
  }
```

* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:**
	```
	Error: JWT token is missing.
	 at ensureAuthenticated (/Users/Wblech/Desktop/42_vaga/src/middleware/ensureAuthenticated.ts:19:9)
    at Layer.handle [as handle_request] (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:317:13)
    at /Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:47:12)
    at Layer.handle [as handle_request] (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:317:13)
	```

	* **Code:** 500 Internal Server Error <br />
    **Content:**

	```
	Error: Invalid JWT token
    at ensureAuthenticated (/Users/Wblech/Desktop/42_vaga/src/middleware/ensureAuthenticated.ts:34:9)
    at Layer.handle [as handle_request] (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:317:13)
    at /Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:47:12)
    at Layer.handle [as handle_request] (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/Wblech/Desktop/42_vaga/node_modules/express/lib/router/index.js:317:13)
	```

* **Schema:**

   `Student`

```json
    {
     "id": "integer",
     "name": "string",
     "intra_id": "string",
     "projects": "string[]"
    }
```

   `User`

```json
    {
     "id": "integer",
     "name": "string",
     "email": "string",
	 "password": "string",
	 "created_at": "date",
	 "updated_at": "date
    }
```
