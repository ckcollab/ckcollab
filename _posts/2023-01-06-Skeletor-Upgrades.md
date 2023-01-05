---
title: Skeletor gets some upgrades!
date: 2023-01-06 08:00:00 +0000
author: eric
---

We've been constantly improving Skeletor over the years, most recently with
big new chunks of functionality like for mobile apps via React Native and
a standalone install script that doesn't require django-admin on your command line.

<!--more-->

<div style="text-align: center;">
    <img src="https://github.com/ckc-org/skeletor/raw/master/docs/skeletor_creation.gif" style="margin: 0 auto;">
</div>


### Fast install, standalone script

All you need is this command, typing in your project name, and selecting an option or two .. that's it!

```bash
$ bash <(curl -fsSL https://skeletor.ckcollab.com)
```

Now you have a Django + Vue + React Native project you can deploy to Heroku and get on the
app stores very quickly. You could add realtime chat in a few steps with [https://github.com/ckc-org/django-chit-chat](`django-chit-chat`).


### Mobile!

One of the biggest changes for Skeletor, and for Ckc, is adding mobile app support. We've stayed
away from that ecosystem until recently, where we've found [React Native](https://reactnative.dev/) to be a pretty great tool.. 
mostly thanks to the folks at [Expo](https://expo.dev/) and their nicely packaged modules.

We played with [Native Base](https://nativebase.io/) this year and were actually burned pretty
badly by it. We started out with this framework and it seemed fine, but pretty soon
we were experiencing horrible latency loading some components. Then we hit a final straw
where things were just too slow and had to rip it out.

Funnily we used ChatGPT to help replace a lot of these components! We would present 
the chatbot with our component code and ask it to be replaced with default React components. 
It was shockingly close most of the time, and did a perfect job often!


### Many small improvements

 * Built in login/logout/password reset request utilities you need on almost every project
 * Better handling of Heroku by default (Redis SSL anyone?!)
 * Various changes in `backend/settings/test.py` to make tests faster (cheap password hashing, etc.)
 * Better handling for emails/email templates
 * Django Migration checker before git pushes
 * Prevent use of `v-html` dangerously
 * Better Vue linting in general
 * Better S3 and Cloudcube support
 * Remove many django auth third party dependencies

### Does this shit even work!?

Has been used successfully to completion on over a dozen projects!

It is not unusual for us to get a new project in the afternoon and have a proof of concept or 
simple solution going by that night or the next day. We can move extremely quickly with
our toolset.

### Upcoming changes

 * Add opinionated react support, once we have some good opinions!
 * More modules in the mobile base app, like password reset
 * And more broadly, semi-out of scope for this article, is more Ckc maintained packages, we currently have:
   * [https://github.com/ckc-org/django-ckc](django-ckc) - nice helpers for django in general
   * [https://github.com/ckc-org/django-chit-chat](django-chit-chat) - chat via websockets (channels!)
   * [https://github.com/ckc-org/dotfiles](dotfiles) - boot up a dev machine with neat presets
