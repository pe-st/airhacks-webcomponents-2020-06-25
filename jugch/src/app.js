import { fetchMessage } from "./MessageService.js";
class OnlineSession extends HTMLElement { 

    constructor() { 
        super();
        this.message = fetchMessage('duke');
    }

    connectedCallback() { 
        this.innerHTML = `
            ${this.message}
        `;
    }

}

customElements.define("jch-onlinesession",OnlineSession);

