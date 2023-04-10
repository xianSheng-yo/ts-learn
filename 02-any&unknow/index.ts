namespace B2 {
  //any任意类型 any可以赋值给任意类型 也可以被任意类型赋值
  let a1: any = 20
  a1 = 'abcd'
  a1 = true
  a1 = undefined

  let num1: number = 20
  let str1: string = ''
  num1 = a1
  str1 = a1

  //unknow类型 也可以被任意类型赋值 不能赋值给除了unknown和any的任意类型
  let un1: unknown
  un1 = 'abcd'
  un1 = true
  un1 = undefined

  //let str2: number = un1
  //unknown”分配给类型“string”

  let un2: unknown
  un2 = un1
  a1 = un2
  un2 = a1
}
