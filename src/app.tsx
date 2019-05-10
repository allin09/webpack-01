import React, { Component } from 'react'

function Dec_1(t: any) {
  console.log('Dec_1: ', t)
  Object.defineProperties(t.prototype, {
    age: {
      value: 12,
      writable: true
    },
    sex: {
      value: '男',
      writable: true
    },
    age3: {
      value: 12,
      writable: true
    }
  })
  return t
}
function Dec_2<T extends new (...args: any[]) => {}>(t: T) {
  console.log('Dec_2: ', t)
  return class extends t {
    newProperty = 'new property'
    hello = 'override'
  }
}

@Dec_1
@Dec_2
class A extends Component {
  hello() {
    return 'hello'
  }
  render() {
    return 123
  }
}
export default A
