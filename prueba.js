const arr = [
  {name: 'Juan', age: 20},
  {name: 'Pedro', age: 30},
  {name: 'Maria', age: 40},
  {name: 'Luis', age: 50},
]

const names = arr.map(item => item.name)

const age = arr.filter(item => item.age >= 30)

console.table(names)
console.table(age)
