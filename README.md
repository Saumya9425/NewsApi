
# NewsAPI

This API is used to fetch articles from newsorg api and return it  to the user as he demands.The user can apply various filters like topic and category of the news they want to fetch.

The link to the api used is https://newsapi.org/v2/top-headlines?country=in&apiKey=8ae0af7ce30a4f94833cb596773856d9
.



## Deployment

The deployed heroku link is https://assessmentnewsapi.herokuapp.com/ 


## Endpoints

There are three Endpoints

/news  - This endpoint is used to fetch the current top news in india.

/news/topic - This endpoint is used to fetch all the news related to the topic or a  phrase passed in the body of request.

/news/category - This endpoint is used to fetch all the news related to a particular category passed in the body of request.

Postman collection Link

https://www.getpostman.com/collections/012ae02c59a30a49e927
