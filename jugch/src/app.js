document.querySelector("input").onchange = e => console.log('no lit',e);

import { fetchMessage } from "./MessageService.js";
import { html,render } from "./lit-html.js";
class OnlineSession extends HTMLElement { 

    constructor() { 
        super();
        this.message = fetchMessage('duke');
        this.root = this.attachShadow({mode:"open"});
    }

    connectedCallback() { 
        const template = html`
        <style>
        h1{
            background-color: red;
        }
        </style>
          <h1>jug.ch rocks!</h1>
            ${this.message}
            <input type="text" @change="${e => this.messageChanged(e)}"/>
            <button @click="${e => this.saveClicked()}">click me</button>
        `;
        render(template, this.root);
    }

    messageChanged(event) { 
        console.log(event);
    }

    saveClicked() { 
        console.log('button was clicked' + new Date());
    }

}

customElements.define("jch-onlinesession",OnlineSession);

