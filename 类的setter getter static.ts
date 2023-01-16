/*
 * @Author: your name
 * @Date: 2021-12-09 14:46:52
 * @LastEditTime: 2021-12-20 16:57:43
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\类的setter getter static.ts
 */
//类中的getter 和 setter 属性   重点：这两个都是属性
//主要用来监视 读取和设置过程中来操作private 属性 
class Gogo {
    constructor(private _age:number , private _name:string){

    
    }
    get name(){
        return 'name is ' +this._name+' age is '+this._age
    }
    set age(age:number){
        this._age = age+10
    }
}
const aboy = new Gogo(23,'liu')
console.log(aboy.name) 
aboy.age = 23
console.log(aboy.name) 


// 静态类 static 只能通过类对象使用
class staticClass {
    static say()
    {
        console.log('say')
    }
}
staticClass.say();

