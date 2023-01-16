/*
 * @Author: soporior
 * @Date: 2021-12-20 11:27:20
 * @LastEditors: soporior
 * @LastEditTime: 2022-08-04 15:01:41
 * @FilePath: \stufyDemo\ts\泛型.ts
 */
// 泛型  功能：让函数的使用者可以定义参数的类型
function printfSomeWords<T, P>(firstWord: T, secondWord: P) {
  return `${firstWord}${secondWord}`
}
console.log(printfSomeWords<string, string>('woshi', 'nahaizi'))
console.log(printfSomeWords<string, number>('woyijing', 18))

// 泛型中数组的使用
// 两种写法

// first
function myGenericArrayOne<ANY>(params: ANY[]) {
  return params
}
// second
function myGenericArrayTwo<ANY>(params: Array<ANY>) {
  return params
}
myGenericArrayOne<string>(['sa', 'bi'])
myGenericArrayTwo<number>([1, 2, 3, 1])

// 类中的泛型
class myGogo {
  constructor(private gogos: string[]) {}
  getGogo(index: number): string {
    return this.gogos[index]
  }
}
const myGogos = new myGogo(['spopo', 'pososo', 'soposo'])
console.log(myGogos.getGogo(1))

//初始类的泛型
class myGenericGogo<T> {
  constructor(private gogos: T[]) {}
  getGogo(index: number): T {
    return this.gogos[index]
  }
}
// gogo编号对象
const genericGogoWithNumber = new myGenericGogo<number>([1, 2, 5, 6, 4])
const genericGogoWithStiring = new myGenericGogo<string>([
  'Alan',
  'lily',
  'soporior',
])
console.log(genericGogoWithNumber.getGogo(1))

// 大无语   泛型居然还可以继承
interface boyDancing {
  name: string
}
class selectGogo<T extends boyDancing> {
  constructor(private gogo: T[]) {}
  getDancingBoy(index: number) {
    return this.gogo[index].name
  }
}
const gogodance = new selectGogo<{ age?: number; name: string }>([
  { name: 'sopopo' },
])
console.log('the dancing boy is ' + gogodance.getDancingBoy(0))
// 我们回过头来看一下这段代码的意思，
// 就是我们在selectGogo类中使用了泛型，
// 意思是我不知道我以后要用什么类型，
// 但是我有一个约束条件，
// 这个类型，必须要有一个name属性。
// 这个在工作中经常使用

// 泛型约束
// 有点像上面的泛型继承
//泛型可以是任意类型
// 但如果想要这个泛型必须是string 或者 number类型
// 可以 ↓  进行约束
class selectGogoz<T extends number | string> {
  //.......
}
