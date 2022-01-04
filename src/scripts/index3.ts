import '../components/ciao';
import { customElement, LitElement, html, css } from 'lit-element';

@customElement('root-el3')
export class CiaoElement extends LitElement {

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
      <h3>Test drive ciao parent component with "conflicting styles"</h3>
      <ciao-element name="World"></ciao-element>
      <ciao-element name="Bye"></ciao-element>
    `
  }
}
 