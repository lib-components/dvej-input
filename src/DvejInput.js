import { html, LitElement } from 'lit';
import { styles } from './inputstyles.js';

export class DvejInput extends LitElement {
  static get styles(){
    return styles;
  }

  static get properties(){
    return {
      metrica: {type:String},
      dato: {type:String}
    }
  };

  render() {
    return html`
      <div>
        <p id="metrica">${this.metrica}</p>
        <input type="number" name="nombre" value="87"/>
        <p>${this.dato}</p>
      </div>
      `;
  }

}
