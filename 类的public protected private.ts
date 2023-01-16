// 类比c++的 继承 和 内部数据权限的关系
// public  protected private
// 默认都是public  public的属性和函数 在类的内部和外部都能调用
// protected的属性和函数只能在类的内部和类的子类中使用
// private的属性和方法只能在类的内部才能访问
class permission{

    public name:string
    protected age:number
    private password:number
    constructor(){
        this.name='asd'
        this.age = 19
        this.password=123456
    }

}
class permissionExtend extends permission{
    private sayPassWord(){
        // super.password  //报错 表示无法访问该属性
        super.age
        super.name
    }
}
// permissionExtend.sayPassWord() //报错 表示不存在此方法