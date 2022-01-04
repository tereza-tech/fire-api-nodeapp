import '../components/bye';
import { customElement, LitElement, html, css } from 'lit-element';

@customElement('root-el2')
export class ByeElement extends LitElement {

  static get styles() {
    return css`
      h1 {
        font-family: serif;
        color: green;
      }
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        color: red;
      }
    `
  }

  render() {
    return html`
      <h3>Test drive database connection</h3>
      <bye-element name="World"></bye-element>
      <bye-element name="Bye"></bye-element>
    `
  }
}
 