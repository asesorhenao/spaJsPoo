const Onload = async () => {
  const {Render} = await import('./js/toolComponents.js');
  const {MyContainer} = await import('./js/masterTemplate.js');
  const container = new MyContainer();
  myRoot.append(Render(container));
}
window.onload = Onload;