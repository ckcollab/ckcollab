---
title:  "Animation Beyond the Canvas"
date: 2019-12-13 00:00:00 +0800
author: jimmy
---

Canvas animations are great for eye catching displays, but what about animations on buttons? Or anything else that isn't a canvas? You _could_ use native css animations, but those can be cumbersome, especially for complex animations. Instead, we'll be taking a look at the popular animation library GreenSock.
<!--more-->

In my last <a href="{% post_url 2019-10-29-sacred-geometry %}" target="_blank">post</a>, I went into a fair amount of detail about using native javascript and html canvases to make animations. But if you want some buttons to slide on to the page, or an image to fade in as you scroll down the page, or really, interact with anything that _isn't_ a canvas, you'll need something else. 

I have done some work with css keyframe animations, but as soon as you start trying to chain animations, I start to get frustrated. This is where GreenSock comes in. Yes, there are lots of animation libraries, and I've played with a few of them, but I never had the same success with them as I did with GreenSock.

## The Problem
While working on the landing page of a website, I was trying to get some animations to line up with each other. I wanted the background image to fade in on page load, and a couple of buttons on the page to start their fade in process roughly 70% of the way through the fade in of the background. I started out with css code that looked very much like the following:

```css
#bg-image {
    animation: 3s appear;
}

@keyframes appear {
    0% {opacity: 0}
    100% {opacity: 1}
}
```

And for just fading in the background image, this worked great. But when I went to add the appear to the buttons, things went sideways. Part of my problem (I think) was that I simply didn't know how to make the css do things the way I wanted to, here was my hacky solution:

```css
#bg-image {
    animation: 3s bg-appear;
}

.buttons {
    animation: 5s button-appear;
}

@keyframes bg-appear {
    0% {opacity: 0}
    100% {opacity: 1}
}
@keyframes button-appear {
    0% {opacity: 0}
    50% {opacity:0}
    100% {opacity: 1}
}
```
By making the animation take a little less than twice as long, and making no changes for the first half of the animation, this achieved what I wanted, sort of...

Something frustrating about how eyes work (well, sensory perception in general) is that our sensitivity to opacity isn't linear. An even transition from 0-100% opacity doesn't _look_ like an even transition. Without going into great detail on why this is (mostly because I'm not qualified to...) suffice it to say that, in order to get what _appears_ to be a linear increase in opacity, we need to implement in exponential increase in opacity.

Consider the following animations:
<div style="display: flex; flex-direction: row; width: 50%; justify-content: space-around">
<div style="background-color: #000000; width: 50px; height: 50px" id="lin_fade"></div>
<div style="background-color: #000000; width: 50px; height: 50px" id="log_fade"></div>
</div>

While the fade out may look pretty similar, when fading in, the square on the left seems to appear almost instantly, and slowly gain its last bit of opacity, while the square on the right seems to be an even fade. In reality, the left square is a linear transition, while the right square is exponential. i.e. the graphs of their opacity over time look something like:

<img src="/assets/images/articles/opacity_graph.png" alt="A graph of opacity over time">

Achieving this kind of control over keyframes _probably_ exists, but I couldn't find it in a cursory google search, so I moved on to bigger guns for my solution.

## Enter GreenSock

So what is [GreenSock](https://greensock.com/) exactly? To quote them directly:
> Ultra high-performance, professional-grade animation for the modern web

I personally believe the "high-performance" is both an attribute of the speed of the library itself, and also the speed of development with the library. I spent so much time trying to figure out how to get css to animate things the way I wanted to, and it took me probably a quarter of the time to get a GreenSock version of the same thing (only better) running.

One of the greatest assets of GreenSock, in my opinion, is the timeline feature. This makes coordinating multiple animations a breeze. If we consider the previous example, using keyframes, doing the same thing with GreenSock is _way_ simpler:

```html
<style>
#bg-image, .buttons {
    opacity: 0
}
</style>
<script>
$(function () {
let tl = gsap.timeline()
tl.to("#bg-image", {opacity: 1, duration: 3})
tl.to(".buttons", {opacity: 1, duration: 3}, "-=1")
})
</script>
```
That was all it took to get the same functionality as the keyframes. We create a GreenSock timeline (`tl` here) and we then start adding actions to it. We give it a css selector, and then our arguments, which are essentially our destination. We set our css to opacity 0 so that at page load, the elements are hidden, and then GreenSock's `to` functionality handles the tweening to get the element to its destination (opacity of 1). 

Timelines by default are sequential, so the next action doesn't start until the previous one has finished, but we can add modifiers to change this. `"-=1"` is one such modifier. This is telling GreenSock to start this animation 1 second _before_ the previous action finishes, so they overlap. So now how do we fix the fact that the fade doesn't look linear? Simple, we add an ease, which GreenSock already has built in. To add an ease, all we have to do is add it as another argument:

```javascript
tl.to("#bg-image", {opacity: 1, duration: 3, ease: 'power2.in'})
tl.to(".buttons", {opacity: 1, duration: 3, ease: 'power2.in'}, "-=1")
``` 
And that is it. We have overlapped our fades, and they look like they fade in evenly. Easy.

## Conclusion

I have only scratched the surface of GreenSock, both in this blog post, and in my personal use. There are so many great features in the library; I highly recommend playing with it yourself. The next time you need to animate _anything_ on the web, put on a green sock!


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.0.2/dist/gsap.min.js"></script>

<script>
$(function() {
    let tl = gsap.timeline({repeat: -1});
    tl.to('#lin_fade', {opacity: 0, duration: 1});
    tl.to('#log_fade', {opacity: 0, duration: 1, ease: 'power2.out'}, '<');
    tl.to('#lin_fade', {opacity: 1, duration: 1});
    tl.to('#log_fade', {opacity: 1, duration: 1, ease: 'power2.in'}, '<');
})
</script>