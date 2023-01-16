/*
 * @Author: Soporior
 * @Date: 2021-12-08 15:08:19
 * @LastEditors: Soporior
 * @LastEditTime: 2022-05-05 13:43:29
 * @FilePath: \ts\类型注释和类型推断.ts
 */
//类型注释和类型推断
//在写 TypeScript 代码的一个重要宗旨就是每个变量，
//每个对象的属性类型都应该是固定的，如果你推断就让它推断，
//推断不出来的时候你要进行注释。




let couter:number
couter = 16
//上面这串代码就是类型注释,我们的count变量就是一个数字类型，这就叫做类型注解


  function getTotal(one: number, two: number) {
    return one + two;
  }
  
  const total = getTotal(1, 2);
  //上面的total并没注释类型  但是TypeScript 就可以自动通过类型推断，
  //分析出变量的类型,推断不出来的时候你要进行注释。

  function getTotall(one: number, two: number):number {
    return one + two;
  }
  
  const totall = getTotall(1, 2);
//像这样给函数得返回值设定类型注释就高明得多 有点C语言得味儿了

