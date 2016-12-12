# hoc-react-switcher

[![CircleCI](https://circleci.com/gh/Zenika/hoc-react-switcher.svg?style=svg)](https://circleci.com/gh/Zenika/hoc-react-switcher)

## what is this?
This is a higher order component ("HOC") which displays one of its possible states depending on a prop value.

## install
`npm i --save hoc-react-switcher`

## use
You have to give a map of components and optionally some other informations:

Parameter | Required | Default value | Description
----------|--------|---------------|-------------
`prop` | no | `state` | The prop to watch. It determines which component to display
`states` | yes | `{}` | A map of components
`DefaultComponent` | no | `undefined` | A component to display when prop value doesn't match one of the states


**Component.js**
```(javascript)
import React, { PropTypes } from 'react'
import switcher from 'hoc-react-switcher'

const FirstComponent = () => {
  return (
    <div>
      FirstComponent
    </div>
  )
}

const SecondComponent = () => {
  return (
    <div>
      SecondComponent
    </div>
  )
}

const DefaultComponent = () => {
  return (
    <div>
      DefaultComponent
    </div>
  )
}

export default switcher({
  prop: 'custom',
  states: {
    0: FirstComponent,
    1: SecondComponent
  },
  DefaultComponent,
})
```
