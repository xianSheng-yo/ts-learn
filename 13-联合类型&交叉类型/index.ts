namespace B13 {
  //联合类型 取并集
  type T0 = number | string
  type T1 = number | boolean
  type T2 = T0 | T1 //string | number | boolean

  //交叉类型 取交集
  type T3 = T0 & T1 //number
  interface A {
    name: string
  }

  //接口 交叉类型
  interface B {
    age: number
  }

  type C = A & B
  let c1: C = {
    name: '小橘猫',
    age: 11,
  }

  type D = {
    name: string
  }

  //类型别名 交叉类型
  type E = D & {
    age: number
  }

  let e1: E = {
    name: '小橘猫',
    age: 11,
  }

  //类型别名 接口 交叉类型混用
  interface F {
    name: string
  }

  type G = {
    age: number
    sayHi(): void
  }

  type H = F & G
  let h1: H = {
    name: '小橘猫',
    age: 11,
    sayHi() {},
  }
}
