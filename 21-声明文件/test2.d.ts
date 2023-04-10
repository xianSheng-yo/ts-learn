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
