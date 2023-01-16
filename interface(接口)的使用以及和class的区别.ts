/*
 * @Author: Soporior
 * @Date: 2021-12-08 16:51:47
 * @LastEditors: Soporior
 * @LastEditTime: 2022-05-05 16:25:00
 * @FilePath: \ts\interface(接口)的使用以及和class的区别.ts
 */
import { inflateRaw } from "zlib"

// interface 一个语法  和  类型别名相似
interface Computer {
    name: string,
    age: number,
    owner: string
}
const readComputer = (computer: Computer) => {
    console.log(`name:${computer.name}`)
    console.log(`age:${computer.age}`)
    console.log(`owner:${computer.owner}`)

}
readComputer({ name: 'Hp', age: 18, owner: 'soporior' })
//似乎和类型别名有点相似

// 不同点
// 类型别名可以直接给类型   type boy = string  type boy  = {name：sting}
// 而interface 必须是对象  interface boy{ name：string}


// 当接口的某些值为可选属性时  可以加 ？ 表示
interface alternativeValue {
    name: string,
    age?: number
}

//当接口 需要设置任意值时
interface anyValue {
    name: string
    age: number
    message: any //值任意
    [propname: string]: any; // 属性名为字符串，属性值为任意
}

// 接口也能存函数 比如  函数say（）返回值为字符串
interface sayInterface {
    name: string,
    say(): string
}

// 类和interface的约束
interface normalInterface {
    name: string,
    id: number,
    sayNormal(): string
}

class classFormInterface implements normalInterface {
    age = 26
    name = 'classInterFace'
    id = 16;
    sayNormal(): string {
        return 'dasd'
    }
}
interface extendNormalInterface extends normalInterface {
    sayExtend(): string
}
const testExtend = (x: extendNormalInterface) => {
    x.sayExtend()

}
const a: extendNormalInterface = {
    name: 'ad',
    id: 4564,

    sayExtend() {
        console.log('通过编译')
        return 'asdas'
    },
    sayNormal() {
        return 'llorona'
    }

}

testExtend(a)