import { html, LitElement, customElement, property, css } from 'lit-element';

@customElement('label-element')
export default class LabelElement extends LitElement {

  static get styles() {
    return css`
    h1 {
      font-family: sans-serif;
      color: green;
    }
    h3 {
      font-family: serif;
      color: red;
    }
    `
  }

  @property({ type: String })
  name = 'World';

  render() {
    return html`<h1>Hello Tereza ${this.name}</h1> <h3>component styles conflicting with parent</h3>`
  }
}