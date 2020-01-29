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

# This article..
1. [How did I start?](#how-did-i-start)
1. [What I loved about computer camp](#what-i-loved-about-computer-camp)
1. [What are we trying to do?](#what-are-we-trying-to-do)
    1. [Pros of starting text-based](#pros-of-starting-text-based)
    1. [Conss of starting text-based](#cons-of-starting-text-based)
1. [Coding Concepts](#coding-concepts)
    1. [fun with sockets..](#fun-with-sockets)
    1. [fun with script injection..](#fun-with-script-injection)
1. [Why is this a good way to learn?](#why-is-this-a-good-way-to-learn)
1. [Growing?](#growing)
1. [Structure](#structure)
1. [How can I find out more?](#how-can-i-find-out-more)

## How did I start?

<"picture of me as nerd kid at computer">

I started programming in ~1996 when I was 8 years old at the University of Oregon. It would be the first of many
computer camps, and the nerdy foundation of a fruitful career.

That first summer between grades one of our assignments was to memorize the state capitals. The first program I ever wrote was
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

## What I loved about computer camp

I loved the freedom and inspiration from computer camp. If I had an idea I wanted to pursue, there were mentors around
ready to help. If I wanted to challenge someone to a game of Worms, well that was an option, too! Having other nerdy
kids around really helped me have fun associations with programming and feel like I was part of something.

The day was structured like this:
 - 8am - 10am: first class time
 - 10am - 11:30am: play video games, or continue working
 - 11:30am - 1pm: lunch
 - 1pm - 3pm: second class time
 - 3pm - 5pm: play video games, or continue working
 
 The last day of the week, the second half of the day was devoted to video game tournaments, for each game. Back in the day,
 that was Worms: Armageddon and StarCraft!
 
 I remember very vividly playing a match against some students from Stanford.. I had no idea how to play but had a blast
 anyway. Competitive StarCraft would become one of my favorite hobbies, I was eventually ranked in the top ~1,600 in the USA
 out of almost 750,000 players.
 

## What are we trying to do?

Run a small class/seminar/whatever you'd like to call it, as an experiment, to see if there are enough students
in the area to put on a small summer camp. Our goal is to make a text-based game class that can capture their
attention in under 2 hours. 

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
 
 One of my hopes for the class, is that we'll be able to make even this simple experiment fun. If I see students' eyes
 lighting up, I'll know we're onto something.


<div style="text-align: center;">
    <img src="/assets/images/articles/kids_development.png" class="img-bordered">
    <small><i>Eric working with a young programmer</i></small>
</div>

## Coding Concepts
 
Using the aforementioned concepts (input, output, functions, etc.) you could make a small fun text based adventure, or 
if you wanted to do something more serious
you have some base concepts to build on top of for a challenging idea. Leveraging the concept of a "function call" you could
ask "what are some other functions?"

Built into Python there are thousands of useful functions, which are usually grouped by the concept of "modules." A module
is typically a collection of variables and functions useful for some well defined purpose. You can even make your own
modules and share them between programs.

Some fun built in Python modules:
 - [math](https://docs.python.org/3/library/math.html) - ..do math!
 - [csv](https://docs.python.org/3/library/csv.html) - read/write excel-like files, do spreadsheets for baseball card collections
 - [tempfile](https://docs.python.org/3/library/tempfile.html) - store data temporarily while you're processing it
 - [socket](https://docs.python.org/3/library/socket.html) - talk to another computer over the Internet
 - ..and thousands more available online, most you can install with a simple command: 
 ```bash
 pip install <module>
 ```

It might be intimidating at first, but if you call the right functions.. you can do it :)

### fun with sockets...

At quite a young age I was writing chat bots with sockets for StarCraft and Diablo II, a skill that has repeatedly been useful
and allowed me to skin the cat a way another engineer wasn't aware of. This skill also came in handy in highschool when
I wrote a script to make text-to-speech happen across all of the computers in the computer lab. Was a fun, albeit loud,
experience!

### fun with script injection...

Another time some random skills came in handy was during the highschool online virtual stock exchange game. I was able to
"hack" the website via script injection and take control of everyone's account -- don't worry, I didn't do anything malicious and only had some
fun after the website staff didn't respond to my alerts about the vulnerability. 

<object width="420" height="315" style="display: block; margin: 0 auto;" data="https://www.youtube.com/embed/Cwkej79U3ek">
</object>

All I did was replace the header of the 
page with a heartwarming song and everyone's names with the lyrics of the song, in order. So if you went to the second or
third page, it would continue listing the lyrics :)

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

## How can I find out more?

We're planning on running a small trial class soon, follow us on Facebook <linky> for more information!


