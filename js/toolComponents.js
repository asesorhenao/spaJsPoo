// Se crea una función render que funciona como una especie de kernell que permita renderizar los objetos
function Render(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  if (node.tagName) {
    return node;
  }
  const element = document.createElement(node.type);
  if (node.props) {
    for (const prop in node.props) {
      if (typeof node.props[prop] === 'function' || typeof node.props[prop] === 'object') {
        element[prop] = node.props[prop];
      } else {
        element.setAttribute(prop, node.props[prop]);
      }
    }
  }
  if (node.children) {
    node.children.map(Render)
      .forEach(child => element.appendChild(child));
  }
  return element;
}

export {Render};