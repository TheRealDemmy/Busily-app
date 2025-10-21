@app
busily-backend

@http
get /
get /users
get /users/:userID
post /users

@tables
users
  userID *String

@indexes

@aws
profile default
region eu-central-1
architecture arm64
