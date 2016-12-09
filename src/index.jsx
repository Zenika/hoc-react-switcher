import React, { Component } from 'react'

export default (config) => {
  const {
    prop = 'state',
    states = {},
  } = config || {}

  return class extends Component {
    render() {
      const propValue = this.props[prop]
      if (propValue && states[propValue]) {
        const ComposedComponent = states[propValue]
        return <ComposedComponent {...this.props} />
      }
      return null
    }
  }
}
