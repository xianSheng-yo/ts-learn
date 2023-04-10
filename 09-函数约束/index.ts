namespace B9 {
  //函数约束 约束参数 约束返回值
  function add(num1: number, num2: number): number {
    return num1 + num2
  }

  //可选参数
  function fn1(a: string, b?: string): string {
    return a
  }
  fn1('a')
  fn1('a', 'b')

  //剩余参数
  function fn2(a: string = 'hello', ...args: number[]): number {
    return args.reduce((total, cur) => total + cur)
  }
  console.log(fn2('abc', 2, 3))

  //函数的接口约束
  interface Fn {
    (a: string): void
  }
  const fn3: Fn = a => {}

  //函数的重载
  //重载签名
  function fn4(a: string, b: string): string
  function fn4(a: number, b?: number): number
  //实现签名
  function fn4(a: any, b: any): any {
    if (typeof b === 'string') {
      return a
    } else {
      return a + b
    }
  }

  console.log(fn4('a', 'b')) //a
  console.log(fn4(1, 2)) //3
}
