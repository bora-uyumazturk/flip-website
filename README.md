# Flipsite

A business-card inspired personal website design. Visitors can navigate by clicking, dragging, and swiping the mouse. 

## Tools

I used [react-use-gesture](https://github.com/pmndrs/react-use-gesture) for handling swipes and [react-spring](https://github.com/pmndrs/react-spring)
for animations. 

## Directions

To run locally, clone the repo and run `yarn install && yarn start`.

## Caveats

This doesn't well work on mobile due to unfortunate interactions between the `backface-visibility` css property and scrolling. 
