---
title:  "CloudCube (S3) in Django on Heroku"
date: 2020-03-25 00:00:00 +0800
author: eric
redirect_from: /2019/12/12/django-cloudcube-heroku.html
---

Have you ever wanted to have persistent storage for your Heroku app because ephemeral storage was _just not cutting it?_

<!--more-->

<div style="text-align: center;">
    <img src="/assets/images/articles/cloudcube.png" class="img-bordered">
</div>

[Cloudcube](https://elements.heroku.com/addons/cloudcube) is a storage addon that gives you an S3 bucket with 
a 5mb limit in the free tier. Fairly generous! This is great because by default Heroku apps are ephemeral (storage
is deleted when a new version is deployed). 


### Heroku

Install the [add on](https://elements.heroku.com/addons/cloudcube) for your Heroku app, or if you're using 
[Review apps](https://devcenter.heroku.com/articles/github-integration-review-apps) then you'll 
want to add `"cloudcube:free"` to your `addons` key in `app.json`:

```json
{
  "addons": [
    "cloudcube:free"
  ],
}
``` 


### Django/Python

Make sure you install `django-storages` and `boto3`:

```bash
$ pip install django-storages boto3
```

```python
# settings/base.py
import os

# =============================================================================
# Cloudcube storage
# =============================================================================
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

# example cloudcube url: https://cloud-cube.s3.amazonaws.com/bucketname
cloudcube_url = os.environ.get('CLOUDCUBE_URL')
cloudcube_bucket = os.path.basename(cloudcube_url)   # "bucketname"
cloudcube_base_url = os.path.dirname(cloudcube_url)  # "https://cloud-cube.s3.amazonaws.com/" 

AWS_S3_ENDPOINT_URL = cloudcube_base_url
AWS_ACCESS_KEY_ID = os.environ.get('CLOUDCUBE_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('CLOUDCUBE_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = cloudcube_bucket
AWS_DEFAULT_ACL = os.environ.get('AWS_DEFAULT_ACL', 'private')
AWS_QUERYSTRING_AUTH = False
```

We want everything by default to be private, so we've set the `AWS_DEFAULT_ACL` setting 
to `"private"`. If we want to override this private setting, we can subclass 
`S3Boto3Storage` and change the setting.

For example, static file storage or user image uploads should be public. We'll 
want to use a `"public-read"` setting, like so:

```python
# custom settings class in yourapp/storages.py
from storages.backends.s3boto3 import S3Boto3Storage
class PublicStorage(S3Boto3Storage):
    default_acl = "public-read"


# static files in settings/base.py
STATICFILES_STORAGE = 'yourapp.storages.PublicStorage'


# image uploads in someapp/models.py
from yourapp.storages import PublicStorage
class MyModel(models.Model):
    logo = models.ImageField(upload_to='logos', storage=PublicStorage())
```


<div style="text-align: center;">
    <img src="/assets/images/articles/cloudcube_screenshots.png" class="img-bordered"><br>
    <small><i>CloudCube interface</i></small>
</div>

### Conclusion

Thanks CloudCube folks for giving us free persistent storage! 5mb aint much, but it
allows us to give our clients an easy place to upload small CSVs at least. If we need
to test more, $5/mo for 5gb aint bad! 

..although, it would be neat to have a $1/mo 100mb tier :)
