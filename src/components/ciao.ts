import { html, LitElement, customElement, property, css } from 'lit-element';

@customElement('ciao-element')
export default class CiaoElement extends LitElement {

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
  name = 'wtf';

  render() {
    return html`<h1>Ciao ${this.name}</h1> <h3>component styles conflicting with parent</h3>`
  }
}