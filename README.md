# hoc-react-switcher

## what is this?
This is a higher order component ("HOC") that display components depending of a prop.

## install
`npm i --save hoc-react-switcher`

## use
You have to wrap your component, and give some informations:

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
