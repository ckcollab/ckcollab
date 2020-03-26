---
title:  "CloudCube (S3) in Django on Heroku"
date: 2019-12-13 00:00:00 +0800
author: eric
---

Have you ever wanted to have S3 storage for your Heroku app because ephemeral storage was _just not cutting it?_

Almost certainly not, but read ahead if you'd like to see how to solve this problem! :)

<!--more-->

[Cloudcube](https://elements.heroku.com/addons/cloudcube) is a storage addon that gives you an S3 bucket with 
a 5mb limit in the free tier. Fairly generous! This is great because by default Heroku apps are ephemeral (storage
is deleted when a new version is deployed). 

Install the add on for your Heroku app, or if you're using 
[Review apps](https://devcenter.heroku.com/articles/github-integration-review-apps) then you'll 
want to add `"cloudcube:free"` to your `addons` key in `app.json`:

```json
{
  ...
  "addons": [
    "cloudcube:free"
  ],
  ...
}
``` 

Make sure you install `django-storages`:

```bash
$ pip install django-storages
```

And add these to your settings:

```python
import os

# =============================================================================
# Cloudcube storage
# =============================================================================
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

cloudcube_url = os.environ.get('CLOUDCUBE_URL')
cloudcube_bucket = os.path.basename(cloudcube_url)
cloudcube_base_url = cloudcube_url.replace(cloudcube_bucket, "")  # get base url by removing bucket

AWS_S3_ENDPOINT_URL = cloudcube_base_url
AWS_ACCESS_KEY_ID = os.environ.get('CLOUDCUBE_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('CLOUDCUBE_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = cloudcube_bucket
AWS_DEFAULT_ACL = os.environ.get('AWS_DEFAULT_ACL', 'private')
AWS_QUERYSTRING_AUTH = False
```

By default, we've set the `ACL` settings to `"private"`. For some things, like static file storage,
we'll want to use a `"public-read"` setting. We can make a storage class that overrides
the default settings:

```python
# in yourapp/storages.py
from storages.backends.s3boto3 import S3Boto3Storage


class PublicStorage(S3Boto3Storage):
    default_acl = "public-read"
```

Then we can store our static files there:

```python
STATICFILES_STORAGE = 'yourapp.storages.PublicStorage'
```

Or for an `ImageField`:

```python
from yourapp.storages import PublicStorage


class MyModel(models.Model):
    logo = models.ImageField(upload_to='logos', storage=PublicStorage())
```