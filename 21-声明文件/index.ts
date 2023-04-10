//引入自己的声明文件 声明的类型
import {DDog, MyT2} from './test2'

//引入第三方库
import axios, {AAA} from 'axios'
import * as _ from 'lodash'

namespace B21 {
  //声明文件 xx.d.ts 作用:声明类型  不做实现
  /* 
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
*/

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
