namespace B17 {
  //extends 分配
  type T0 = string extends string | number ? 'x' : 'y' //x
  type T1 = 'x' | 'y' extends 'x' ? string : number // number

  interface A {
    name: string
  }

  interface B {
    name: string
    age: number
  }
  type T2 = B extends A ? 'x' : 'y' //x

  //extends 条件类型
  // T extends U ? X : Y
  type T3<T> = T extends 'x' ? string : number
  type T4 = T3<'x' | 'y'> // string | number
  /* 
    x extends x ? string : number //string
    y extends x ? string : number //number

    //获取两次分支判断结果的联合类型 string | number
  */

  type T5<T, U> = T extends U ? T : never

  type T6 = T5<'a' | 'b' | 'c', 'a' | 'b'> //"a" | "b"
  /* 
    a extends a | b ? a : never //a
    b extends a | b ? b : never //b
    c extends a | b ? c : never //never
    a | b 
  */
  type T7<T, U> = T extends U ? never : T
  type T8 = T7<'a' | 'b' | 'c', 'a' | 'b'> //c
}
