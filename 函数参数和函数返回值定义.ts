/*
 * @Author: Soporior
 * @Date: 2021-12-08 15:19:25
 * @LastEditors: soporior
 * @LastEditTime: 2022-08-04 15:03:34
 * @FilePath: \stufyDemo\ts\函数参数和函数返回值定义.ts
 */

// 有些函数没有返回值 像c一样  设置void就行
function sayHello(): void {
  console.log('Hello')
}
//当一个函数执行不完（throw 或者 死循环）
function errorFunc(): never {
  throw new Error()
  console.log('heihei') //因为上面已经抛出errro，所以不会执行这句话
}
function forever(): never {
  while (true) {
    console.log('xixi')
  }
}
//当函数的参数是对象时
function getBoy({ one, two }: { one: string; two: number }): string {
  return one + two
}
