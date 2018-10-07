import { LitElement, html } from '@polymer/lit-element';
import './base-layout'

class AboutPage extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {};
    }

    render() {
        return html`
                <div>
                    About
                </div>
                `;
    }
}

customElements.define('about-page', AboutPage);