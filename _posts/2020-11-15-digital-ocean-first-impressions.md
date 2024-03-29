---
title: "First impressions: Digital Ocean App Platform"
date: 2020-11-15 00:00:00 +0800
author: eric
---

When I [first learned](https://www.digitalocean.com/blog/introducing-digitalocean-app-platform-reimagining-paas-to-make-it-simpler-for-you-to-build-deploy-and-scale-apps/) about the new Digital Ocean App Platform, I was pretty excited to see Heroku have some competition! We use Heroku on many projects and love its simplicity, but hate how quickly it can get expensive.

I attempted to set up one of our client's projects on this new platform to give it a spin. Here is my experience.


<!--more-->


# Digital Ocean vs. Heroku

<div style="text-align: center;">
    <img src="/assets/images/articles/digital-ocean.png">
</div>

| Pros | Cons |
|------|------|
| Compared to Heroku, there's quite a bit less to learn     | No free database to test against, must pay $7/mo    |
| Scaling up a bit should be cheaper than Heroku     | Very few add ons     |
| Fresh, has the opportunity to grow with community input     | May not support many non-trivial apps because of lacking add-ons     |
| | Similar to Heroku, DigitalOcean has a [cli](https://www.digitalocean.com/docs/app-platform/concepts/doctl/) but not nearly as many features |
| | In its infancy still |

&nbsp;

<div style="text-align: center;">
    <img src="/assets/images/articles/do-app-platform.png" class="img-bordered">
    <small><i>Creating an app</i></small>
</div>

# Add on support

Currently, the Digital Ocean App Platform only has the following add ons:

 * Managed databases
 * Object storage

Compared to Heroku's [dozens of add ons](https://elements.heroku.com/addons) that's not very impressive! For example: 
what if I need to process thumbnails in the background after a user registers? Center it, optimize the file sizes, make multiple versions (i.e. thumbnail)... how do I do that?

To do things in the background nicely, I have to learn a new
concept: [workers](https://www.digitalocean.com/docs/app-platform/how-to/manage-workers/). I already have a toolchain I 
like using and ways to monitor it, and all of my existing modules expect to play in this environment. I use 
[Celery](https://docs.celeryproject.org/en/stable/) + [RabbitMQ](https://www.rabbitmq.com/) or 
[Redis](https://redis.io/) and that stack is battle-tested by thousands of other companies.

Another example of where lacking add ons may hurt is logging or general app analytics. Heroku has many options in
[Sentry](https://elements.heroku.com/addons/sentry), [New Relic](https://elements.heroku.com/addons/newrelic), and 
[BugSnag](https://elements.heroku.com/addons/bugsnag). Why is your app slow? Why did that user have a problem registering
yesterday? Questions you may not be able to easily answer on the Digital Ocean App Platform at the moment!

# Cost

The database is a minimum of $7/mo, with no free tier. A little disappointing, Heroku has a Free tier for Postgres with excellent 
backups and such. It's extremely inviting to have free tiers when tinkering around. It has kept me loyal to Heroku for a 
long time!

Scaling, though, Digital Ocean looks more attractive.

To get a [dyno](https://www.heroku.com/dynos#:~:text=The%20containers%20used%20at%20Heroku,based%20on%20its%20resource%20demands.) 
with >= 2gb memory on Heroku you need to spend a minimum of **$250/mo**. On Digital Ocean, you only need to spend **$20/mo**! 

# More reading

[Heroku vs AWS]({% post_url 2019-03-15-heroku-vs-aws %})

[Django + Cloudcube on Heroku]({% post_url 2020-03-25-django-cloudcube-heroku %})

# Final thoughts

I'm excited to see how this pans out, but what I'd really, _really,_ like to see is some 
[docker-compose](https://docs.docker.com/compose/) support! It'd be so neat to throw up a server and have new processes 
managed automatically with nice defaults. Our primary concern is business logic, would love not to have to worry so much 
about configuring yet-another-new-thing :)
