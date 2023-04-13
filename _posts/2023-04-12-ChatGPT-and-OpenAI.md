---
title: ChatGPT and OpenAI
date: 2023-04-12 08:00:00 +0000
author: eric
---

The future for many jobs is kind of scary, even in the Coeur d'Alene and Spokane area. 

At first sight of ChatGPT, but we have to remember the rooms and rooms full of 
people "computers" in the 50's. Instead of
succumbing to the initial fear, let's try to predict where this is heading and
develop skills/tools to leverage AI.

<!--more-->

<div style="text-align: center;">
     <img src="/assets/images/articles/midjourney_1.jpg" class="img-bordered">
     <br>
     <small><i>Some fun attempts to generate an avatar</i></small>
</div>




# How we're using it

 * Chrome Upwork extension, for replying to jobs quickly by 
having an agent prepared and knowledgeable about your business.
 * We have a game in development that is leveraging AI for a great deal
of the art. We can start with small examples, and use further refinement to
make the images larger -- this is how we're creating large playable maps
for our game.
 * We're re-doing our website with a fresh new design that is built around 
[Midjourney](https://midjourney.com/)
 * We made a fun website for "prompt wars" using [InvokeAI](https://github.com/invoke-ai/InvokeAI) where you can generate images that
 compete with others for a given challenge topic.
 * Creating "agents" that can help with various things
   - FishingTravelAgent-GPT
     - I made a fishing travel agent that can help you find the best fishing spots on your journey
   - JuniorEngineer-GPT
     - We're working on training an agent that can do basic coding tasks for us, like a junior engineer that's maybe Sophomore level in college.
     - We can provide example tasks, ask for changes, and the agent will do its best to complete the task
     - This can be automated so the agent could look at new tasks, figure out how to do them, and push the code up


# How we can help you

Let's say you have a business that needs to do a lot of repetitive tasks, like
replying to customer support tickets, or maybe you need to generate a lot of
content for your website. We can help you create an agent that can do these
tasks for you.

We can also help you create an agent that can help you with your business. For
example, maybe you are annoyed by scheduling your employees every 2 weeks.. "Sally
doesn't get along with Bob, so we need to make sure they don't work together". We
can teach an agent about this, provide scheduling needs and requisite information, and
the agent will behave like a human scheduler!

<font color="red">Facebook ad copy? image generation?</font>

<font color="red">Generating presentations Canva</font>

Fun aside: in the past we helped architect the [Codalab](https://competitions.codalab.org/)
platform, which is a platform for hosting AI competitions. Our special piece
for that project was the ability to use docker images in student submissions
which allowed AI research in C#, Julia, R, as well as Python.




# Computers can see!?

Facebook (Meta) created the Segment Anything Model (SAM) using a dataset of 1 billion 
masks on 11 million images. This is an insane tool that can be leveraged quickly
to facilitate a strong AI agent.

<div style="text-align: center;">
     <img src="/assets/images/articles/SAM-model-Metas-new-Segment-Anything-Model-explained-4.webp" class="img-bordered">
     <small><i>Example SAM mask</i></small>
</div>

Maybe you have an assembly line where items are packaged, shipment labels are applied,
and then the packages are sent out. What if you could add cameras along the way
that help catch any potential problems?

Say you sometimes mix up some shipments, like shipping 1 BOX of items instead of 1 UNIT.
An AI agent could be trained to see the difference between a box and a unit.

Maybe sometimes a wheel gets stuck in the assembly line and the boxes start piling up,
an AI agent could see this problem and notify the appropriate people.

These are all not novel! The novel piece is how simple and quickly this can be done. 
Instead of needing a research team that can make all of the complex math work, we just
teach the AI agents like we teach a new hire. It's flexible and generic.


# Autonomous agents

A new thing coming out are Artificial General Intelligence (AGI) agents, like:
 - [BabyAGI](https://github.com/yoheinakajima/babyagi) - A baby AI that has limited memory and functionality
 - [ToddlerAGI](https://twitter.com/gogoliansnake/status/1643225698801164288/) - Modified baby agi, slightly more advanced
 - [TeenageAGI](https://github.com/seanpixel/Teenage-AGI) - Has a deep memory, more advanced than toddler
 - [AutoGPT](https://github.com/Torantulino/Auto-GPT) - attempt to make GPT-4 fully autonomous

# Let's bring your business into the AI future!

We're using AI right now with multiple clients. One client is developing a new
way to manage his pecan farm, leveraging [Github Copilot](https://github.com/features/copilot) 
along the way to speed up development.
