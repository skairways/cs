interface ElementProps {
  name: string;
  text: string;
}

interface Render {
  render(elemProps: ElementProps): HTMLElement;
}

class Render {
  static render(elemProps) {
    const element = document.createElement(elemProps.name);
    element.innerHTML = elemProps.text;
    return element;
  }
}

class Widget {
  protected root = document;
  protected renderEngine: Render = Render;
  protected elemProps: ElementProps;
  protected element: HTMLElement;

  constructor(elemProps) {
    this.elemProps = elemProps;
  }

  render() {
    this.element = this.renderEngine.render(this.elemProps);
  }

  mount() {
    document.body.appendChild(this.element);
  }
}

const buttonProps: ElementProps = {
  name: "button",
  text: "my-btn",
};

const btn = new Widget(buttonProps);
btn.render();
btn.mount();
