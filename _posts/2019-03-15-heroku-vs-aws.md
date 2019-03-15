---
title:  "Heroku vs AWS"
excerpt_separator: <!--more-->
author: eric
---

Heroku.. almost a bad word in many circles. It's expensive, polished, and
restrictive. To me: it's like the Apple of hosting providers. I can rely on it to
_"just work"_ the vast, vast majority of the time.


<!--more-->


<div style="text-align: center;">
    <img src="/assets/images/articles/heroku-logotype-horizontal-white.png" class="img-bordered">
</div>

## Why Heroku?

**Managed hosting.** 

As a developer first, I want to get right to the meat of the business logic and start
solving problems. Getting around configuring an EC2 instance for the
umpteenth time is an incredible productivity boost. 

It's like having your own dev ops team. Right out of the box we can leverage many 
managed services like automated deployments, backups, security updates, 
quick recovery from outages, etc.

For example, instead of spinning up an instance of Postgres, making our own backup 
solution, verifying it works, writing tools to make it easier to make backups before 
deploys, etc… we can use Heroku Postgres which comes with WAL (Write Ahead Logging) aka 
realtime live backups with a 4hour rollback window.

### Pros:
 * Extremely friendly to developers, can onboard or transfer to new people very easily
 * Familiar to many developers
 * Mostly painless deployments
 * Integrates with many services easy, ie CircleCI
 * Load balancing for free

### Cons:
 * Hard to customize if we have unique needs
 * Relying on third parties that can go down (but, is based in the same facilities as 
   Netflix)

<div style="text-align: center;">
    <img src="/assets/images/articles/aws-logo.png" class="img-bordered">
</div>

# Why AWS?

**Control.**

If you need some complicated configuration of Postgis, nginx caching, non-emphemeral
local storage, yadda yadda.. it's probably easier to go straight to EC2 instances 
than it is plumbing some gross configuration on Heroku together. 

Also, if you are running a VVIP top secret app then you will want to sandbox your code
away from any prying eyes. But, in my opinion, this is rarely needed and often times
for small-to-medium sized enterprises: security theater. Certainly it is another
point of failure to rely on a separate service storing your code, but I'd bet
on a managed host with hundreds of millions behind it.

### Pros:
* Complete control -- if we want to do some funky settings on the Postgres database and 
  use it more like a graph database, add map projections, etc. then we can do that
* No third party outages to worry about
* No third party, beyond AWS itself, has access to your code

### Cons:
* More prone to human error, compared to Heroku with dozens of Dev Ops working full 
  time to keep the pipes unclogged
* Requires a more experienced Dev Ops person to maintain
* Each setup is different, everyone has their own opinions and that means new devs 
  take a bit longer to get spun up



# Conclusion

At CKC we love simplicity and speed. Heroku brings us the capability to develop
complex applications as quickly as possible, and to run those applications
at scale.

Have an app you're having trouble deploying? Let us [setup something for you!](mailto:hello@ckcollab.com) 
