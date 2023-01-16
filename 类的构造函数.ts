// 类的构造函数
class classTest {
  private name: string
  protected id: number
  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
  sayName() {
    return this.name
  }
  sayId() {
    return this.id
  }
}
//类中的属性在构造器中的建议写法
class classTest2 {
  constructor(public name: string, private id: number) {}
}
const simpleWayClass: classTest2 = new classTest2('spopo2', 456)
console.log('test2 name' + simpleWayClass.name)
// console.log(simpleWayClass.id)  私有属性无法读取
const person: classTest = new classTest('sopopo', 23)
// 使用实例对象的方法要在创建实例对象后使用  在这之前想使用可以通过类的显式原型链使用
console.log(classTest.prototype.sayId.call(simpleWayClass))

console.log(person.sayName())
console.log(person.sayId())

// 在子类中 构造函数必须在构造器中使用suoer（）调用父类的构造函数，
// 同时 父类构造函数需要传值时也要传输
class dadClass {
  constructor(public name: string, private id: number) {
    this.name = name
    this.id = id
  }
}
class sonClass extends dadClass {
  constructor(name: string, id: number, private _action: string) {
    super(name, id)
  }
  get action() {
    return 'anction is ' + this._action
  }
}
