---
title:  "Skeletor: Django + Vue base project"
date: 2021-5-18
author: eric
image: "/assets/blog/2021-05-skeletor/skeletor_full.png"
---

<img src="/assets/blog/2021-05-skeletor/skeletor_full.png" class="inline-image">

[Skeletor](https://github.com/ckc-org/skeletor) is CKC's foundation for new web projects. It
leverages everything we've learned over our collective decades of experience solving _"super fun"_
problems. 

Continuous deployments, great test coverage, hot reloading for frontend development.. this
base project has it all!

<!--more-->

<div style="clear: both">
</div>


# Why is this important?

### Keeps your house in order from day 1

It may not seem all that impressive from an outside perspective, but maybe to help illustrate:

Imagine that your entire day is put together and ran _perfectly._ Tools and best practices are meticulously 
put into place to solve the same problems you've encountered dozens of times. When you go to pick out a shirt
in the morning: already laid out for you. On your way to work, but the car won't start? No worries, 
there's a battery booster behind the seat. Forgot your office key? Hide-a-key rock ready to go.

All of those little gotchas that set development back, like:
1. New requirements from client/stakeholders, how do we implement these quickly without breaking everything?! (great tests)
1. Basic features not working right, like password reset or emails
1. Setting up staging/development environments for the umpteenth time
1. Get an image of all the schema/models in the database and show how they're connected 
1. We have to onboard _yet another_ developer, how do we teach them all this stuff?!
1. Are all of our licenses open source/free to use?
1. It's so "annoying" to do Test Driven Development (not with Skeletor setting up everything for you!)

### Onboarding new devs

Skeletor projects benefit from consistent architecture and implementation of development best practices across the board. 
Anyone who has a bit of experience with Python or Docker can spin up our repo in seconds. All a new developer
needs to do (assuming they have Docker) is:

```bash
$ make
```

.. and you're done! This spins up the database, makes a dummy user for testing and any requisite test data
for your project.

With Skeletor, you get consistency, speed, and efficiency when onboarding new folks. Also, as we bring on new
developers, they may have great new pieces of knowledge/experience which get compounded back into Skeletor! It
is always improving.


# What _is_ Skeletor made of?

### Backend

Skeletor leverages Django + Python on the backend. 

 * We use Celery + RabbitMQ (or Redis) for asynchronous tasks like mass emails or resizing large images.
 * Pytest for testing (xdist, sugar, etc. ooo ya!)
 * Base classes for functional testing (selenium, cypress, detox)
 * All kinds of neat helpers to make running/writing tests pleasant

### Frontend

And we use VueJS behind NuxtJS on the frontend.

 * Vuetify for styling and amazing base components
 * NuxtJS packs things up nicely for you by default
 * Awesome hot reloading, yay! 

<div class="img-bordered">
    <img src="/assets/blog/2021-05-skeletor/skeletor_install.png">
</div>

# How to use it?

You'll clone the repo using `django-admin` and the `startproject` command, like so:

```bash
$ django-admin.py startproject new_project \
    --template=https://github.com/ckc-org/skeletor/archive/master.zip \
    --name index.md,setup,app.json,README.md
```

Then you'll want to edit the README, remove the base project installation instructions, and
run:

```bash
$ make
```

..that's it! You have a nice base project spun up and ready to start developing on.

# Let us setup a project for you!

We love crafting beautiful solutions to our client's problems. Send us an email at [hello@ckcollab.com](mailto:hello@ckcollab.com)
