export class Hero {

  //TypeScript 编译器为每个 public 构造函数参数生成一个公共字段，在创建新的英雄实例时，自动把参数值赋给这些公共字段。
    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
  
  }