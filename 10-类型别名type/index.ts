namespace B10 {
  //类型别名 给类型起个名字
  //基本类型
  type T0 = string
  let a1: T0 = 'abcd'

  //元组类型
  type T1 = [string, number]
  let a2: T1 = ['a', 1]

  //数组类型
  type T2 = string[]

  //约束对象
  type T3 = {
    name: string
    age: number
  }
  let p1: T3 = {
    name: '小橘猫',
    age: 11,
  }

  //约束函数
  type T4 = (a: string, b: number) => number
  const fn: T4 = (a: string, b: number) => {
    return b
  }

  //类型别名扩展
  type T5 = {
    name: string
  }

  type T6 = T5 & {
    age: number
  }
  let a3: T6 = {
    name: '小橘猫',
    age: 11,
  }

  //联合类型
  type T7 = string | number
  let a4: T7 = ''
  a4 = 20
}
