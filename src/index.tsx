// import balls from 'img/balls.png'
// const balls = require('img/balls.png')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
    hello3 = 'override'
  }
}

@Dec_1
@Dec_2
class A extends Component {
  hello() {
    return 'hello'
  }
  render() {
    return 123456
  }
}
let a: any
a = new A({ age6: 1 })
console.log(a.age)
console.log(a.__proto__.constructor.age)
// console.log(A.age)
console.log(a.hello())
console.log(a)
console.log(A)
// console.log(balls)
const Dom = document.querySelector('#root')
ReactDOM.render(<A />, Dom)
