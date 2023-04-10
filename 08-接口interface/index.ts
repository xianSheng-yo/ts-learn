namespace B8 {
  //接口 约束对象
  interface Person1 {
    name: string
    age: number
  }

  let p1: Person1 = {
    name: '小橘猫',
    age: 11,
  }

  //可选参数
  interface Person2 {
    name: string
    age?: number
  }
  let p2: Person2 = {
    name: '小橘猫',
    // age: 11,
  }

  //只读属性
  interface Person3 {
    readonly name: string
    age: number
  }
  let p3: Person3 = {
    name: '小橘猫',
    age: 11,
  }
  //p3.name = '小黑猫'

  //额外属性
  interface Person4 {
    name: string
    age: number
    [prop: string]: any
  }
  let p4: Person4 = {
    name: '小橘猫',
    age: 11,
    sex: '女',
    hobs: ['唱歌'],
  }

  //接口继承
  interface Animal {
    name: string
  }
  interface Cat extends Animal {
    age: number
  }
  let c1: Cat = {
    age: 11,
    name: '小橘猫',
  }

  //接口重名
  interface Dog1 {
    name: string
  }
  interface Dog1 {
    age: number
    sayHi(): void
  }
  let d1: Dog1 = {
    name: '小狗',
    age: 11,
    sayHi() {},
  }
}
