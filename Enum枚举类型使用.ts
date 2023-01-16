/*
 * @Author: Soporior
 * @Date: 2021-12-17 16:36:20
 * @LastEditors: Soporior
 * @LastEditTime: 2023-01-06 17:37:11
 * @FilePath: \ts\Enum枚举类型使用.ts
 */
//Enum 枚举类型
// 有点想数组
// enum Status {
//     SAD = 1,
//     HAPPY = 3,
//     VOID
// }
enum Status {
  '一' = '1',
  '二' = '3',
  '三' = '4',
}
// console.log(Status.VOID)
// console.log(Status[3])
function emotional(input: string | number): string {
  if (typeof input === 'string') {
    return 'emotion code =' + Status[input]
  } else {
    return Status[input]
  }
}
// Status[1] = 'asd'
// console.log(emotional(1))
// console.log(emotional('HAPPY'))
console.log(Status['一'])
