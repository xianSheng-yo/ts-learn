namespace B4 {
  //object 可以约束引用类型(对象,数组,函数)
  let o1: object = {}
  let o2: object = []
  let o3: object = () => {}

  let str1: String = 'abcd' //字面量语法
  let str2: String = new String('abcd') //实例对象语法

  let num1: Number = 1234
  let num2: Number = new Number(1234)

  let b1: Boolean = true
  let b2: Boolean = new Boolean(true)

  //实例都可以被Object所约束
  let o4: Object = () => {}
  let o5: Object = []
  let o6: Object = {}
  let a1: Object = 1234
  let a2: Object = 'abcd'

  // let un1: Object = undefined
}
