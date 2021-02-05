---
title:  Tailwind CSS vs. Bootstrap vs. Semantic UI
date: 2021-2-2
author: logan
image: assets/blog/2020-2-5-tailwindcss/4wsata.jpg
---

Trying to choose a library to handle styling of a website? A few top contenders in 2021 are Bootstrap, Semantic UI, and
the new kid on the block, Tailwind CSS. What are the differences, and which one will be right for you?

<!--more-->

---
# First Look
Web Development is an ever evolving field. Every year bring new changes, designs, libraries, and more. Raising the bar
for what makes good website design. 2021 is no different. So what can we use to give us the edge on creating our website?
Let's take a look at some CSS libraries I like that have a lot of popularity going into 2021.

## > Bootstrap
Bootstrap is currently the most popular CSS framework out there. It makes sense given the fact that it's been around for
a decade and also one of the most simple libraries out there. Originally it was developed by Twitter developers as
something to be used internally to keep design easy and consistent. Bootstraps straight forward component design system is popular among
beginners. Most components can be used simply by added a class or two to HTML tags. While simple, this also means
there isn't a whole lot of customization and has lead to websites using the framework to have a "Bootstrap look".

## > Semantic UI
Semantic UI is another web framework, but doesn't shy away from the Javascript side of things. Semantic UI is similar to
Bootstrap in the fact it uses component design system, but give you more granular control of the components. You will
typically find yourself adding a couple of classes to container tags and even around 4 or 5 classes to other tags. You
tend to have more modifying classes in Semantic Ui to switch up the styles and looks, and on top of that Semantic has
support for theming. This feature allows you to set global CSS style changes, making it easy to conform a site to style.
Using themes you can customize things like default colors, font, shadows, and padding.

The feature the stands out most
for Semantic is the included Javascript API. The API includes plugins for jQuery to handle components like Search Bars,
Modals, and Forms. These plugins are designed to work well with the REST API making it easy to communicate with a backend,
making it especially useful when making a Web App.


## > Tailwind CSS
If you have ever encountered before you have read this line

> Tailwind CSS is a utility-first CSS framework.

If you never really understood what this fancy piece of tech-talk mean, but never asked, dont worry, I'll explain it.
What makes Bootstrap and Semantic UI component frameworks is that they do the heavy lifting by doing most of the design
work for you. If you want a button you just need to add the button class and an optional modifier class. You don't have
to think in terms of CSS, just in terms of the library you are using.

Tailwind works differently by not providing components, but by providing classes that let you build your own components.
Instead of replacing CSS, it is a *utility* to make working with CSS easier, hence the name. The biggest pro and con of
this library is that you have complete control over the design of web page. Things won't be as simple as the component
frameworks, but you will have a better time customizing your page. On top of that, Tailwind comes with some nifty features
that like pseudo classes, dark mode support, hover states, and more!

Unlike the other two frameworks, Tailwind does not include any Javascript for the front-end, but don't be alarmed! If
you are making a page with any sort of functionality, Tailwind pairs well with many other front-end frame works like Vue,
React, or Blade. I'll come back to this later.

---
# Features

## > Community
Let's be real here. One of the biggest indicators if a framework is good and if it will continue to be relevant depends
on the people supporting the project.

### Bootstrap
Bootstrap has one of the largest and longest standing community of any framework out there. With over 2.2 million
individual users on Github there is plenty of support. Official documentation has been well fleshed out, and there is
no shortage of blogs and tutorials on using Bootstrap out there.

### Semantic UI
Semantic UI would be described as more of a niche community. While the docs are very well written, total users only come
up to 12,500. I haven't had any problem finding Stack Overflow solutions to complex problems using Semantic, but you
won't be finding a lot of beginner material out there. Updates have also come out less frequently, so there are some
concerns on how relevant Semantic UI will be in the near future.

### Tailwind
Tailwind has some momentum as an up and coming library. Even though it's less than 2 years old it has already racked up
over 100,000 users and counting. With it's growing popularity you will find no shortage of examples and inspiration
online. They even have their own <a href="https://www.youtube.com/tailwindlabs">Youtube channel</a> they post regularly too.


>### TLDR
>
>Community Size
>
>|Ranking|Framework|
>|-------|---------|
>|#1|Bootstrap|
>|#2|Tailwindcss|
>|#3|Semantic UI|

## > Responsive Design (Mobile Friendly)

### Bootstrap
Making a responsive web site in Bootstrap revolves around it's column and breakpoint system.

If you wanted to make a 3 columns of text collapsed into one column for screens smaller than the medium(md) breakpoint,
it would look similar to this.
```html
<div class="container">
  <div class="row">
    <div class="col-md">
      One of three columns
    </div>
    <div class="col-md">
      One of three columns
    </div>
    <div class="col-md">
      One of three columns
    </div>
  </div>
</div>
```
While it works well in post cases. You don't have many options on creating unique experiences for mobile and desktop.
You can use some classes to show and hide elements based on screen size. This way you can create different elements for
mobile and desktop, but it ends up being a lot of work coding for desktop and mobile separately.


### Semantic UI
Semantic UI uses a similar grid system to Bootstrap, but with a couple extras for things like padding, margins, and float
build into the grid system. All stuff still do in Boostrap with a couple extra steps. Here's an example of using the grid
in Semantic.
```html
<div class="ui centered grid">
  <div class="six wide tablet eight wide computer column">1</div>
  <div class="six wide tablet eight wide computer column">2</div>
  <div class="six wide tablet eight wide computer column">3</div>
  <div class="six wide tablet eight wide computer column">4</div>
  <div class="six wide tablet eight wide computer column">5</div>
  <div class="six wide tablet eight wide computer column">6</div>
</div>
<!-- With a row div -->
<div class="ui four column grid">
  <div class="row">
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
  </div>
</div>
```
You will immediately notice there there is a lot more when it comes to using this grid. Though the goal is to make
reading HTML more human friendly, you end writing a lot more and this can become a bit messy.

### Tailwind
This is where Tailwind starts to show how it has been able to stand out. Instead of having a predefined grid system,
Tailwind uses conditional classes. Meaning you can customize every css property depending on the screen size, not just
the layout.

Here is an example of setting a the width of a `div` based on screen size.
```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
```

And a fully fledged card container would look something like this.
```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
```
You can see this in action in the <a href="https://tailwindcss.com/docs/responsive-design#overview">Tailwindcss docs</a>

This system does give you much more control, but you run into the same problem of having some messy code. I'll show you
a way to combat this for Tailwind in the next section.


>### TLDR
>
>Bootstrap has a simple and concise grid system. Easy to understand, but you can't vary your designs much.
>
>Semantic UI has a similar grid system with more features, but your code will look much more messy.
>
>Tailwind using conditional classes to let you change any applied classes based on screen size. Giving you complete
>control over style, but can be very messy unless you use custom components.



## > Functionality
Looks are good and all, but what if you are making a web app and need some more advanced functionality for your site.

### Bootstrap
Bootstrap does not come with much functionality. You can use it with jQuery, but integration with a back-end needs to be
written manually or need to be accomplished with server-side rendering. 

### Semantic UI
Semantic is much more friendly for adding functionality to the website. Components like search bars, modals, forms have
built in call backs and REST API integration. As a full-stack developer, I enjoyed quickly launching both front and 
back-ends for features quickly using Semantic.

### Tailwind
One of Tailwinds hidden strengths is that is has no functionality. It's only adds styling. Meaning you can easily combine
tailwind with popular frameworks like Vue or React. The level of detail plus the component system from a framework makes
this one of the most robust web-stacks you can work with.

## > Network Performance
When loading a website, milliseconds matter. Mobile devices are the most popular way to browse in 2021, and file size
matters a lot on cellular connections.
File Sizes

|Library|Uncompressed|Minified|
|-------|------------|--------|
|Bootstrap|187 KB|147 KB|
|Semantic UI|730 KB|550 KB|
|Tailwindcss|3739.4kB|3020.7kB|

Wow! Tailwind is not looking good here, but not to worry. There's an ace up the sleeve of Tailwind and that is PurgeCSS.
This tool automatically goes through cleans up unused classes from Tailwind. Using this you can get expect to get where
around 150kb to 250kb. Updating the list with these numbers it would look like this.(Keep in mind Semantic also includes
a large Javascript library.)

|Library|Minified + PurgeCSS|
|-------|-------------------|
|Bootstrap|147 KB|
|Tailwindcss|~150-250kB|
|Semantic UI|550 KB|

## > Additional Details
Anything that makes a library stand out on it's own.

### Bootstrap
There isn't much in the way of features that Bootstrap has and others don't, but what it does have is a large library of
examples and templates to choose. If you are looking for some guidance, there plenty of open source example projects to
look through. If you are in a hurry and willing to drop $50 to have most of the set-up done for you, then could look
through the pre-made themes.

### Semantic UI
Semantic UI does well with AJAX webpages. It has classes and components for loaders and placeholders while requests
await data. Forms have a build-in validator that used with a back-end validator, included callback functions make adding
logic to a webpage pretty straight forward. There is also a Semantic-Vue project to combine them into one framework to
take things a step further.

### Tailwind
Tailwind comes packed with some pretty cool build in features to make your page pop. A build-in dark mode support let's
you appease anyone who uses an IDE, people browsing at 2 am, and gives a touch of quality to your site. Hover States,
animation and transform classes streamline the process of adding interactivity. And you even have gradient support to
make those colors pop.


<!-- Tailwind 
- Utility CSS allows you to make any kind of component from the ground up.
Allowing you to customize your site to have it's unique feel.
- Pruned CSS in production reduces the size of TailwindCSS by only shipping what you use.
Allowing you to have the best of both worlds when it comes to functionality and network performance.
- Built in pseudo classes allows you to build functional responsive designs
- Long and Messy HTML can be simplified by using a component system like React or Vue
- Built-in Dark Mode support
- Hover States
- Animation, Transform, and Gradient Built-ins
- Support for adding new utilities
- Support for Plugins

Bootstrap
- Component CSS system makes a simple and fast process for making a website UI
- Grid Column system changes the relative size of elements depending on screen size category
- Responsive Utility class shows or hides elements depending on screen size
- Bootstrap templates makes it easy for developers to hit the ground running
- Con: Because of popularity of simplicity of bootstrap is has become very easy to notice when it is being using on a website
This has caused website to have that "Bootstrap Feel". You wouldn't want to use this on a production website, unless it was 
heavily customized, and at that point you might as well not use it.

Semantic UI
- Another Component CSS system
- Includes a Javascript API to add functionality to things like dropdowns, forms, and modals
- Animation API
- Theming System to create a unique feel for your site
- Responsive Grid system
- Can be locked into a bit of a cookie cutter feel. Theming helps mix up the aesthetic feel of a website, but you
still use the same grid and component system. It's kind of like having same cookie, but with different colors of frosting.
For some websites this is actually a good thing, since Semantic-UI focuses on making a intuitive design. But you will be hindered
if you are trying to make a unique experience. -->



## Conclusion
Tailwind has the advantage of having a large amount of control over the details of the webpage. While it might be harder
for beginner developers, anyone with experience in front-end development should be able to pick it up very quickly.
For something more streamlined Semantic-UI would be the next best thing. With a combination of CSS and JS in one package
you can quickly get web apps up and running. While you loose some control of the finer details of the look of the page,
a lot less time is required to get the page functional. In 2021, I would ever use Bootstrap for a production website,
but if you a student or just trying to get an MVP up and running as quickly as possible, it's not a terrible option.


# TLDR
Tailwind is one of the best options for creating modern looking production websites and plays well with other libraries
like Vue and React. If you want to get a functional website up and running quickly, and don't mind looking a little
cookie cutter, then Semantic-UI is a good choice as well.

