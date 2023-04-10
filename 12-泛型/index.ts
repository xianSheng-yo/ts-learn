namespace B12 {
  //泛型约束 参数类型占位 使用时候确定类型

  //函数泛型
  function fn1<T>(a: T): T {
    return a
  }
  //调用函数传入类型约束
  fn1<string>('abc')
  //使用类型推论 推断出T的类型
  fn1(20)

  /* 
    T(type) 类型
    K(key) 键名
    V(value) 值
    E(element) 元素
  */

  //接口泛型
  interface Person<T> {
    name: T
  }
  let p1: Person<string> = {
    name: '小橘猫',
  }

  //类型别名泛型
  type Cat<T> = T | number
  let c1: Cat<string> = 'abcd'
  c1 = 20

  //类的泛型
  class Dog<T> {
    name: T
    constructor(name: T) {
      this.name = name
    }
  }

  let d1: Dog<string> = new Dog('小狗')
  let d2 = new Dog('小狗')
  let d3 = new Dog(999)
}
