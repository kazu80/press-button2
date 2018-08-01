import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `press-button2`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PressButton2 extends PolymerElement {
    static get template () {
        return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
    }

    static get properties () {
        return {
            prop1: {
                type : String,
                value: 'press-button2',
            },
        };
    }
}

window.customElements.define ('press-button2', PressButton2);
