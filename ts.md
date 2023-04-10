# TS

## 概念

TypeScript是由***\*微软\****开发的一门编程语言，它实际上是JS语言的一种***\*扩展（JS的超集）\****，扩展了更多大语言（面向对象语言）所特有的语法(更严谨)。

### 作用

***\*TS支持所有ES语法，\****所以任何现有的JavaScript程序可以不加改变的在TypeScript下工作。TypeScript是为***\*大型应用\****之开发而设计，而编译时它产生 JavaScript 以确保兼容性、

### 强类型语言与弱类型语言

- 强类型语言

    强类型语言是一种强制类型定义的语言，一旦某一个变量被定义类型，如果不经过强制转换，则它永远就是该数据类型了，强类型语言包括Java、.net 、Python、C++等语言。

- 弱类型语言

 弱类型语言是一种弱类型定义的语言，某一个变量被定义类型，该变量可以根据环境变化自动进行转换，不需要经过显性强制转换。弱类型语言包括vb 、PHP、javascript等语言。

## 安装与编译

```js
#安装typescript
npm i typescript -g

#安装ts-node测试编译运行ts
npm i ts-node -g

#run插件安装 直接运行ts文件
安装插件 code Runer   
安装完毕可以 vscode 右上角点击三角形直接运行ts


#初始化
tsc --init

#编译单个
tsc index.ts

#根据配置文件编辑
tsc
```

## 编译配置项

- tsconfig.json

```js
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5" /* target用于指定编译之后的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    "module": "commonjs" /* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "lib": ["es6", "dom"] /* lib用于指定要包含在编译中的库文件 */,
    "allowJs": true,                       /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */
    "checkJs": true,                       /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */
    "jsx": "preserve",                     /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                   /* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true */
    "declarationMap": true,                /* 值为true或false，指定是否为声明文件.d.ts生成map文件 */
    "sourceMap": true,                     /* sourceMap的值为true或false，用来指定编译时是否生成.map文件 */
    "outFile": "./",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
    "outDir": "./",                        /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
    "rootDir": "./",                       /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
    "composite": true,                     /* 是否编译构建引用项目  */
    "incremental": true,                   /* 是否启用增量编译*/
    "tsBuildInfoFile": "./",               /* 指定文件用来存储增量编译信息 */
    "removeComments": true,                /* removeComments的值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */
    "noEmit": true,                        /* 不生成编译文件，这个一般比较少用 */
    "importHelpers": true,                 /* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false */
    "downlevelIteration": true,            /* 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持 */
    "isolatedModules": true,               /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定 */

    /* Strict Type-Checking Options */
    "strict": true /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */,
    "noImplicitAny": true,                 /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。默认值为false */
    "strictNullChecks": true,              /* strictNullChecks为true时，null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。还有个例外就是undefined可以赋值给void类型 */
    "strictFunctionTypes": true,           /* strictFunctionTypes的值为true或false，用于指定是否使用函数参数双向协变检查 */
    "strictBindCallApply": true,           /* 设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */
    "strictPropertyInitialization": true,  /* 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks，默认为false */
   "noImplicitThis": true,                /* 当this表达式的值为any类型的时候，生成一个错误 */
    "alwaysStrict": true,                  /* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式 */

    /* Additional Checks */
    "noUnusedLocals": true,                /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false */
    "noUnusedParameters": true,            /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查，默认为false */
    "noImplicitReturns": true,             /* 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */
    "noFallthroughCasesInSwitch": true,    /* 用于检查switch中是否有case没有使用break跳出switch，默认为false */

    /* Module Resolution Options */
    "moduleResolution": "node",            /* 用于选择模块解析策略，有'node'和'classic'两种类型' */
    "baseUrl": "./",                       /* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */
    "paths": {},                           /* 用于设置模块名称到基于baseUrl的路径映射 */
    "rootDirs": [],                        /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */
    "typeRoots": [],                       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
    "types": [],                           /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
    "allowSyntheticDefaultImports": true,  /* 用来指定允许从没有默认导出的模块中默认导入 */
    "esModuleInterop": true /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */,
    "preserveSymlinks": true,              /* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */

    /* Source Map Options */
    "sourceRoot": "",                      /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */
    "mapRoot": "",                         /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */
    "inlineSourceMap": true,               /* 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部 */
    "inlineSources": true,                 /* 用于指定是否进一步将.ts文件的内容也包含到输入文件中 */

    /* Experimental Options */
    "experimentalDecorators": true /* 用于指定是否启用实验性的装饰器特性 */
    "emitDecoratorMetadata": true,         /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
  }
  "files": [], // files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件，如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用* ? **/ 等通配符
  "include": [],  // include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
  "exclude": [],  // exclude表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符
  "extends": "",   // extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件
  "compileOnSave": true,  // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
  "references": [],  // 一个对象数组，指定要引用的项目
}
```

## 基础类型

JavaScript 的类型分为两种：原始数据类型（[Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 ES6 中的新类型 [`Symbol`](http://es6.ruanyifeng.com/#docs/symbol) 和 ES10 中的新类型 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

| 类型        | 约束               | 示例                                                  |
| ----------- | ------------------ | ----------------------------------------------------- |
| 字符串      | string             | let str:string = '你好啊'                             |
| 数字        | number             | let num:number = 12                                   |
| undefined   | undefined          | let u:undefined = undefined                           |
| null        | null               | let n:null = null                                     |
| any任何类型 | any                | let a:any = 1 ; a ='12'                               |
| unknown     | unknown            | let un:unknown = '哈哈'  ; un = 2                     |
| never       | never              | `never` 类型一般用来指定那些总是会抛出异常、无限循环  |
| symbol      | symbol             | let s:symbol = Symbol(20)                             |
| tuple元祖   | 约束数组个数和类型 | let arr:[string,number] =['a',1                       |
| 联合类型    | 其中一种类型       | let s:number\|string = 1                              |
| void        | 表示函数没有返回值 | function hello(): void {     alert("Hello Runoob"); } |
| object      | 对象类型           | let obj:object;                                       |

## 任意类型any & unknown

- any任意类型 any可以赋值给任意类型 也可以被任意类型赋值
- unknow类型 也可以被任意类型赋值 不能赋值给除了unknown和any的任意类型

```js
namespace B2 {
  //any任意类型 any可以赋值给任意类型 也可以被任意类型赋值
  let a1: any = 20
  a1 = 'abcd'
  a1 = true
  a1 = undefined

  let num1: number = 20
  let str1: string = ''
  num1 = a1
  str1 = a1

  //unknow类型 也可以被任意类型赋值 不能赋值给除了unknown和any的任意类型
  let un1: unknown
  un1 = 'abcd'
  un1 = true
  un1 = undefined

  //let str2: number = un1
  //unknown”分配给类型“string”

  let un2: unknown
  un2 = un1
  a1 = un2
  un2 = a1
}
```

## void&never

- void类型 表示函数没有返回值
- never类型 没有终结

```js
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
```

## 数组类型约束

```js
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
```

## 枚举Enum

枚举是一个被命名的整型常数的集合，用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型

通俗来说，**枚举就是一个对象的所有可能取值的集合**。 例如：性别只有男女 星期只有7天 前后左右方向

- 数字枚举 
- 字符串枚举
- 常量枚举
- 异构枚举

```js
namespace B6 {
  //枚举类型  对象所有取值可能性集合

  //数字枚举
  enum Direction {
    TOP,
    LEFT,
    RIGHT,
    BOTTOM,
  }

  let d1: Direction = Direction.TOP //0
  //可以通过值获取属性名
  console.log(Direction[0]) //'TOP'

  //设置默认值 只能通过属性获取值
  enum Sex {
    MAN, //0
    WOMAN = 4,
    MIDDLE, //5
  }

  //字符串枚举
  enum Person {
    HEAD = 'HEAD',
    HAND = 'HAND',
    FOOT = 'FOOT',
  }

  //常量枚举 不会编译枚举类型 直接获取值
  const enum ANIMAL {
    CAT,
    DOG,
    FISH,
  }

  const a1: ANIMAL = ANIMAL.CAT //0

  //异构枚举 混合字符串枚举和数字枚举
  enum STR {
    A = 'A',
    B = 3,
    C = 6,
    D = 'D',
    E = 'D',
  }

  console.log(STR[3]) //B
}
```



## 类型推论 & 类型断言

- 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
- 类型断言：计算机没法确定的类型，人为可以指定其类型，且人作为此类型的负责人
  - as 断言
  - <>断言
  - !非空断言
  - as unknown as 类型 强行断言
  - const 断言

```js
namespace B7 {
  //类型推论 计算机根据变量初始值类型 推论出其约束类型
  let str = 'abcd'

  //类型断言 人为断定值的类型

  //语法1 值 as 类型
  let el1 = document.querySelector('.box') as any
  //语法2 <类型>值
  let el2 = <any>document.querySelector('.box')

  //语法3 非空断言 值!
  function fn(a: string, b?: string) {
    //断言参数b 必传
    console.log(b!.length)
  }
  fn('a')

  //语法4 const断言
  let num1 = 20 as const
  //num1 = 30
  let person = {
    name: '小橘猫',
    age: 11,
  } as const
  //person.name = '哈哈' //对象属性只读
  let arr1 = <const>[1, 2, 3]
  let arr2 = [1, 2, 3] as const
  //arr1[0] = 222 //数组只读 不可修改

  //语法5 强制性断言
  let a = 20 as unknown as string
}
```

## 对象的类型——接口

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

- 可选属性
- 只读属性
- 字符串索引签名 【约束额外属性】
- 接口extends 继承
- 接口同名合并

```js
namespace B8 {
  //接口 约束对象
  interface Person1 {
    name: string
    age: number
  }

  let p1: Person1 = {
    name: '小橘猫',
    age: 11,
  }

  //可选参数
  interface Person2 {
    name: string
    age?: number
  }
  let p2: Person2 = {
    name: '小橘猫',
    // age: 11,
  }

  //只读属性
  interface Person3 {
    readonly name: string
    age: number
  }
  let p3: Person3 = {
    name: '小橘猫',
    age: 11,
  }
  //p3.name = '小黑猫'

  //额外属性
  interface Person4 {
    name: string
    age: number
    [prop: string]: any
  }
  let p4: Person4 = {
    name: '小橘猫',
    age: 11,
    sex: '女',
    hobs: ['唱歌'],
  }

  //接口继承
  interface Animal {
    name: string
  }
  interface Cat extends Animal {
    age: number
  }
  let c1: Cat = {
    age: 11,
    name: '小橘猫',
  }

  //接口重名
  interface Dog1 {
    name: string
  }
  interface Dog1 {
    age: number
    sayHi(): void
  }
  let d1: Dog1 = {
    name: '小狗',
    age: 11,
    sayHi() {},
  }
}
```

## 函数约束

- 约束参数
- 约束返回值
- 剩余参数
- 函数重载
  - 重载签名
  - 实现签名

```js
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

```

## 类型别名Type

给类型 起一个别名 以type开头

- 基本类型 
- 数组
- 元祖类型
- 函数类型
- 联合类型

```js
namespace B10 {
  //类型别名 给类型起个名字
  //基本类型
  type T0 = string
  let a1: T0 = 'abcd'

  //元组类型
  type T1 = [string, number]
  let a2: T1 = ['a', 1]

  //数组类型
  type T2 = string[]

  //约束对象
  type T3 = {
    name: string
    age: number
  }
  let p1: T3 = {
    name: '小橘猫',
    age: 11,
  }

  //约束函数
  type T4 = (a: string, b: number) => number
  const fn: T4 = (a: string, b: number) => {
    return b
  }

  //类型别名扩展
  type T5 = {
    name: string
  }

  type T6 = T5 & {
    age: number
  }
  let a3: T6 = {
    name: '小橘猫',
    age: 11,
  }

  //联合类型
  type T7 = string | number
  let a4: T7 = ''
  a4 = 20
}
```

## class类

- 修饰符
  - 公共属性 public
  - 私有属性 private
  - 静态属性 static
  - 保护属性 protected
- 构造函数
- 方法
- 函数继承
- 函数实现接口

```js
namespace B11 {
  //class类
  class Cat {
    name: string

    //构造器
    constructor(name: string) {
      this.name = name
    }

    //方法
    sayHi() {
      console.log('hi')
    }
  }

  //   let c1: Cat = new Cat('小橘猫')
  //   c1.sayHi()
  //   console.log(c1.name)

  //类的继承 extends 继承父类的属性和方法
  class Animal {
    name: string
    sayHi() {
      console.log('hi')
    }
    constructor(name: string) {
      this.name = name
    }
  }

  class Dog extends Animal {
    age: string
    constructor(name: string, age: string) {
      //super 必须写在第一行
      super(name)
      this.age = age
    }
  }
  let d1: Dog = new Dog('小狗', '11')
  //console.log(d1)

  //修饰符
  class Man {
    //public 公共属性
    public name: string = '男人'

    //private 私有属性
    private age: number = 11

    sayHi() {
      //在Class内才能访问私有属性
      console.log(this.age)
    }

    //静态属性  只有类本身才能访问静态属性
    static sex: string = '女'

    // num: number
    constructor(public num: number) {
      this.num = num
    }
  }
  let m1 = new Man(10)
  m1.name = '女人'
  //外面实例不能访问私有属性

  //抽象类 抽象类无法被实例 只能被其他类继承
  abstract class Woman {
    sayHi() {}
  }
  //const w1 = new Woman()
  class Person extends Woman {}
  const p1 = new Person()
  p1.sayHi()

  //接口&类
  interface I1 {
    name: string
    sayHi(): void
  }
  interface I2 {
    age: number
  }
  class C1 implements I1, I2 {
    name: string = '小橘猫'
    age: number = 11
    sayHi(): void {}
  }

  //函数重载 & 类
  class C2 {
    //重载签名
    fn(): void
    fn(): number
    //实现签名
    fn() {
      return 10
    }
  }
}

```

##  泛型约束Generics

泛型允许我们在强类型程序设计语言中编写代码时使用一些以后才指定的类型，在实例化时作为参数指明这些类型 在`typescript`中，**定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性** 

- 语法 <类型>

- 使用泛型约束 字母意义
  -   T(Type 类型)
  -   V(Value) 值
  -   K(Key) 键名
  -   E(Element) 元素

```js
namespace B12 {
  //泛型约束 参数类型占位 使用时候确定类型

  //函数泛型
  function fn1<T>(a: T): T {
    return a
  }
  //调用函数传入类型约束
  fn1<string>('abc')
  //使用类型推论 推断出T的类型
  fn1(20)

  /* 
    T(type) 类型
    K(key) 键名
    V(value) 值
    E(element) 元素
  */

  //接口泛型
  interface Person<T> {
    name: T
  }
  let p1: Person<string> = {
    name: '小橘猫',
  }

  //类型别名泛型
  type Cat<T> = T | number
  let c1: Cat<string> = 'abcd'
  c1 = 20

  //类的泛型
  class Dog<T> {
    name: T
    constructor(name: T) {
      this.name = name
    }
  }

  let d1: Dog<string> = new Dog('小狗')
  let d2 = new Dog('小狗')
  let d3 = new Dog(999)
}
```

## 联合类型&交叉类型

- 联合类型 取交集【满足A 或者 满足B】
- 交叉类型 取并集【满足A 并且 满足B】

```js
namespace B13 {
  //联合类型 取并集
  type T0 = number | string
  type T1 = number | boolean
  type T2 = T0 | T1 //string | number | boolean

  //交叉类型 取交集
  type T3 = T0 & T1 //number
  interface A {
    name: string
  }

  //接口 交叉类型
  interface B {
    age: number
  }

  type C = A & B
  let c1: C = {
    name: '小橘猫',
    age: 11,
  }

  type D = {
    name: string
  }

  //类型别名 交叉类型
  type E = D & {
    age: number
  }

  let e1: E = {
    name: '小橘猫',
    age: 11,
  }

  //类型别名 接口 交叉类型混用
  interface F {
    name: string
  }

  type G = {
    age: number
    sayHi(): void
  }

  type H = F & G
  let h1: H = {
    name: '小橘猫',
    age: 11,
    sayHi() {},
  }
}
```

## keyof 操作符

keyof操作符 获取键名的联合类型

```js
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
```

## 映射类型 

通过关键字 in 循环key 得到所需的类型

```js
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
```

## extends 关键字 继承&泛型约束

```js
namespace B16 {
  //extends
  //1 class类的继承
  class Animal {
    name: string = '小橘猫'
    sayHi() {
      console.log('hi')
    }
  }

  //子类继承父类的所有属性和方法
  class Cat extends Animal {}
  let c1: Cat = new Cat()

  //2 接口扩展
  interface A {
    name: string
    sayHi(): void
  }

  interface B extends A {
    age: number
  }

  let b1: B = {
    age: 11,
    name: '小橘猫',
    sayHi() {},
  }

  //3 泛型约束
  function fn1<T extends string | number>(a: T) {
    console.log('a', a)
  }
  function fn2<T extends 'get' | 'post'>(a: T) {
    console.log('a', a)
  }
  fn2('get')

  function fn3<T extends object>(a: T) {
    console.log('a', a)
  }
  fn3([])

  function fn4<T extends keyof {name: string}>(a: T) {
    console.log('a', a)
  }
  fn4('name')
}
```

## extends关键字 分配&条件类型

```js
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
```

## ts 内置工具类型

ts内置了非常多的工具类型 Partial Required Record Exclude Extract Omit .... 供程序员使用

```js
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

```

## typeof 关键字 获取实例类型

```js
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
```

## 装饰器

在java中叫注解， 把一个本身没什么功能的方法 装配一些功能 让它更加强大。

```js
namespace B20 {
  //装饰器 新增功能

  //类装饰器
  //装饰器函数
  let log1: ClassDecorator = target => {
    console.log(target)

    target.prototype.name = '小橘猫'
  }

  //装饰器传参
  let log2 = (age: number): ClassDecorator => {
    return target => {
      target.prototype.age = age
    }
  }

  @log1
  @log2(11)
  class Cat {}

  const c1: any = new Cat()
  //   console.log(c1.name) //小橘猫
  //   console.log(c1.age) //11

  //属性装饰器
  let log3: PropertyDecorator = (target, key) => {
    console.log('target', target)
    console.log('key', key)
  }
  class Dog {
    name: string = '斑点狗'
    @log3
    age: number = 11
  }

  //方法装饰器
  let log4: MethodDecorator = (...rest) => {
    console.log('rest', rest)
  }

  class Man {
    @log4
    sayHi(name: string, age: number) {}
  }

  //参数装饰器
  let log5: ParameterDecorator = (...args) => {
    console.log('args', args) //args [ {}, 'run', 1 ]
  }

  class Woman {
    run(name: string, @log5 age: number) {}
  }
}
```

## declare 声明文件

- 概念

```js
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
/// <reference /> 三斜线指令

如果安装的依赖没自带声明文件 可以安装其自己的@types 声明文件
@types 统一管理第三方库的声明文件 能被自动解析
```
- index.ts

  ```js
  //引入自己的声明文件 声明的类型
  import {DDog, MyT2} from './test2'
  
  //引入第三方库
  import axios, {AAA} from 'axios'
  import * as _ from 'lodash'
  
  namespace B21 {
    //声明文件 xx.d.ts 作用:声明类型  不做实现
    //全局变量
    num1 = 20
    num2 = 30
    str1 = '你好啊'
    //全局类
    let a1 = new Abc()
    //全局方法
    fnx()
    //全局接口
    let p1: MyPerson = {
      name: '小橘猫',
      age: 11,
    }
    //全局类型别名
    let t1: MyT = 'abc'
  
    //声明文件export import 必须导出
    let d: DDog = {
      name: '小狗',
      age: 2,
    }
  
    let t2: MyT2 = {
      sex: true,
    }
  
    //lib.es5.d.ts 全局声明文件 声明js内置的东西
    //let num: number = Infinity
    //parseInt('10')
  
    //第三方库axios使用
    const instance = axios.create({
      baseURL: '/xx',
      timeout: 10000,
      isUpload: true,
    })
  
    let a12: AAA = {
      name: 'aaa',
    }
  
    //第三方库 并未有声明文件/ 安装@types/库 or 自己写声明文件 xx.d.ts
    _.cloneDeep({name: '小橘猫'})
  }
  ```

- test1.d.ts

  ```js
  //声明文件
  
  //声明全局变量
  declare var num1: number
  declare let num2: number
  declare let str1: string
  
  //声明全局类
  declare class Abc {}
  
  //声明全局函数
  declare function fnx() {}
  
  //声明全局接口
  interface MyPerson {
    name: string
    age: number
  }
  
  //全局类型别名
  type MyT = string | number
  
  ```

- test2.d.ts

  ```js
  //声明文件 用有 export import 必须导出类型才能给其他ts文件使用
  
  //导入axios
  import axios from 'axios'
  
  export {}
  // import x from './test1'
  
  export interface DDog {
    name: string
    age: number
  }
  
  export type MyT2 = {
    sex: boolean
  }
  
  //扩展axios模块
  declare module 'axios' {
    interface AAA {
      name: string
    }
  
    interface AxiosRequestConfig {
      isUpload?: boolean
    }
  }
  ```

## 类型保护

在条件判断中 可以用in typeof instanceof is等方式收窄其类型 

```js
namespace B22 {
  //类型保护 在判断中把类型 收窄为实际类型

  // in 判断属性 是否在对象中
  interface Cat {
    name: string
    jump: boolean
  }

  interface Dog {
    name: string
    bark: string
  }

  type Animal = Cat | Dog
  function getAnimal(o: Animal) {
    if ('bark' in o) {
      return o.name
    } else {
      return o.jump
    }
  }

  //typeof 收窄基本类型
  function fn1(a: string | number): number {
    if (typeof a === 'string') {
      return a.length
    } else {
      return a * 2
    }
  }

  //instanceof 收窄引用类型
  class Person {
    name: string = '人'
  }

  const p1 = new Person()

  if (p1 instanceof Person) {
    console.log(true) //true
  }

  //is 收窄指定类型
  function isStr(str: unknown): str is string {
    return typeof str === 'string'
  }

  function getLength(o: unknown) {
    if (isStr(o)) {
      return o.length
    }
  }
}
```

## infer关键字

infer 通过占位 返回推断占位的类型

```js
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

```



