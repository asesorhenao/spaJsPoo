class DomClass {
  constructor() {
  }
  navegando = () => {
    console.log('navegando');
  }
}

class MyContainer extends DomClass {
  constructor() {
    super();
    this.type = 'div';
    this.header =new MyHeader();
    this.nav =new MyNav();
    this.main =new MyMain();
    this.footer =new MyFooter();
    this.props = {class: 'container'};
    this.children = [
      this.header, this.nav, this.main, this.footer
    ];

  }
}
class MyHeader extends DomClass {
  constructor() {
    super();
    this.type = 'header';
    this.children = [
      'My Header'
    ];
  }
}
class MyNav extends DomClass {
  constructor() {
    super();
    this.type = 'nav';
    this.children = [
      {
        type: 'ul', 
        props: {class: 'MyNav'},
        children: [
          {type: 'li', props: {onclick: this.navegando}, children: ['Menu 1']},
          {type: 'li', props: {onclick: this.navegando}, children: ['Menu 2']},
          {type: 'li', props: {onclick: this.navegando}, children: ['Menu 3']}
        ]
      }
    ];
  }
}
class MyMain extends DomClass {
  constructor() {
    super();
    this.type = 'main';
  }
}
class MyFooter extends DomClass {
  constructor() {
    super();
    this.type = 'footer';
  }
}

export {MyContainer};