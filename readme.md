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

## `/user/profile` Endpoint 

### Description 

Retrives the profile information of the currently authenticated user.

### HTTP Method 

`GET`

### Authentication

Requires a valid JWT token in the Authorization header : 
`Authorization: Bearer <token>`

### Example Response 

- `user` (object):
    - `fullName` (object).
         - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string, optional): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).

## `/user/logout` Endpoint 

### Description 

Logout the current user and blacklist the token provided in cooking or headers.

### HTTP Method 

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookies: 

## `/captain/register` Endpoint

### Description

Register a new captai by creating a certain account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields: 
- `fullname` (object):
    - `firstName` (string, required): Captain's first name (minimum 3 characters)
    - `lastname` (string, optional): Captain's last name
    - `vehicle` (object):
        - `color` (string, required): Vehicle color (minimum 3 characters).
        - `plate` (string, required): Vehicle plate number (minimum 3 characters).
        - `capacity` (number, required): Vehicle passenger capacity (minimum 1)
        - `vehicleType` (string, required): Type of vehicle (must be 'car', 'motorcycle' or 'auto')

        ### Example Response

- `captain` (object):
    - `fullName` (object).
         - `firstname` (string): User's first name .
        - `lastname` (string, optional): User's last name.
    - `email` (string): User's email address.
    - `password` (string): User's password.
    - `vehicle` (object)
        - `color` (string): User's color
        - `capacity` (number): Vehicle capacity
        - `VehicleType` (string): Vehicle type
        - `plate` (string): vehicle number plate
- `token` (String): JWT token