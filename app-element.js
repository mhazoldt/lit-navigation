import { LitElement, html } from '@polymer/lit-element';
import './base-layout'

class AppElement extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {};
    }

    render() {
        return html`
                <div>
                    <base-layout></base-layout>
                </div>
                `;
    }
}

customElements.define('app-element', AppElement);