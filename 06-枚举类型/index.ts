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
