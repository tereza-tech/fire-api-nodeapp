import '../components/heading';
import { customElement, LitElement, html, css } from 'lit-element';

@customElement('root-el')
export class HeadingElement extends LitElement {

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
      <h3>Firebase API app</h3>
      <label-element></label-element>
      <heading-element name="Bye"></heading-element>
    `
  }
}
 