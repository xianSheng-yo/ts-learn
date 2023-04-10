namespace B23 {
  //infer 通过占位 推断类型
  //必须在条件类型中使用  结果必须在正确判断中
  type T0<T> = T extends infer U ? U : never

  type T1 = T0<string> //string

  //获取数组元素类型
  type T2<T> = T extends (infer R)[] ? R : never
  type T3 = T2<number[]> //number

  //获取元组类型得到联合类型
  type T4 = T2<[string, number]> //string | number

  //获取函数返回值类型
  type TReturn<T extends Function> = T extends (...arg: any) => infer U ? U : never

  function fn(a: string, b: number): number {
    return 20
  }

  type T5 = TReturn<typeof fn> //number

  //获取参数类型
  type TParams<T extends (...arg: any) => any> = T extends (...arg: infer U) => any ? U : never
  type T6 = TParams<typeof fn> //[a: string, b: number]

  //获取实例类型
  class Cat {
    name: string = '小橘猫'
    sayHi() {}
  }

  type T7 = InstanceType<typeof Cat>
  let t0: T7 = {
    name: '小橘猫',
    sayHi() {},
  }
}
