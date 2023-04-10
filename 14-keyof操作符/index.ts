namespace B14 {
  //keyof操作符 获取键名的联合类型
  type A = {
    name: string
    age: number
  }

  //   interface A {
  //     name: string
  //     age: number
  //   }

  //获取键名联合类型
  type T0 = keyof A // 'name' | 'age'

  //获取基本类型keyof
  type T1 = keyof string
  type T2 = keyof number
  type T3 = keyof any //string | number | symbol

  //获取对象的值
  function getObjProp<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
  }

  let obj1 = {
    name: '小橘猫',
    age: 11,
  }

  console.log(getObjProp(obj1, 'age'))
}
