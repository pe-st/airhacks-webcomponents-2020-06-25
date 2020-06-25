class OnlineSession extends HTMLElement { 

    constructor() { 
        super();
        this.message = "hey, jug.ch";
    }

    connectedCallback() { 
        this.innerHTML = `
            ${this.message}
        `;
    }

}

customElements.define("jch-onlinesession",OnlineSession);

