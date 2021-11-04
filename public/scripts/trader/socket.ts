import * as responses from "./handleResponses.js" ;

export class Socket {
    conn: WebSocket
    connectionStatusDiv: HTMLElement

    // @ts-ignore
    savedFunctions: SavedFunction[] = []

    constructor() {
        this.conn = new WebSocket("ws://localhost:42069/ws");

        this.connectionStatusDiv = document.getElementById("connectionStatus")!
        if (document.getElementById("connectionStatus") != null) {
            this.connectionStatusDiv = document.getElementById("connectionStatus")!
        }

        console.log(this.connectionStatusDiv)

        let self = this
        this.conn.onopen = function(e) {self.onOpen()}
        this.conn.onmessage = function(e) {self.onMessage(e)}
        this.conn.onerror = function(e) {self.onError()}
        this.conn.onclose = function(e) {self.onClose()}

    }

    onOpen() {
        const setupData = {
            intent: "Connect",
            username: "Wolfie",
        };
        this.conn.send(JSON.stringify(setupData));
        console.log("Connecting to trader")
    }

    onMessage(event: { data: any; }) {
        let message = event.data;
        //console.log(message)
        const response = JSON.parse(message)
        console.log(response)


        responses.handleConnectionStatus(response, this.conn, this.connectionStatusDiv)
        responses.handleKlineUpdates(response, document.getElementById("klineLog")!)
        responses.handleOrderUpdates(response, document.getElementById("orderLog")!)
        responses.handleTraderLogs(response, document.getElementById("serverLog")!)

        for (let i = 0; i < this.savedFunctions.length; i++) {
            this.savedFunctions[i].handleFunc(response)
        }
    }

    onClose() {
        this.connectionStatusDiv.textContent = "Disconnected"
    }

    onError() {
        this.connectionStatusDiv.textContent = "Error"

    }
}

export class SavedFunction {
    conn:Socket

    callback: (result: string) => boolean
    condition: string

    constructor(conn:Socket, callback:(result: string) => boolean, condition:string) {
        this.conn = conn

        this.callback = callback
        this.condition = condition

        conn.savedFunctions.push(this)
    }
    handleFunc(response:any) {
        if (this.condition == response["Intent"]) {
            this.callback(response["Data"])
        }
    }
}
























