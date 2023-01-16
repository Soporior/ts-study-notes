// 一般数组的定义
const simpleArr:number[] = [1,5,5,87]
const stringArr:string[] = ['asdasd','tow','xixi']
const hybirdArr:(string | number)[]=[12121,'asdasd']
//对象数组的定义
const objectArr : {name:string,age:number}[] = [{name:'soporior',age:23}]
//这样定义对象数组有点麻烦，为了增加代码的可读性 可以使用type 或者 class来帮助定义

// type 
type boy = {
    feed:string,
    loveCode:number
}
const soporArr:boy[] =[{feed:'iceCream',loveCode:0826},{feed:'lemonSoda',loveCode:1029}] 

//class
class gogo{
    name:string
    age:number
}
const gogos :gogo[]=[{name:'soporior',age:18},{name:'liugege',age:23}] 