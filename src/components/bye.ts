import { html, LitElement, customElement, property, css } from 'lit-element';
import { GetCities } from '../api/fire';

@customElement('bye-element')
export default class ByeElement extends LitElement {

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

  city = GetCities();

  @property({ type: String })
  name = 'wtf';

  render() {
    return html`<h1>OHO Hello ${this.name}</h1> <h3>component styles conflicting with parent</h3>`
  }
}