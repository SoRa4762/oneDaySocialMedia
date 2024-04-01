# know the errors mate

## CORS errors

### this is CORS errors

POST http://localhost:8000/user net::ERR_FAILED
Access to XMLHttpRequest at 'http://localhost:8000/user' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

### this is not

POST http://localhost/8000/user net::ERR_CONNECTION_REFUSED
this means you a fool for not hitting your api properly or something else, but not CORS error
