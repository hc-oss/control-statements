[![npm version](https://img.shields.io/npm/v/control-statements.svg?style=flat-square)](https://www.npmjs.com/package/control-statements)
[![Build Status](https://travis-ci.org/harshzalavadiya/control-statements.svg?branch=master)](https://travis-ci.org/harshzalavadiya/control-statements)

There's no built-in looping and conditional syntax in React. This library adds the syntactic sugar to write looping and conditionals as component.

Fork of [react control statements](https://www.npmjs.com/package/react-control-statements) but with `<React.Fragment/>` implementation

## Free Advise

If you are coming from non-jsx background you might think this package is a good start but in reality 🤫 *this package is not needed at all.*

because, it's easy to replicate this scenarios with pure ES6+, I'm putting some examples that might help you for getting started.

### Pure React Conditional Statements
[![Edit SimpleConditionalStatements](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/peaceful-bhaskara-q35fy?fontsize=14)
```jsx
import React from "react";

export default function PureReactExamples() {
  const foo = true;
  const fruits = ["🍇 Grapes", "🍈 Melon", "🍌 Banana"];
  return (
    <>
      <h1>Simple If without Else</h1>
      {foo && <p>Yay, Foo is true</p>}

      <h1>Simple If with Else</h1>
      {foo ? <p>Yay, Foo is true</p> : <p>Whoa, Foo is false</p>}

      <h1>Loop Example</h1>
      {fruits.map((fruitName, index) => (
        <p key={index}>{fruitName}</p>
      ))}
    </>
  );
}
```

---

## Install

```
npm install --save control-statements
```

## Usage

### If

The body of the if statement only gets evaluated if condition is true.

```jsx
import React, { Component } from "react";
import { If } from "control-statements";

class YourComponent extends Component {
  render() {
    <If condition={test}>
      <span>Truth</span>
    </If>;
  }
}
```

### Choose

This is an alternative syntax for more complex conditional statements.

```jsx
import React, { Component } from "react";
import { Choose, When, Otherwise } from "control-statements";

class YourComponent extends Component {
  render() {
    return (
      <div>
        <Choose>
          <When condition={test1}>
            <span>IfBlock</span>
          </When>
          <When condition={test2}>
            <span>ElseIfBlock</span>
            <span>Another ElseIfBlock</span>
            <span>...</span>
          </When>
          <Otherwise>
            <span>ElseBlock</span>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}
```

### For

For syntax.

```jsx
import React, { Component } from "react";
import { For } from "control-statements";

class YourComponent extends Component {
  render() {
    return (
      <div>
        <For each="$item" of={this.props.items}>
          <span key="$item.id">$item.title</span>
        </For>
      </div>
    );
  }
}
```
