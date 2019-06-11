class Animal {
  constructor(obj){
    this.color = obj.color || 'white';
    this.weight = obj.weight || 0;
    this.name = obj.name || 'animal';
  }
  showInfo(){
    console.log(`${this.name} is ${this.color}, and its weight is ${this.weight}kg`);
  }
}

class Cat extends Animal {
  constructor(obj){
    super(obj)
    this.name = 'cat'
  }
}

let cat = new Cat({color:'orange', weight: '12'});
cat.showInfo();