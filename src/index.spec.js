import React from 'react'
import { mount } from 'enzyme'
import switcher, { errorMessage } from './index.jsx'

/* eslint-env mocha */

const FirstComponent = () => <div />
const SecondComponent = () => <div />
const DefaultComponent = () => <div />

const getWrapped = (config, props) => {
  const Container = switcher(config)
  return mount(<Container {...props} />)
}

const equals = (wrapper, Component) => wrapper.find(Component).should.have.length(1)

describe('react-switcher', () => {
  it('should return DefaultComponent when prop value doesn\'t match one of the states', () => {
    const wrapper = getWrapped({
      states: {
        0: FirstComponent,
        1: SecondComponent,
      },
      DefaultComponent,
    }, { state: 3 })

    equals(wrapper, DefaultComponent)
  })

  it('should return DefaultComponent when prop value is undefined and DefaultComponent is present', () => {
    const wrapper = getWrapped({
      states: {
        0: FirstComponent,
        1: SecondComponent,
      },
      DefaultComponent,
    }, { state: undefined })

    equals(wrapper, DefaultComponent)
  })

  it('should return the right component when prop value match on the states', () => {
    const wrapper = getWrapped({
      states: {
        0: FirstComponent,
        1: SecondComponent,
      },
    }, { state: 0 })

    equals(wrapper, FirstComponent)
  })

  it(`should return the right component when using a custom prop and prop
    value match on the states`, () => {
    const wrapper = getWrapped({
      prop: 'custom',
      states: {
        0: FirstComponent,
        1: SecondComponent,
      },
    }, { custom: 1 })

    equals(wrapper, SecondComponent)
  })

  it(`should throw an error when prop value is undefined and a default
    component isn't provided`, () => {
    try {
      getWrapped({
        states: {
          0: FirstComponent,
          1: SecondComponent,
        },
      }, { custom: undefined })
    } catch (e) {
      e.message.should.be.equal(errorMessage)
    }
  })
})
