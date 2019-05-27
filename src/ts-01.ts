function copyFields<T extends typeof U, U>(target: T, source: U): T {
  // return Object.assign(target, source)
  for (const k of Object.keys(source)) {
    target[k] = k
  }
  return target
}
let x = [{ a: 1, b: 2, c: 3, d: 4 }]

console.log(copyFields(x, [{ b: 10, d: 20 }]))
