# BACKEND API Documentation

##  `/users/register` Endpoint

### Description
 
This endpoint registers a new user. It validates the following fields:
- `fullname.firstname`: Required, string with at least 3 characters.
- `fullname.lastname`: Optional, string.
- `email`: Required, valid email format.
- `password`: Required, string with at least 6 characters.

### Request Body Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secret123"
}
```

### Response Status Codes
- **201 Created**: User registered successfully. Returns the user object and an authentication token.
- **400 Bad Request**: Validation errors. Returns an array of error messages.

### Notes
- All fields except `lastname` are required.
- The password is hashed before storage.

### Example Response

-`user` (object):
- `fullname` (object). I
-`firstname` (string): User's first name (minimum 3 characters).
-`lastname` (string): User's last name (minimum 3 characters).
-`email` (string): User's email address (must be a valid email).
- `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/login` Endpoint

### Description

This endpoint authenticates an existing user and returns an authentication token.

### Request Body Example
```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

### Response Status Codes
- **200 OK**: Returns the authenticated user object and a JWT token.
- **400 Bad Request**: Validation errors.
- **401 Unauthorized**: Invalid email or password.

### Example Response

-`user` (object):
- `fullname` (object). I
-`firstname` (string): User's first name (minimum 3 characters).
-`lastname` (string): User's last name (minimum 3 characters).
-`email` (string): User's email address (must be a valid email).
- `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token
