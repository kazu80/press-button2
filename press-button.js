import {html, LitElement} from '@polymer/lit-element/lit-element';

/**
 * `press-button2`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PressButton extends LitElement {
    _render () {
        return html`
            <style>
                :host {
                    
                }
            </style>
            <h2>Hello [[prop1]]!</h2>
        `;
    }

    static get properties () {
        return {
            prop1: {
                type : String,
                value: 'press-button',
            },
        };
    }
}

window.customElements.define ('press-button', PressButton);
