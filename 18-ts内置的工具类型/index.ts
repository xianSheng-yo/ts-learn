namespace B18 {
  //ts 内置的工具类型
  //Partial 给所有属性加?
  interface Person {
    name: string
    age?: number
    sex: boolean
  }

  type T0 = Partial<Person>
  type MyPartial<T> = {
    [P in keyof T]?: T[P]
  }
  type T1 = MyPartial<Person>
  /* 
    type T1 = {
        name?: string 
        age?: number 
        sex?: boolean 
    }
  */

  //Required 去除?
  type T2 = Required<Person>
  /* 
    type T2 = {
        name: string;
        age: number;
        sex: boolean;
    }
  */

  //Pick 获取属性得到新的类型
  type T3 = Pick<Person, 'age' | 'name'>
  /* 
    type T3 = {
        age?: number | undefined;
        name: string;
    }
  */
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }
  type T4 = MyPick<Person, 'age' | 'name'>
  /* 
    type T4 = {
        age?: number | undefined;
        name: string;
    }
  */

  //Record 传入键值对生成类型
  type T5 = Record<'name' | 'age', string | number>
  /* 
    type T5 = {
        age: string | number;
        name: string | number;
    }
  */
  type MyRecord<K extends keyof any, T> = {
    [P in K]: T
  }
  type T6 = MyRecord<'name' | 'age', string>
  /* 
    type T6 = {
        age: string;
        name: string;
    }
  */

  //Exclude 不包含
  type T7 = Exclude<string | number, string> //number
  type MyExClude<T, U> = T extends U ? never : T
  type T8 = MyExClude<string | number, string> //number

  //Extract 包含
  type T9 = Extract<string | number, string> // string
  type MyExtract<T, U> = T extends U ? T : never
  type T10 = MyExtract<string | number, string> //string

  //Omit 排除属性 取剩下的属性
  type T11 = Omit<Person, 'name'>
  /* 
    type T11 = {
       age?:number
       sex: boolean;
    }
  */

  type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
  type T12 = MyOmit<Person, 'name'>
  /* 
    type T12 = {
       age?:number
       sex: boolean;
    }
  */
}
