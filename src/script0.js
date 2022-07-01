const obj = {
  get prop() {
    console.log('get prop');
    // 
  },
  set prop(value) {
    console.log('set prop');
    // 
  },
};

const user = {
  name: 'John',
  lastName: 'Smith',

  fullname: '....',

  get fullname() {
    return `${this.name} ${this.lastName}`
  },
  set fullname(value) {
    [this.name, this.lastName] = value.split(' ');
  },
};

const uuu = {
  name: 'Sarah',

  getName() {
    return this.name;
  },

  setName(value) {
    this.name = value;
  },
};
