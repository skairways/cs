class Foo {
  bar = 1;

  bla = () => console.log(this.bar);

  baz = function () { console.log(this.bar); };
}

new Foo().bla(); // ?
new Foo().baz(); // ?

// В обоих случаех будет лог 1, так как при вызове свойств this будет ссылатся на объект слева от точки.