import React from 'react'

export default (config) => {
  const {
    prop = 'state',
    states = {},
    DefaultComponent,
  } = config || {}

  return () => {
    const propValue = this.props[prop]

    if (propValue === undefined && !DefaultComponent) {
      throw new Error(`Your prop value should match one of the \`states\` or
      you should provide a \`DefaultComponent\``)
    }
    if (propValue === undefined || !states[propValue]) return <DefaultComponent {...this.props} />

    const ComposedComponent = states[propValue]
    return <ComposedComponent {...this.props} />
  }
}
