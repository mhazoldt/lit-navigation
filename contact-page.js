import { LitElement, html } from '@polymer/lit-element';
import './base-layout'

class ContactPage extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {};
    }

    render() {
        return html`
                <div>
                    Contact
                </div>
                `;
    }
}

customElements.define('contact-page', ContactPage);