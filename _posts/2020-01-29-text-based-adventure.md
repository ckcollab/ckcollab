---
title: "Python Text Based Adventure!"
date: 2020-01-29 00:00:00 +0800
author: eric
---

CKC is exploring the idea of running a small code camp this summer, with a focus on fundamentals and,
in particular, the most beautiful language in all of programming: Python. 

In this article we'll learn how I became
interested in programming and also our idea for a class based around making a text-based adventure game!

<!--more-->

## How did I start?

<"picture of me as nerd kid at computer">

I started programming in ~1996 when I was 8 years old at the University of Oregon. It would be the first of many
computer camps, and the foundation of a fruitful career.

That summer between grades one of our assignments was to memorize the state capitals. The first program I ever wrote was
a giant set of "if statements" for each state, something like this:

```python
print("What is the capital of Idaho?")
guess = input()
if guess == "Boise":
    print("Correct!")
else:
    print("Wrong!")

print("What is the capital of Oregon?")
guess = input()
if guess == "Salem":
    print("Correct!")
else:
    print("Wrong!")
```

It was terrible. I didn't use loops or arrays, definitely didn't account for case sensitivity in answers,
I repeated code like crazy... I had a great time doing it! No one told me to write this program, for whatever reason
I was driven to make neat little scripts.

Sometime after making this state guessing script I made some basic text based adventure games, and leveraged loops
and other neat constructs -- not realizing I was learning the fundamentals that are so hard to imbue later in life.
I was learning how to have fun "playing with programming."

## What is a text-based adventure game?

> _A text game or text-based game is an electronic game that uses a text-based user interface, that is, 
 the user interface employs a set of encodable characters such as ASCII instead of bitmap or vector graphics._

&mdash; [Wikipedia](https://en.wikipedia.org/wiki/Text-based_game) 

We can make a small interactive game with no graphics, only using the keyboard for input and writing text to the
screen. This cuts out a huge amount of complexity in terms of starting to play with a computer. 

For example, to write our first message to the monitor, all it takes is a `print()` function call:

```python
# We're calling the 'print' function with the argument "Hello world!"
print("Hello world!")
```

Then, to receive input from the user.. we use an `input()` function call! We'll use it to receive a name and
 store it in the `name` variable!
```python
print("What's your name? (type your name and press enter)")
name = input()
```

What if we want to print a variable back to the user? We can use `f` strings and put variables between curly braces:
```python
print(f"Hello {name}!")
```

If we could grasp what the above code is _actually doing,_ students will have grasped:
 - Input
 - Output
 - Storing a variable
 - Printing/retrieving a variable
 
In 2 hours that would be pretty phenomenal!

### Pros of starting text-based

 - Many simple concepts in a rapid fire way, cutting out a lot of complexity
 - Can run on very weak machines
 - Easy to setup environment for this simple program
 - High chance of success right away for beginners to pick up these concepts

### Cons of starting text-based
 
 - Maybe a bit boring at first; nothing fancy to look at
 - For faster/experienced students, will be a slow start


<div style="text-align: center;">
    <img src="/assets/images/articles/kids_development.png" class="img-bordered">
    <small><i>Eric working with a young programmer</i></small>
</div>

## Concepts
 
Using the aforementioned concepts you could make a small fun text based adventure, or if you wanted to do something more serious
you have some base concepts to build on top of for a challenging idea. Leveraging the concept of a "function call" you could
ask "what are some other functions?"

Built into Python there are thousands of useful functions, which are usually grouped by the concept of "modules" like
the "sockets" module for talking over the Internet to other computers.

Some fun built in Python modules:
 - [math](https://docs.python.org/3/library/math.html)
 - [csv](https://docs.python.org/3/library/csv.html)
 - [tempfile](https://docs.python.org/3/library/tempfile.html)
 - [socket](https://docs.python.org/3/library/socket.html)
 - ..and thousands more available online, most you can install with a simple command: 
 ```bash
 pip install <module>
``` 


## Why is this a good way to learn?

It's simple, but complex enough to run into many of the normal programming problems: 
 - I feel like I'm repeating myself
 - How do I put into computer instructions some abstract idea like a "room," then how do I re-use that abstract idea?
 - How do I share this program with someone? How do I keep track of changes in the code in case I want to go back?
 
As we run into these problems, we'll naturally want solve them.. and this is where it gets fun. There are many ways to skin
the cat programming. You get to choose how to solve the problem, you'll develop a certain style and discover yourself.

 
The "talent" in programming usually reveals itself by how problems are solved, there is usually some way to kill one
(or many thousands!) of birds at once by understanding an underlying concept and leveraging it in a big way.

For example, often times programming tasks are like a giant row of dominoes, if you can tackle some fundamental part
of the problem the rest of the dominoes quickly fall. It's not uncommon for an experienced person to take some program
that runs in 10 minutes, written by someone misunderstanding a fundamental concept, and optimize it down to under a second.

It feels pretty cool to get a real world boost in performance in the 10,000% range! Being able to find these problems
becomes like an art form. Why did the artist choose this color and this shape? In programming it's not always about
performance, either. Python is a particularly _slow_ language, actually! But it's extremely easy to express ideas and
iterate quickly, so it beats most of the competition. These kinds of compromises are what make programming an art to me.

## Growing?

We'll grow with the students, we have a broad base of experience involving: web dev, "hacking games," making games, and
all kinds of general programming things. We're hoping to inspire students to use programming as a tool for expression
and growth, which can be a career or "strong plan b" if they ever need a trade to fall back on.

Everyone's path will be different, but even knowing what's possible or how to get there can be the tricky part. That's
where we can help guide students to concepts as needed, instead of flooding them at all once and overwhelming them.

For example, here are the languages I learned and why over the years:
 - BASIC: a text based adventure game, state guesser
 - HTML: dragon ball z fan sites, a video game e-zine, many more
 - PHP/JavaScript: scripts for managing egaming teams, running tournaments
 - AutoIt: automating the computer to play games while I slept..!
 - C/C#/asm: game automation and "hacking"
 - Python: web development with higher standards
 
And inside each of these languages there are dozens of modules and concepts to absorb, all done willingly by a teenager!

How do we convince more teenagers to subject themselves to this kind of "torture?!" I think once someone has the basic
tools for programming, executing on these ideas and picking up new concepts becomes second nature. If a student is able
to grok programming concepts easily at a young age: there's a great chance for success.

## Structure?

Broadly, if I had a child with a high aptitude for programming, this is how I would structure that learning:

1. Summer Camp
2. Throughout the year small projects
3. Christmas Camp
4. Go back to 1, until college!

In my case, when I arrived at college I knew almost all of the material or could very easily grasp new concepts, because
of my strong fundamentals.

## How can we learn more?

We're planning on running a small trial class soon, follow us on Facebook <linky> for more information!


