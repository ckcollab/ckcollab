---
title:  "Javascript Animation"
date: 2019-10-29 00:00:00 +0800
author: jimmy
---

<div style="width: 85px; float: left; margin-right: 20px;">
    <img src="/assets/images/articles/tt_small.svg">
</div>

A quick look at drawing and animation with HTML Canvas and Javascript
<!--more-->

**TL;DR** Check out this cool javascript animation of multiplication tables <a href='#final_canvas'>below.</a>

My very first experience with programming was on Khan Academy, going through their Drawing with Java tutorial. I hated
it. Programmatically placing circles and coloring them in, trying to make a penguin was frustrating beyond belief.
Trying to guess where the centers of my circles needed to be so that my penguin's head sat _on_ its body, instead of
down in its stomach like some avian _blemmyae_ eventually drove me into resignation, not to pick up programming again
for a long time.

## Basic drawing
So how is it I sit here writing an article about going back to programmatic art? To put it simply, my understandings of
what "turtle path" art is good for has evolved. A lot. One of the things that was so frustrating about trying to draw
that penguin so many years ago was that I had no idea why I needed to be drawing it programmatically. I could click and
draw this thing and be done so much faster. (Granted, it would still look like a second grader who just discovered MS
Paint.) But the turtle paths I'll be explaining below I definitively could _not_ click and draw myself. This art is
derived from mathematics (please, don't leave! It's simple math, I promise!) and as such, is suited perfectly for
telling a turtle where to start, where to end, and what color to draw.

With that said, before we look at the math, and the code to draw all of it, let's first look at some simple canvas drawing. We'll start with a line.
```html
<canvas id="my_canvas"></canvas>

<script>
$(document).ready(function() {
    // get our canvas tag from our DOM and set its height and width
    let canvas = document.getElementById('my_canvas')
    canvas.height = 100
    canvas.width = 100

    // get the drawing context of our canvas
    let ctx = canvas.getContext('2d')

    // Setup our color palette 
    ctx.strokeStyle = '#fff'
    ctx.fillStyle = '#000'

    // draw a black rectangle background
    ctx.rect(0, 0, 100, 100)
    ctx.fill()

    // start drawing
    ctx.beginPath()

    // move our pen, without making a line, to the upper left corner
    ctx.moveTo(0,0)

    // draw a line from where the pen currently sits (0, 0) to (100, 100)
    ctx.lineTo(100, 100)

    // actually draw the white line
    ctx.stroke()
})
</script>
```

This will render an image that looks like this:

<div style="text-align: center">
    <canvas id="my_canvas"></canvas>
</div>

Really straightforward. Also, really boring! So let's make it at least slightly more interesting, animate it!

## Basic Animations

There are lots of libraries out there for animation in Javascript, but we don't actually need one, it can all be done in
just plain javascript. The gist of how I prefer to lay out animation in javascript is as follows:

```html
<script>
const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');

let draw = function() {
    // clear the frame
    ctx.clearRect(0, 0, canvas_width, canvas_height)
    // logic for drawing your animation frame
    // ...
    // make it recursive by telling requestAnimationFrame to call this function again
    window.requestAnimationFrame(draw)
}
let init = function () {
    // Do any canvas initialization things
    // ...
    // call the first animation frame
    window.requestAnimationFrame(draw)
}
$(document).ready(function () {
    // once the document is ready, call your init function and start the animation
    init()
})
</script>
```

So lets apply this skeleton to our line we drew above, and make it incrementally draw.

```html
<script>
// create our canvas variables and a global counter for the distance of our line
const canvas = document.getElementById('my_canvas')
const ctx = canvas.getContext('2d')
let distance = 0

let draw = function() {
    // clear the frame
    ctx.clearRect(0, 0, 100, 100);
    
    // draw our black background
    ctx.rect(0, 0, 100, 100);
    ctx.fill();

    // draw our line
    ctx.beginPath();
    ctx.moveTo(0,0);
    // only go as far as our distance variable
    ctx.lineTo(distance, distance);
    ctx.stroke();

    // if we are less than the height/width or our canvas, increment our distance, otherwise reset it.
    if (distance < 100) {
        distance += 1
    } else {
        distance = 0
    }
    // call our next frame
    window.requestAnimationFrame(draw);
};

let init = function () {
    // set up the height and width of the canvas as well as base fill and stroke styles
    canvas.height = 100;
    canvas.width = 100;
    ctx.fillStyle = '#000'
    ctx.strokeStyle = '#fff';

    // call our first animation frame
    window.requestAnimationFrame(draw);
};

$(document).ready(function() {
    // once our document is loaded, run our init function
    init();
})
</script>
```

<div style="text-align: center">
    <canvas id="animation_canvas"></canvas>
</div>

Still not super exciting, but at this point, we have all the necessary tools to start creating more interesting drawings
and animations. With that in mind, lets take a dive in to more interesting artwork.

## &#128680; Math incoming &#128680;

<div style="width: 200px; float: right; margin-left: 20px;">
    <img src="/assets/images/articles/tt_small.svg">
</div>
Don't worry, the math of everything isn't actually that bad, first, we are going to draw a canvas that looks something
like this one (pictured right). This is a visualization of a multiplication table, I believe this one was the 122 times
tables displayed on a 300 point "clock". To explain what that actually means, we will look at a much simpler example.
The 2 times tables.

First, let's explain what I mean by a "clock". With the simpler example of the two times tables, let's say we map it on
to a traditional analog clock face. So we have the numbers 1 -> 12 in arranged in a circle, and we take each one of
those numbers and multiply it by 2, drawing a line from it that number, to what it equals when multiplied by 2. For the
first half of our numbers, this is easy. We draw a line from 1 -> 2, from 2 -> 4, from 3 -> 6. But what happens when we
hit 7? or anything higher than that? That is where the clock aspect comes in. If it is currently 2 hours past noon, what
time is? 2 pm. So when we multiply 7 by 2, we go to 12, and then we go 2 more past that, so the point on the clock for 
represents the number 2, but it also represents 14, and 26, and 38, and so on. This "clock" characteristic is an 
embodiment of modulus division. So what we are actually doing is taking all the points on our clock, multiplying them by
2, and modulo-dividing them by 12 to get the point at which they land on the clock. So for our 2 times tables on a 12 
point clock, this is where our lines would go:
```
| Input | Output | Location |
|-------|--------|----------|
| 1     | 2      | 2        |
| 2     | 4      | 4        |
| 3     | 6      | 6        |
| 4     | 8      | 8        |
| 5     | 10     | 10       |
| 6     | 12     | 12       |
| 7     | 14     | 2        |
| 8     | 16     | 4        |
| 9     | 18     | 6        |
| 10    | 20     | 8        |
| 11    | 22     | 10       |
| 12    | 24     | 12       |
```
You can see our example "clock face" below here, on the left. Next to it is the same 2 times tables, but with 48 lines. 
Then we have the three times tables, and then the 4 times tables next to that. Interestingly, the "petals" of the 
flower-like shapes in the images always have 1 less petal than their times table, i.e. 3 times tables has 2 petals, 4 
times tables has three petals, and so on.

<div style="text-align: center;">
<div style="width: 175px; display: inline-block;">
    <img src="/assets/images/articles/tt_two.svg">
</div>
<div style="width: 175px; display: inline-block;">
    <img src="/assets/images/articles/tt_more_lines.svg">
</div>
<div style="width: 175px; display: inline-block;">
    <img src="/assets/images/articles/tt_three.svg">
</div>
<div style="width: 175px; display: inline-block;">
    <img src="/assets/images/articles/tt_four.svg">
</div>
</div>

The next bit of math we will need is some small understanding of polar coordinates. Doing the math in polar coordinates 
will actually handle the modulus logic for us, since it behaves just like our aforementioned clock anyway. If you take a
polar coordinate and add 2&pi; to it (or Tau(&tau;), depending on <a href="https://www.youtube.com/watch?v=ZPv1UV0rD8U"
target="_blank">which circle constant you prefer</a>) you end up right back where you started. So if we take &tau; and 
divide it by the number of lines we want, in this case, 12, this gives us the increment to move around our circle for 
the starting points of all our lines. We can then take this polar coordinate (which is really just an angle, usually 
called _theta_) and multiply it by 2, meaning whatever angle distance we have traveled around our circle to get to 
that point, we travel that distance twice again, and the polar coordinates handle our modulus division for us. This 
marks the end of our line. Now we just need to figure out how to turn that polar coordinate into a cartesian one, 
so we can actually draw it.

This is done with two formulas:

```javascript
x = Math.cos(theta)
y = Math.sin(theta)
```

This would give us the (x, y) coordinates of a unit circle (meaning a radius of 1) centered on the origin (0, 0). To 
move it around the graph, we can multiply x and y by the desired radius, and then add the center point of our circle 
(cx, cy) to their respective x, y points. So our final conversion formula looks like:
```javascript
x = Math.cos(theta) * radius + cx
y = Math.sin(theta) * radius + cy
```

## Finally

We'll put this all together now, and write the code for drawing one of these circles. For convenience, (and because I 
don't like most of vanilla javascript's functions for dealing with lists, objects, and whatnot) I'll be using some 
lodash methods (docs <a href="https://lodash.com/docs/" target="_blank">here</a>).
```javascript
// hand-wavy setup, covered above
let canvas
let ctx

// vars for drawing
const number_of_lines = 12
const unit_angle = 2 * Math.PI / number_of_lines
const radius = 100
const cx = canvas.width / 2
const cy = canvas.height / 2
let multiplier = 2
// Make an array of objects with a start and end angle, and we'll convert them to
// (x, y) coordinates on draw
let lines = _.map(_.range(number_of_lines), i => {
    return {start: unit_angle * i, end: unit_angle * i * multiplier}
})

function get_xy(theta) {
    return [Math.cos(theta) * radius + cx, Math.sin(theta) * radius + cy]
}

function draw() {
    ctx.beginPath()
    _.forEach(lines, line => {
        ctx.moveTo(...get_xy(line.start))
        ctx.lineTo(...get_xy(line.end))
    })
    ctx.stroke()
}
```
This will produce the 12 pointed clock, pictured above, minus the nice colors.

The benefit of storing start and end as the angles and then converting to pixel coordinates on draw is that when 
animating, we can loop through our lines and recalculate the end theta based on the start theta each time, rather than 
recalculating the entire list each frame.

Let's see how that might look:
```javascript
function recalculate_lines() {
    _.forEach(lines, line => {
        line.end = line.start * multiplier
    })
}
function draw() {
    ctx.beginPath()
    _.forEach(lines, line => {
        ctx.moveTo(...get_xy(line.start))
        ctx.lineTo(...get_xy(line.end))
    })
    ctx.stroke()
    multiplier += 0.01  // increment our multiplier
    recalculate_lines()
    window.requestAnimationFrame(draw)
}
```
And that's basically it. There is plenty of room to add extra flare to it, like more lines, or changing colors, or a 
nice little boomerang in there. The core of this code can be found 
<a href="https://github.com/jimmykodes/multiplication_tables" target="_blank">here</a>, feel free to fork the repo and
start playing with it! Here is an example of how I have improved it, click the button below to jump to multiplier.

<div style="text-align: center">
    <canvas id="final_canvas"></canvas>
</div>
<div style="text-align: center" class="bootstrap-iso">
<button type="button" class="btn btn-default" onclick="randomize()">Randomize</button>
</div>

{% comment %}
Stuff below this is for rendering the canvas examples.
{% endcomment %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>
<script>
const static_canvas = document.getElementById('my_canvas');
const simple_animation_canvas = document.getElementById('animation_canvas');
const static_ctx = static_canvas.getContext('2d');
const simple_animation_ctx = simple_animation_canvas.getContext('2d');
const width = 100; 
const height = 100;
let counter = 0;

const final_canvas = document.getElementById('final_canvas');
const final_ctx = final_canvas.getContext('2d');
const final_height = 400;
const final_width = 400;
const number_of_lines = 150;
const unit_angle = Math.PI * 2 / number_of_lines;
const radius = final_height / 2 - 20;
const cx = final_width / 2;
const cy = final_height / 2;
const dpr = window.devicePixelRatio;
let multiplier = 2;

let randomize = function () {
    multiplier = Math.random() * number_of_lines / 2
};

let lines = _.map(_.range(number_of_lines), i => {
    return {start: unit_angle * i, end: unit_angle * i * multiplier, hue: i * .3 % 360}
});

let get_xy = function (theta) {
    return [Math.cos(theta) * radius + cx, Math.sin(theta) * radius + cy]
};

let recalculate_lines = function () {
    _.forEach(lines, line => {
        line.end = line.start * multiplier;
        line.hue = (line.hue + .1) % 360
    })
};

let draw_simple_line = function () { 
    static_canvas.height = height;
    static_canvas.width = width;       
    static_ctx.rect(0, 0, 100, 100);
    static_ctx.fill();
    static_ctx.strokeStyle = '#fff';
    static_ctx.beginPath();
    static_ctx.moveTo(0,0);
    static_ctx.lineTo(100, 100);
    static_ctx.stroke();
};
let draw = function() {
    simple_animation_ctx.clearRect(0, 0, 100, 100);
    simple_animation_ctx.rect(0, 0, 100, 100);
    simple_animation_ctx.fill();
    simple_animation_ctx.strokeStyle = '#fff';
    simple_animation_ctx.beginPath();
    simple_animation_ctx.moveTo(0,0);
    simple_animation_ctx.lineTo(counter, counter);
    simple_animation_ctx.stroke();
    if (counter < 100) {
        counter += 1
    } else {
        counter = 0
    }
    final_ctx.clearRect(0, 0, final_width, final_height);
    final_ctx.beginPath();
    final_ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    final_ctx.fill();
    final_ctx.save();
    final_ctx.fillStyle = '#606c71';
    final_ctx.fillText(`Multiplier: ${multiplier.toFixed(3)}`, 0, 20);
    final_ctx.restore();
    _.forEach(lines, line => {
        final_ctx.strokeStyle = `hsla(${line.hue},100%,50%,0.7)`;
        final_ctx.beginPath();
        final_ctx.moveTo(...get_xy(line.start));
        final_ctx.lineTo(...get_xy(line.end));
        final_ctx.stroke();
    });
    if (multiplier >= number_of_lines / 2) {
        multiplier = 2
    } else {
        multiplier += 0.007
    }
    recalculate_lines();
    window.requestAnimationFrame(draw);
};
let init = function () {
    simple_animation_canvas.height = height;
    simple_animation_canvas.width = width;
    final_canvas.height = final_height * dpr;
    final_canvas.width = final_width * dpr;
    final_canvas.style.height = `${final_height}px`;
    final_canvas.style.width = `${final_width}px`;
    final_ctx.scale(dpr, dpr);
    final_ctx.font = '18px Arial';
    
    window.requestAnimationFrame(draw);
};
$(function() {
    draw_simple_line();
    init();
})
</script>