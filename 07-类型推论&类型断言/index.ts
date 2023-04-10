namespace B7 {
  //类型推论 计算机根据变量初始值类型 推论出其约束类型
  let str = 'abcd'

  //类型断言 人为断定值的类型

  //语法1 值 as 类型
  let el1 = document.querySelector('.box') as any
  //语法2 <类型>值
  let el2 = <any>document.querySelector('.box')

  //语法3 非空断言 值!
  function fn(a: string, b?: string) {
    //断言参数b 必传
    console.log(b!.length)
  }
  fn('a')

  //语法4 const断言
  let num1 = 20 as const
  //num1 = 30
  let person = {
    name: '小橘猫',
    age: 11,
  } as const
  //person.name = '哈哈' //对象属性只读
  let arr1 = <const>[1, 2, 3]
  let arr2 = [1, 2, 3] as const
  //arr1[0] = 222 //数组只读 不可修改

  //语法5 强制性断言
  let a = 20 as unknown as string
}
