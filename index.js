const Onload = async () => {
  const {Render} = await import('./js/toolComponents.js');
  let title = {
    type: 'h2',
    children: [
      'SPA'
    ]
  }
  let myH1 = {
    type: 'h1', 
    props: {id: 'myH1', class: 'MyH1Class', Objects: ['a1', 'a2']},
    children: [
      'Hola Mundo', title
    ]

  }
  myRoot.append(Render(myH1));
}
window.onload = Onload;