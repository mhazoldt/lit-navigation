import { LitElement, html } from '@polymer/lit-element';
import './base-layout'

class HomePage extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {};
    }

    render() {
        return html`
                <div>
                    Home
                </div>
                `;
    }
}

customElements.define('home-page', HomePage);