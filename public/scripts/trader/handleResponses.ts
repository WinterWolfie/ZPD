
export function handleConnectionStatus(response: any, conn:WebSocket, connectionStatus:HTMLElement) {
    if (response["intent"] === "connectionStatus") {
        connectionStatus.innerText = response["data"]

        if (response["data"] == "Connected") {
            let request = {Intent: "GetKlineUpdates"};
            conn.send(JSON.stringify(request))

            request = {Intent: "GetMReversionOrders"};
            conn.send(JSON.stringify(request))

            request = {Intent: "GetServerLogs"};
            conn.send(JSON.stringify(request))

        }
    }
}
export function handleKlineUpdates(response: any, klines:HTMLElement) {
    if (response["Intent"] === "KlineUpdate") {
        let div = document.createElement("div")

        console.log(response["Data"])

        div.innerText = JSON.stringify(response["Data"]["OpenTime"])
        klines.append(div)
        
    }
}
export function handleOrderUpdates(response: any, orders:HTMLElement) {
    if (response["Intent"] === "OrderUpdate") {
        let div = document.createElement("div")

        div.innerText = JSON.stringify(response["Data"])
        orders.append(div)
    }
}
export function handleTraderLogs(response: any, Logs:HTMLElement) {
    if (response["Intent"] === "ServerLog") {
        let div = document.createElement("div")

        console.log(response["Data"])

        div.innerText = JSON.stringify(response["Data"])
        Logs.append(div)
    }
}



