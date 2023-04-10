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
