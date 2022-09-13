# simple-microinteraction
Creating a microinteraction starting from Figma design base to the code facts.
In this example we are going to use animejs, a great and lightweight library that let us create from simple to complex animation, avoiding to write a lot of code.
For more information, please refer the direct link: https://animejs.com/

## First step (design)
Open Figma or Adobe XD (the design tool you prefer), you just need to create these two paths:

![](/hamburgerOff.svg "Closed")
![](/hamburgerOn.svg "Opened")

Then you just need to export these paths as svg formats. As you can see I called them hamburgerOn/Off which rappresent our states of the animation.

## Second step (code)
Now it's time to code this animation! Of course this is a simple example, but the focus is to understand how animation could be created easily with some javascript.

1. Create base html using the shortcut !+tab
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hamburger menu animation</title>
</head>
<body>
  
</body>
</html>
```

2.Import your svg code of the initial state icon inside the body.

![Alt text](/hamburgerOff.svg "Closed")
```html
  <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H22" stroke="black" stroke-width="3" stroke-linecap="round" />
    <path d="M2 10H30" stroke="black" stroke-width="3" stroke-linecap="round" />
    <path d="M2 19H28" stroke="black" stroke-width="3" stroke-linecap="round" />
  </svg>
```

3.Now let's import this line inside the head tag in order to import the animejs package
```html
  <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
```

4. Finally, create a file named script.js where we will use animejs and the onClick action of the interaction.
```js
  function handlePath() {
  //get the svg dom element
  const mySvg = document.getElementById("mySvg");
  //get the actual state and store it in a constant
  const state = parseInt(mySvg.getAttribute('state'),10);
  //set the new state to our dom element
  mySvg.setAttribute('state', state ? 0 : 1);
  //animate! :D
  return anime.timeline({
    targets: '#path1', //id of the path
    d: state ? 'M2, 2H22' : 'M2, 2H3', //path morphing
    easing: 'easeInOutQuad', //type of ease
    duration: 200,
    opacity: state ? 1 : 0,
  }).add({
    targets: '#path2',
    d: state ? 'M2, 10H30' : 'M2, 2L22, 19',
    easing: 'easeInOutQuad',
    duration: 200,
  }, 0).add({ //0 indicate after how much time should I animate the next object "#path3"
    targets: '#path3',
    d: state ? 'M2, 19H28' : 'M2, 19L22, 2',
    easing: 'easeInOutQuad',
    duration: 200,
  }, 0);
}
```

Keep attention to the d property. Based on state, we are going to set the new path(d) to our target. Remember to put the semicolons between points or the animation will not work!!!. 

## Step 3
Enjoy creating new micro interactions!

![Alt text](/interaction.gif "Let's goooo")