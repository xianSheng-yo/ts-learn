namespace B22 {
  //类型保护 在判断中把类型 收窄为实际类型

  // in 判断属性 是否在对象中
  interface Cat {
    name: string
    jump: boolean
  }

  interface Dog {
    name: string
    bark: string
  }

  type Animal = Cat | Dog
  function getAnimal(o: Animal) {
    if ('bark' in o) {
      return o.name
    } else {
      return o.jump
    }
  }

  //typeof 收窄基本类型
  function fn1(a: string | number): number {
    if (typeof a === 'string') {
      return a.length
    } else {
      return a * 2
    }
  }

  //instanceof 收窄引用类型
  class Person {
    name: string = '人'
  }

  const p1 = new Person()

  if (p1 instanceof Person) {
    console.log(true) //true
  }

  //is 收窄指定类型
  function isStr(str: unknown): str is string {
    return typeof str === 'string'
  }

  function getLength(o: unknown) {
    if (isStr(o)) {
      return o.length
    }
  }
}
