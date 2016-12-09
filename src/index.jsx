import React, { Component } from 'react'

export default (config) => {
  const {
    prop = 'state',
    states = {},
  } = config || {}

  return class extends Component {
    render() {
      return (props) => {
        const propValue = props[prop]
        if (propValue && states[propValue]) {
          const ComposedComponent = states[propValue]
          return <ComposedComponent {...props} />
        }
        return null
      }
    }
  }
}
