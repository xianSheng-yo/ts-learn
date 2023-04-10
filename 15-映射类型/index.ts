namespace B15 {
  //映射类型 循环key 得到所需的类型
  //   let obj = {
  //     name: '小橘猫',
  //     age: 11,
  //   }
  //   for (let key in obj) {
  //     console.log('key', key)
  //   }
  /* 
    {[P in K]:T}  拷贝属性
    {[P in K]?:T} 所有属性加?
    {[P in K]-?:T} 所有属性去掉?
    {readonly [P in K]:T} 只读属性
    {-readonly [P in K]:T} 去除只读属性

  */

  type Person = {
    readonly name: string
    age?: number
    sex: boolean
  }

  type T0 = {
    [P in keyof Person]: Person[P]
  }
  /* 
    type T0 = {
        readonly name: string
        age?: number
        sex: boolean
    }
  */
  type T1 = {
    [P in keyof Person]?: Person[P]
  }

  type T2 = {
    -readonly [P in keyof Person]: Person[P]
  }

  //拷贝
  type Copy<T> = {
    [P in keyof T]: T[P]
  }

  type T3 = Copy<Person>

}
