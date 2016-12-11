import React from 'react'

export const errorMessage = `Your prop value should match one of the \`states\` or
you should provide a \`DefaultComponent\``

export default (config) => {
  const {
    prop = 'state',
    states = {},
    DefaultComponent,
  } = config || {}

  return (props) => {
    const propValue = props[prop]

    if (propValue === undefined && !DefaultComponent) {
      throw new Error(errorMessage)
    }
    if (propValue === undefined || !states[propValue]) return <DefaultComponent {...props} />

    const ComposedComponent = states[propValue]
    return <ComposedComponent {...props} />
  }
}
