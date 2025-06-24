# Backend API Documentation

## `/users/resgister` Endpoint

### Description

Register a new user by creating a user account with

### Http Method

`POST`


### Request Body

The request body should be in JSON format and include following fields:

- `fullName` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
    - `email` (string, required): User's email address (must be a valid email).
    - `password` (string, required): User's password(minimum 6 characters).

### Example Response

- `user` (object):
    - `fullName` (object).
         - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string, optional): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password(minimum 6 characters).
- `token` (String): JWT token

### `/user/login` EndPoint

### Request Body

The request body should be in JSON format and include the following fields:
- `email` (string, required): User's email address (must a valid email).
- `password` (string,required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
    - `fullName` (object).
         - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string, optional): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password(minimum 6 characters).
- `token` (String): JWT token


