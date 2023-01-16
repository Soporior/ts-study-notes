// 只读属性readnoly
class readOnlyClass{
    constructor(public readonly _name:string){

    }
   
}
const aread = new readOnlyClass('asd')
console.log(aread._name)
// aread._name='asdasd'//会提示为只读属性

// 抽象类的使用 abstract
// 当多个类有相似的属性 但实现方法不同时 可以使用抽象类作为父类
// 抽象类的抽象属性在子类中必须实现
abstract class GayBarPerson{
    abstract name:string
    abstract skill():void
    abstract lookFor:number

}
class GogoInGayBar extends GayBarPerson{
    constructor(public name:string,public lookFor:number){
      super()
    }
    skill() {
        console.log('I am a GoGo Dancer')
    }
}
class BartenderInGayBar extends GayBarPerson{
    constructor(public name:string,public lookFor:number){
        super()
      }
      skill() {
          console.log('I am a Bartender')
      }
}
class TopInGayBar extends GayBarPerson{
    constructor(public name:string,public lookFor:number){
        super()
      }
      skill() {
          console.log('我是1')
      }
}