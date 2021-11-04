import * as trader from "./socket.js";

import Highcharts from 'https://code.highcharts.com/es-modules/masters/highcharts.src.js';
import 'https://code.highcharts.com/es-modules/masters/modules/exporting.src.js';
import {json} from "stream/consumers";

export class Algorithm {
    socket: trader.Socket

    div:HTMLElement = document.createElement("div")

    control:Control = new Control(this)
    graph:Graph
    trades:Trades = new Trades()


    constructor(conn:trader.Socket) {
        this.socket = conn
        this.graph = new Graph(this)

        document.getElementById("algorithmView")!.append(this.div)

        this.div.prepend(document.createElement("h1").innerText = "statistics")

    }


}

class Control {
    algorithm:Algorithm

    div:HTMLElement=document.createElement("div")

    controlButtonsDiv:HTMLElement=document.createElement("div")
    controlButtons:HTMLElement=document.createElement("div")

    constructor(algorithm:Algorithm) {
        this.algorithm = algorithm
        this.algorithm.div.append(this.div)

        this.initControlButtons(this.controlButtonsDiv)
    }

    initControlButtons(element:HTMLElement) {
        this.div.append(element)
        let algorithm = this.algorithm;

        (function getTopAlgorithm (){
            let button = document.createElement("button")
            element.append(button)
            button.textContent = "GetTopAlgorithm"

            button.onmousedown = function () {

                let request = {Intent: "GetTopAlgorithm"};
                algorithm.socket.conn.send(JSON.stringify(request))

            }
        })()



    }
}

class Graph {
    div:HTMLElement  = document.createElement("div")

    constructor(algorithm:Algorithm) {
        algorithm.div.append(this.div)

        this.div.style.width = "800px"
        this.div.style.height = "800px"

        let self = this
        let getGraph = function (result:any): boolean {
            self.constructChart(result)

            return true
        }
        //this.constructChart([1, 2, 5, 6, 21, 5])

        new trader.SavedFunction(algorithm.socket, getGraph, "AlgorithmGraph")

    }

    constructChart(data:object) {
        // @ts-ignore
        Highcharts.chart(this.div, {
            chart: {
                zoomType: 'x',
                panning: true,
                panKey: 'shift'
            },

            boost: {
                useGPUTranslations: true
            },

            title: {
                text: 'Performance'
            },

            subtitle: {
                text: 'Using the Boost module'
            },

            tooltip: {
                valueDecimals: 2
            },

            series: [{
                data: data,
                lineWidth: 0.5
            }]
        });

    }
}

class Trades {

}

class Structure {
    div:HTMLElement = document.createElement("div")
    getTopAlgorithm:HTMLElement = document.createElement("div")
    graph:HTMLElement = document.createElement("div")



    constructor() {
        this.initButtons()
    }

    initButtons() {

    }


}

//sexy for initing classes
class Person {
    public name: string = "default"
    public address: string = "default"
    public age: number = 0;

    public constructor(init?:Partial<Person>) {
        Object.assign(this, init);
    }
}
