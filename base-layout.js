import { LitElement, html } from '@polymer/lit-element';
import './nav-menu';
import './content-area';
import './home-page';
import './about-page';
import './contact-page';

class BaseLayout extends LitElement {
    constructor() {
        super();
        this.changeState = this.changeState.bind(this)
        this.state = {
            page: html`<home-page></home-page>`
        }
    }

    static get properties() {
        return {
            state: {
                type: Object
            }
        };
    }

    changeState(update) {
        console.log('changeState called')
        let newState = Object.assign({}, this.state, update)
        console.log({newState})
        this.state = newState
    }

    render() {
        return html`
            <div>
                <div>
                    <nav-menu .state=${this.state} .changeState=${this.changeState}></nav-menu>
                    <content-area>
                        <div slot="page-content">${this.state.page}</div>
                    </content-area>
                </div>
            </div>`;
    }
}

customElements.define('base-layout', BaseLayout);