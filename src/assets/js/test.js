/***
 * created by wangxiao on 2018/01/10
 * */
let test = {
    init (name){
      this.name = name;
    },
    getName(){
      console.log(this.name);
      return this.name;
    }
}

let out = Object.create(test);
Object.assign(test);
out.getName = function (name) {
    this.init(name);
    this.getName();
}
out.getName('hehe');
