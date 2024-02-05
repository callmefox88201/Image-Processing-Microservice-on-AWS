# Image Processing Microservice on AWS


***
## Getting Start

### GET /filteredimage?image_url={{URL}}

An example with 200 response:
```
http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fgenk.mediacdn.vn%2F2019%2F5%2F17%2Fphoto-1-15581032653512118286061.png
```

An example with 422 response (wrong extension):
```
http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fgenk.mediacdn.vn%2F2019%2F5%2F17%2Fphoto-1-15581032653512118286061.pnga
```

An example with 400 response (something wrong, maybe broken url):
```
http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fgenk.mediacdn.vn%2F2019%2F5%2F17%2Fphoto-1-1558103265351211828606.png
```

Another example with 400 response (empty url):
```
http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=
```

***