# Node-Js
Projects and Docs related to Node JS

JSON Web Tokens (JWT) have been introduced as a method of communicating between two parties securely.

Even though we can use JWT with any type of communication method, today JWT is very popular for handling authentication and authorization via HTTP.

HTTP is a stateless protocol, which means that an HTTP request does not maintain state. The server does not know about any previous requests that were sent by the same client.

HTTP requests should be self-contained. They should include the information about previous requests that the user made in the request itself.

There are a few ways of doing this, however, the most popular way is to set a session ID, which is a reference to the user information.

The server will store this session ID in memory or in a database. The client will send each request with this sessions ID. The server can then fetch information about the client using this reference.
