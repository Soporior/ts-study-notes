/*
 * @Author: Soporior
 * @Date: 2021-12-07 14:43:32
 * @LastEditors: Soporior
 * @LastEditTime: 2022-05-05 13:40:59
 * @FilePath: \ts\基础静态类型和对象类型.ts
 */

//比如下方的name age weight 就是基础静态类型 string number
 //null,undefinde,symbol,boolean，void这些都是最常用的基础数据类型
interface deer{
    name:string,
    age:number,
    weight:number
}
const banbi:deer={
    name:'banbi',
    age:15,
    weight:19
}
console.log(banbi.name)
//对象类型有一下几种形式
// 对象类型
// 数组类型
// 类类型
// 函数类型

//对象类型
const sopopo:{name:string,age:number}={name:'sopor',age:20}

//数组类型
const sopopos:String[]=['spopo1','sopopo2']
const sopors:{name:string,age:number}[]=[{name:'sopopo1',age:12},{name:'spopo2',age:20}]

//类类型
class Boy{
    x:string
    y:'asd'
}
const soporior:Boy = new Boy

//函数类型
//定义一个printf为一个函数  并且此函数的返回值是字符串
const printf:()=>string  =  ()=>{return '字符串'}
console.log(soporior.y)

