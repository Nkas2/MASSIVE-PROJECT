# API ENDPOINT USER

## REGISTER USER API

Endpoint: POST /api/users

Request Body 
```json
{
  "name": "john",
  "email": "john@gmail.com",
  "phone_number": "085122222222",
  "password": "rahasia",
  "conf_password": "rahasia"
}
```

Response body success 
```json
{
  "data": "OK"
}
```

Response body errors
```json
{
  "errors": "email already registered"
}
```

## LOGIN USER API

Endpoint: POST /api/users/login

Request Body
```json
{
  "email": "john@gmail.com",
  "password": "rahasia"
}
```

Response Body
- Session: JWT AUTH TOKEN
```json
{
  "data": {
    "access_token": "unique_access_token" // exp in 1 minute
  }
}
```

Response Body Error
```json
{
  "errors": "wrong email or password"
}
```

## CHANGE PASSWORD
Endpoint: PATCH /api/users

Header
- Authorization: "Bearer access_token"

Request Body

```json
{
  "old_password": "rahasia",
  "new_password": "rahasia2",
  "new_password_conf": "rahasia2"
}
```

Response Body Success
```json
{
  "data": "OK"
}
```

Response Body Error
```json
{
  "errors": "wrong password"
}
```

## GET EDIT PROFILE DATA
Endpoint: GET /api/users/details

Header
- Authorization: "Bearer access_token"

Request Body Success
```json
{
  "name": "john doe",
  "no_reg_pmi": "12354679",
  "phone_number": "08521215",
  "gender": "Pria",
  "blood_type": "AB",
  "rhesus": "Positif",
  "city": "Batam"
}
```

Request Body Error
```json
{
  "errors": "Unauthorize"
}
```

## EDIT PROFILE
Endpoint: PUT /api/users

Header
- Authorization: "Bearer access_token"

Request Body
```json
{
  "name": "john doe",
  "no_reg_pmi": "12354679",
  "phone_number": "08521215",
  "gender": "Pria/Perempuan",
  "blood_type": "AB",
  "Rhesus": "Positif",
  "city": "Batam" 
}
```

Response Body Success
```json
{
  "name": "john doe",
  "no_reg_pmi": "12354679",
  "phone_number": "08521215",
  "gender": "Pria",
  "blood_type": "AB",
  "Rhesus": "Positif",
  "city": "Batam"
}
```

Response Body Error
```json
{
  "errors": "Unauthorize"
}
```

## GET USER
Endpoint: GET /api/users

Header
- Authorization: "Bearer access_token"

Request Body
```json
{
  "name": "john doe",
  "no_reg_pmi": "1345679", // kalo belum ada datanya isinya null
  "image": "http://.......",
  "blood_type": "AB",
  "city": "Tanggerang"
}
```

## POST EMAIL FOR RESET PASSWORD
Endpoint: POST /api/reset/users

Request Body
```json
{
  "email": "john@gmail.com"
}
``` 

Response Body Success
```json
{
  "data": "OK"
}
```

Response Body Error
```json
{
  "errors": "email not found"
}
```

## POST VERIFY RESET PASSWORD CODE
Endpoint: /api/users/reset/code

Request Body
```json
{
  "code": "XYXYXY"
}
``` 
Response Body Success
```json
{
  "data": "OK"
}
```

Response Body Error
```json
{
  "errors": "Code is not valid"
}
```

## NEW PASSWORD 
Endpoint: /api/users/reset/password
Request Body:
```json
{
  "password": "rahasia3",
  "conf_password": "rahasia3"
}
```

Response Body Success
```json
{
  "data": "OK"
}
```

Response Body Error
```json
{
  "errors": "Enter the same password and confirmpassword"
}
```

