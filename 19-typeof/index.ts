namespace B19 {
  //typeof 获取类型

  //获取对象类型
  let person = {
    name: '小橘猫',
    age: 11,
    hobs: ['唱歌', '跳舞'],
    address: {
      province: '四川',
      center: '成都市',
    },
  }

  type Person = typeof person
  /* 
    type Person = {
        name: string;
        age: number;
        hobs: string[];
        address: {
            province: string;
            center: string;
        };
    }
  */

  type Address = typeof person['address']
  /* 
    type Address = {
        province: string;
        center: string;
    }
  */

  //获取函数类型
  function add(num1: number, num2: number): number {
    return num1 + num2
  }

  type Fn = typeof add
  /* 
    type Fn = (num1: number, num2: number) => number
  */

  //获取数组类型
  let arr = [1, 2, 3, 4]
  type T0 = typeof arr
  //type T0 = number[]

  //枚举
  enum Sex {
    MAN,
    WOMAN,
  }

  type T1 = typeof Sex
  let t1: T1 = {
    MAN: Sex.MAN,
    WOMAN: Sex.WOMAN,
  }
  type T2 = keyof typeof Sex //"MAN" | "WOMAN"

  //const 断言
  let str1 = 'abcd'
  const str2 = 'abcd'

  type T3 = typeof str1 //string
  type T4 = typeof str2 //"abcd"
}
