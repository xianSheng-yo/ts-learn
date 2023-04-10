namespace B16 {
  //extends
  //1 class类的继承
  class Animal {
    name: string = '小橘猫'
    sayHi() {
      console.log('hi')
    }
  }

  //子类继承父类的所有属性和方法
  class Cat extends Animal {}
  let c1: Cat = new Cat()

  //2 接口扩展
  interface A {
    name: string
    sayHi(): void
  }

  interface B extends A {
    age: number
  }

  let b1: B = {
    age: 11,
    name: '小橘猫',
    sayHi() {},
  }

  //3 泛型约束
  function fn1<T extends string | number>(a: T) {
    console.log('a', a)
  }
  function fn2<T extends 'get' | 'post'>(a: T) {
    console.log('a', a)
  }
  fn2('get')

  function fn3<T extends object>(a: T) {
    console.log('a', a)
  }
  fn3([])

  function fn4<T extends keyof {name: string}>(a: T) {
    console.log('a', a)
  }
  fn4('name')
}
