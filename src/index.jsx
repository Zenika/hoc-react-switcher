import React from 'react'

export default (config) => {
  const {
    prop = 'state',
    states = {},
    DefaultComponent,
  } = config || {}

  return (props) => {
    const propValue = props[prop]

    if (propValue === undefined && !DefaultComponent) {
      throw new Error(`Your prop value should match one of the \`states\` or
      you should provide a \`DefaultComponent\``)
    }
    if (propValue === undefined || !states[propValue]) return <DefaultComponent {...props} />

    const ComposedComponent = states[propValue]
    return <ComposedComponent {...props} />
  }
}
