const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b(); // when we execute this then we have this instance.
c(); // here we don't have that. 


