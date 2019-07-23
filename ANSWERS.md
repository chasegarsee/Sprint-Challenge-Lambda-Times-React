- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes defines type and which props are required
Type Checking allows us to catch bugs.
You can easily open a component and check with props are required and what type they should be.
When things get messed up, React will give you an error message in the console saing which props is wrong/missing, and the render method that caused the problem.

- [ ] Describe a life-cycle event in React?

We can then control what happens when each section of our UI renders, updates, thinks about re-rendering, and then disappears entirely.

- [ ] Explain the details of a Higher Order Component?

A HOC is a function that takes a component and returns a new component.
We use it for reusing component logic.
A normal Component transforms props into UI, a HOC transforms a Component into another Component

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Vanilla CSS - easy and traditional

Styled-Components - Reusable, all on one page.

Bootstrap - pre built, reusable.
