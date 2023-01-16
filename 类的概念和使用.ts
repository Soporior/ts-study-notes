/*
 * @Author: Soporior
 * @Date: 2021-12-09 09:36:06
 * @LastEditors: soporior
 * @LastEditTime: 2022-08-04 15:11:52
 * @FilePath: \stufyDemo\ts\类的概念和使用.ts
 */
// class类的使用
class gogoe {
  constructor(a: string, b: number, c: string) {
    this.content = a
    this.age = b
    this.name = c
  }
  name: string
  age: number
  content: string
  stopDancing() {
    this.age++
    console.log('so tried (the first)')
  }
}
//类的继承 和  super关键词的使用
class gogoInBar extends gogoe {
  startToDance() {
    console.log('start to dance')
  }
  stopDancing() {
    console.log('so tried (extends)')
  }
  fatherStop() {
    super.stopDancing()
  }
}
const sopop: gogoInBar = new gogoInBar('i am a gogo', 23, 'sopop')
console.log(sopop.content)
sopop.startToDance()
sopop.stopDancing()
sopop.fatherStop()
