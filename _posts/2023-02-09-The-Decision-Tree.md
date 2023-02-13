---
title: The Decision Tree
date: 2023-02-09 08:00:00 +0000
author: eric
---

I certainly love most of my work, but my favorite part is pair programming, 
which is when a couple developers share a screen and work together solving 
problems, which facilitates spreading knowledge in a big way. 

It is extremely important for scaling Ckc that we teach new folks how to 
think -- a bit strange, but I'll explain!


<!--more-->



# An example

1. You are tasked with setting up a new staging server in the Paris Headquarters
1. You set up the server and everything works, but, wait.. for some reason, connections are being denied to [Minio](https://min.io/) on port `9000`?!
1. You're a junior, so you're not sure how this is even happening. Everything
    is working on your machine? Everything else seems fine, just this one service is borked
1. The week of debugging begins:
   * The connection error, maybe it has to do with SSL at some level?
   * Maybe there's something wrong with my Minio configuration?
   * Is Minio booting up OK?
   * Is the port open in Security Groups? Yes..
   * Why can I talk to minio from the local machine, but the outside Internet can't talk to it?
   * I've tried 1,000 times and everything seems fine!
   * This goes on for days
   * Finally, I try a random new port and.. wallah! It works!


It turns out the organization hosting our server disallows port 9000! I had no
idea. I never even thought to ask.

Basically changing one number, a port, from 9000 to _anything else_ fixed the problem. Why
didn't I just focus on the initial connection error? Why did I go down so many useless
paths? I knew what the problem was at the outset, but refused to focus on it. 

I never expected a port to be closed by an outside admin, this had never happened 
before. I could see the list of open ports in my configuration, but I refused to acknowledge it clearly
wasn't open.

I couldn't connect: that's it! Focus on that! It _has_ to be a network problem, nothing
to do with Minio configuration necessarily.


# Let your mind go, but with limits

Confronted with so many unknowns you may feel hopeless. You have no idea what 
to try next. You, maybe literally, start to panic. Do you even belong here? Do you
even understand this stuff? You think it should be working, but it's not, and 
reality is crumbling around you. Trouble focusing, wanting to pull your hair 
out... all of that fun stuff.

Let this wash over you, maybe take a second to enjoy this feeling of not knowing
how to do something -- eventually this challenge will devolve into another way to
do a CRUD form stored away in your brain.

You'll forget what a rush it was to finally figure out you needed `levioSah()` not
`levioSo()`. This _will_ be boring someday, I promise.


# Start at the base of the decision tree

After the initial panic has washed over you, re-examine the problem in the simplest
way you can. In the above example it was clear from the very beginning it was a 
connection issue.

Why did I go any further up the decision tree? I had a bad connection, that's it, 
maybe try to change ports or something?

It took a week to diagnose this port problem, which should have been diagnosed
in 5 minutes given a stoic "senior engineer" behind the wheel.


# Furthest branch away

Very rarely you will encounter a problem where all initial assumptions/clues are actually
futile: there's something fundamental wrong with your computer architecture
or the library you're using. 

Maybe you were expecting the size of something to be 32 bits, but
it's 64 bits instead. This is exceptionally rare in web dev.

Be very cautious going so far up the tree, re-check your initial assumptions.

Very likely you just need to open a port or something simple!


# It's not always easy

And, actually, sometimes you do have to sit there and take it for 2 weeks. Fully
absorbing an idea and figuring out a problem may legitimately be very difficult
and all-consuming.

Even though this port 9000 problem was silly and took way too much time to understand,
I learned a boatload. This always happens. Every time I am super stuck I come out
the other end a better engineer.

Over time you get better and better at knowing when to climb up the tree and try 
to explore deeply.


# As a process

Here's a repeatable way to try to avoid going too far up the decision tree:

1. _Calmly_ read all errors, code, commands, etc. in front of you.
1. If something is obviously broken, focus on that. Do not assume a third party
system/module is at fault. It's probably you, and it's probably a very small simple problem!
1. Build a small example replicating exactly your situation with as few moving parts as possible _(i.e., from our example, open something and serve it on port `9000`)_
1. Rubber duck your situation to a peer.
1. Reach out to someone smarter than you. If you're the top dog: God help you.
1. Now start posting on forums, discord, IRC, etc. and try to find any more info you can




# Past related articles
   - [How to get a web dev gig?](https://ckcollab.com/2019/03/30/how-do-i-get-a-web-dev-gig.html)
