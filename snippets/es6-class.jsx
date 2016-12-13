class Color {
  constructor(name) {
    console.log('New color created', name);
    this.name = name;
  }

  about(){
    console.log(this.name);
  }
}

var c = new Color('blue');
c.about();
