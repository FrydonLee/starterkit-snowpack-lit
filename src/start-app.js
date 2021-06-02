import { LitElement, html } from 'lit'

class StartApp extends LitElement {
    static get properties() {
        return {
            version: { type: String },
        }
    }

    render() {
        return html`
            <p>Welcome to the Lit Example!</p>
            <p>This is the ${this.version} code.</p>
        `
    }
}

customElements.define('start-app', StartApp)
