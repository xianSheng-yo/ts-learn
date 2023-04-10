namespace B3 {
  //void类型 函数没有返回值
  function fn(): void {}
  console.log(fn())

  const fn2 = (): void => {
    // return undefined
  }

  //never类型 没有终结
  function fn3(): never {
    throw new Error('抛出错误')
  }
}
