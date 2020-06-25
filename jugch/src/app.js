import { fetchMessage } from "./MessageService.js";
class OnlineSession extends HTMLElement { 

    constructor() { 
        super();
        this.message = fetchMessage('duke');
        this.root = this.attachShadow({mode:"open"});
    }

    connectedCallback() { 
        this.root.innerHTML = `
        <style>
        h1{
            background-color: red;
        }
        </style>
          <h1>jug.ch rocks!</h1>
            ${this.message}
        `;
    }

}

customElements.define("jch-onlinesession",OnlineSession);

