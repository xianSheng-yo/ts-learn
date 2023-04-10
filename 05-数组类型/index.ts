namespace B5 {
  //数组类型约束

  //方式1
  let arr1: number[] = [1, 2, 3]
  //方式2
  let arr2: Array<number> = [1, 2, 3]

  let arr3: Array<string> = ['a', 'b', 'c']
  let arr4: string[] = ['a', 'b', 'c']

  //元组约束 数组元素的长度和类型
  let arr5: [number, string] = [1, 'a']

  let arr6: Array<any> = [1, true, 'sd', 1]

  //二维数组约束
  let arr7: number[][] = [[1], [2], [3]]
  let arr8: Array<Array<number>> = [[1], [2], [3]]
}
