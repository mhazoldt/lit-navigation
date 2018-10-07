import { LitElement, html } from '@polymer/lit-element';

class ContentArea extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {};
    }

    render() {
        return html`
            <div>
                <slot name="page-content">page goes here</slot>
            </div>`;
    }
}

customElements.define('content-area', ContentArea);