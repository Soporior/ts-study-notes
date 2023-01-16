// tsconfig自己去看文档

// 联合类型和类型保护
// 联合类型：一个变量的类型有两个或者以上
interface Student {
    man:boolean
    say:()=>{
       
    }
}
interface Teacher {
    man:boolean
    skill:()=>{
      

    }
}

function toSchool(person:Student | Teacher){
    if(person.man)
     (person as Student).say() ;
}
//类型保护——类型断言

function judgeWho(animal: Student | Teacher) {
    if (animal.man) {
      (animal as Teacher).skill();
    }else{
    //typescript会自动推算可能性⭐ 
      (animal as Student).say();
    }
  }
  //类型保护 - in 语法
  function judgeWhoTwo(animal: Student | Teacher) {
    if ("skill" in animal) {
      animal.skill();
    } else {
    //typescript会自动推算可能性⭐ 
      animal.say();
    }
  }
//类型保护  typeof语法
function  add(first:string|number,second:string|number){
    //试试把 || 改成 &&
    //typescript会自动推算可能性⭐ 
    if(typeof first==='string' || typeof second === 'string'){
        return `${first}${second}`
    }
    return first+second
}
// 类型保护  instanceof
class protectedObj{
    count:number
}

// function addObj(first:object|protectedObj,second:object|protectedObj){
//     return first.count + second.count
// }  这里会报错 因为有歧义  不知参数是普通对象还是定义的类
//  下方代码使用 instanceof来保护类型

function addObj(first:object|protectedObj,second:object|protectedObj){
    if(first instanceof protectedObj && second instanceof protectedObj){
        // 由于上方的判断 在编码时就已经有count字符的提示
        
        return first.count + second.count
    }
    return 0
}
//另外instanceof只能用在类上