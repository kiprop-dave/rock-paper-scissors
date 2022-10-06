# Frontend Mentor - Rock, Paper, Scissors solution

This is my solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size ✅
- Play Rock, Paper, Scissors against the computer ✅
- Maintain the state of the score after refreshing the browser _(optional)_ ✅
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](/public/rock-paper-scissors.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [here](http://rock-paper-scissors-gamma-gules.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Trying to get the latest values in state after an update was tricky to get around. However, I found an insightful blog that helped me navigate this issue. Using a custom React hook worked.

```js
import { useState } from "react";

function useSyncState(someState) {
  const [syncState, setSyncState] = useState(someState);

  let currentState = syncState;

  const getCurrent = () => currentState;

  const setState = (newValue) => {
    currentState = newValue;
    setSyncState(newValue);
    return currentState;
  };

  return { getCurrent, setState };
}

export default useSyncState;
```

### Continued development

I haven't done the last bonus feature. I plan on adding it in the future.

### Useful resources

- [scrimba](https://www.scrimba.com) - This is in my opinion the best place to learn web development.
- [stack overflow](https://stackoverflow.com/) - Whenever I got stuck, I always found some insight here.

## Author

- Website - [Kiprop](https://www.tanuikiprop.gq)
- Frontend Mentor - [@kiprop-dave](https://www.frontendmentor.io/profile/kiprop-dave)

## Acknowledgments

I had some trouble trying to make state updates synchronous. This [blog](https://dev.to/bytebodger/synchronous-state-with-react-hooks-1k4f) helped me to do exactly that.
