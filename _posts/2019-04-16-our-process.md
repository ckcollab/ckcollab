---
title:  "Our process"
date: 2019-04-16 00:00:00 +0800
author: eric carmichael
---


We're agile! Often times we have to conform to our client's workflow and fold ourselves
in, but below we'll describe our ideal process.


<!--more-->


# What we do

We focus on taking in our client's problems and churning out clever solutions. Often, getting
a clear picture of the problems is the hardest part.

Communicating what is wrong and what is needed is difficult. When a client says their
user should be able to schedule a meeting, what does that _really_ mean? It probably means
only certain people should be able to see the schedule, only certain people
should be able to schedule a meeting, meetings shouldn't be longer than 3 hours,
we need a way to keep meeting minutes organized, and so on. 



# How we do it


To solve our client's problems effectively, we need as much up front communication in the form 
of specs, wire-frames, in person meets, and video chats as possible. The more concrete
the details the better &mdash; in most cases!

We have worked with clients on both ends of the organizational spectrum. At one end, we have
had clients who create detailed overviews, with their own mock-ups of changes they want
implemented. On the other end, we've had clients who don't really know what they want, only
a vague sense of an end goal. While we prefer as much up front information as possible, we can
work with clients wherever they land!

### User stories

We generally structure our tasks in the form of user stories.
User stories are concise, simple descriptions of some feature, from the perspective of
the person who would be using that feature. Typically in the form of:

> As a \<someone\>, I want \<an objective\> so I can \<do something\>

We work with our clients to create user stories to facilitate discussion about the
end goal of a solution, rather than the nitty-gritty of solution implementations.

### Scoring tasks

To plan effectively, these user stories are then given a difficulty "score" base on their
perceived difficulty. Using these "scores" we can determine how long the project should take.
This helps us more effectively determine our current progress and realistic delivery dates.

### Velocity 

Velocity is calculated by taking our point completion average of the last three weeks.
Using this trend, coupled with the difficulty ratings of what is left in the project,
we can more accurately calculate feature delivery dates, and communicate this information
to the client in a meaningful way.

# Sprint schedule

We work on a two week "sprint" cycle. We start with a clear set of tasks to work on for the
next two weeks, and we address them in order of priority. At the end of these two weeks,
we review our completed work, and use that information to forecast our next two weeks of work.

<div style="text-align: center;">
    <img src="/assets/images/articles/sprint-process.png" class="img-bordered">
</div>

## Day -n (before work on a project is started)

### Project kick off

On a new project, we have a "kick off meeting" (or sometimes a series of meetings)
with the client and any other relevant personnel. The goal of these meetings is to
outline the bulk of the tasks on the project and give each of them a preliminary 
order of priority and anticipated difficulty.

## Day 0 (before sprint ends)

### Backlog grooming

As a sprint draws to a close, we "groom the backlog" of remaining tasks. We work with
the client to make sure our order of priority matches theirs, and we also seek any
additional clarification on tasks that may have come up during the course of the sprint.
Any questions about acceptance criteria should be worked out during this grooming process.

It is important that our backlog grooming is addressed _before_ the beginning of the next
sprint, that way we can start each sprint with a fresh set of outlined tasks in a known order
of priority.

## Day 1 - Sprint end & review, start of new sprint

We end the previous sprint and start the next one on the same day.

### Demoing

Our sprint review meetings begin with each person giving a small, 2 minute demonstration on
things they completed during that sprint. This is a great opportunity for everyone to see
where a project is at, and where it is moving. It is also an opportunity to show off a new
tool or discuss a particularly hard problem. That way, if one of us runs in to something
similar down the road, we know where/who to ask for help.

It is also a great chance for us to take pride in our work. Knowing you'll get to show off 
the cool shit you built to other people who can appreciate it is a driving force as a sprint
draws to close.


### Internal review

We keep track of what's causing pain and what's getting better. If someone has been 
having some stress with a client, something in their life, or anything else, we try
to talk it through and help out where appropriate.


### Code review

Just about every line of code we send out has been examined by at least on other engineer.
This facilitates learning in many ways:

* The people involved in the code review get to bond
* Sharing of knowledge
* An extra set of eyes on potential edge cases
* Helping to enforce consistent style and paradigms
* Verification acceptance criteria is met

After code has been reviewed and accepted, and all automated tests are passing, it is merged in
to the main code base -- ready to be deployed!


### Planning

Before the sprint planning meeting, each developer has done a small version of their
own backlog grooming, making sure the status of all of their tasks is current. They 
also work in conjunction with project managers to add tasks to their queue, so everyone
has a prioritized, current list of tasks.

This makes sprint planning meetings relatively quick as it is mostly about verifying
everyone is on the same page about who is doing what, when everything is due, and that
difficulty assessments are all accurate.

## Day 2 - 14

<div style="text-align: center;">
    <img src="/assets/images/articles/analytics_burndown.png" class="img-bordered">
</div>

Project managers keep an eye on our burndown rate and trajectory. As problems come up
or goals change, they are there to help get additional information from the client
and keep them apprised of our progress.

### Flexibility

We strive for flexibility, we understand priorities can change. We plan our sprints so we
are working at max capacity for the duration of the sprint, maximizing our throughput. 
This means we can't _add_ tasks mid sprint, but we can _trade_ them. As the order of priorities
shifts, the top of the stack can be pivoted into our workload, but the new bottom of the stack
will be pivoted out, back into the backlog queue to be groomed again later. It is our expectation
that these things get worked out during backlog grooming sessions, but we understand business is 
often unpredictable, fast paced and priorities _can_ shift. We're happy to shift with our clients
to meet there needs, but there are always trade offs. 

This flexibility often needs to go both directions. Sometimes a task that looks relatively simple
can hit weird edge cases, like library conflicts, deprecation of features we've relied on in the past,
or sometimes something as simple as "This approach isn't maintainable". For software development, it is
important to be willing to pivot away from unmaintainable, gross solutions that users won't like, even
if it seemed like a great idea up front. We all have to be agile. We have to be willing to pivot.
