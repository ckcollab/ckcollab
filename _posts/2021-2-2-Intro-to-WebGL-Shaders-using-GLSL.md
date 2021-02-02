---
title:  Intro to Shaders in WebGL using GLSL
date: 2021-2-2
author: logan
---

WebGL gives the freedom to create amazing projects in the web-browser. Utilizing the power of the GPU throught GLSL
language lets you achieve a performance you can't normally achieve with Javascript.

<!--more-->

<iframe height="454" style="width: 100%;" scrolling="no" title="Stripe Website Gradient Animation" src="https://codepen.io/kevinhufnagl/embed/YzwBemd?height=454&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/kevinhufnagl/pen/YzwBemd'>Stripe Website Gradient Animation</a> by Kevin Hufnagl
  (<a href='https://codepen.io/kevinhufnagl'>@kevinhufnagl</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This animation is from <a href="www.stripe.com">Stripe's</a> website. I love this animation, I could stare at it for hours.
These small details can take a great website to something amazing, but graphics rendering isn't a strength of Javascript.
That's where WebGL and GLSL comes in.

## What is WebGL

According to the <a href="https://www.khronos.org/webgl/wiki/Getting_Started">wiki</a>
> WebGL is a cross-platform, royalty-free API used to create 3D graphics in a Web browser.

Basically WebGL is a rasterization engine. Which means you can use it to make 2D or 3D graphics, and it's very versatile.
It can be used to run video games in the web, create animations like the one above, edit images, display data, and more!
And there are a lot of libraries built on top of WebGL that can make the learning curve a little easier like
<a href="https://threejs.org/">Three.js</a> and <a href="p5js.org">p5.js</a>. We are going to be focusing on making
shaders in GLSL so we won't need any of these libraries, but this info can be used in conjunction with any of them.

## What is GLSL
OpenGL Shading Language (GLSL) is a C based shading language. This language allows the web browser access to resources
of the GPU when rendering to a canvas. There are two main kinds of shaders, fragment shaders and vertex shaders.

### Vertex Shader
The vertex shader handles the process of compute the position of individual vertices. You can use this step to transform,
scale, and morph an object.

### Fragment Shader
When it is time to raster the objects the fragment shader is called for every pixel that needs to be rendered. This
shader is responsible for setting the color and depth for every pixel. This is useful in animations like the one above.


It might be surprising, but that's all you need to make a WebGL program! There will be a lot of syntax and variables
you will need to learn in making your program. If you think you got what it takes I recommend checking out this great
tutorial series on getting started with WebGL. <a href="https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html">
WebGL Fundamentals</a>
