import { LitElement, html } from '@polymer/lit-element';

class NavMenu extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            state: {
                type: Object
            }
        };
    }

    render() {
        return html`
            <div>
                <link rel="stylesheet" href="nav-menu.css">
                <div class="navBar">
                    <div class="navLink" @click="${(e) => console.log(this.changeState({page: html`<home-page></home-page>`}))}">Home</div>
                    <div class="navLink" @click="${(e) => console.log(this.changeState({page: html`<about-page></about-page>`}))}">About</div>
                    <div class="navLink" @click="${(e) => console.log(this.changeState({page: html`<contact-page></contact-page>`}))}">Contact</div>
                </div>
            </div>`;
    }
}

customElements.define('nav-menu', NavMenu);