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
