# Node-Js
Projects and Docs related to Node JS

JSON Web Tokens (JWT) have been introduced as a method of communicating between two parties securely.

Even though we can use JWT with any type of communication method, today JWT is very popular for handling authentication and authorization via HTTP.

HTTP is a stateless protocol, which means that an HTTP request does not maintain state. The server does not know about any previous requests that were sent by the same client.

HTTP requests should be self-contained. They should include the information about previous requests that the user made in the request itself.

There are a few ways of doing this, however, the most popular way is to set a session ID, which is a reference to the user information.

The server will store this session ID in memory or in a database. The client will send each request with this sessions ID. The server can then fetch information about the client using this reference.

On the other hand with JWT, when the client sends an authentication request to the server, it will send a JSON token back to the client, which includes all the information about the user with the response.

The client will send this token along with all the requests following that. So the server won't have to store any information about the session. But there is a problem with that approach. Anyone can send a fake request with a fake JSON token and pretend to be someone they are not.

# Structure of a JWT

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTE3MjEyOTN9.lXuQbgg0oAoR2q_FIaKWr8UO2WK4zeCmpjxI_PNj8KQ


As you can see in the image, there are three sections of this JWT, each separated with a dot.

The first section of the JWT is the header, which is a Base64-encoded string. If you decoded the header it would look something similar to this:

{
    "alg" : "HS256",
    "typ": "JWT"
}

The header section contains the hashing algorithm, which was used to generate the sign and the type of the token.


# Try out 

Let's send a post request to the http://localhost:3000/login endpoint with the following JSON:

{
    "username": "john",
    "password": "password123admin"
}

