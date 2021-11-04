// @ts-ignore
import Highcharts from 'https://code.highcharts.com/es-modules/masters/highcharts.src.js';
import 'https://code.highcharts.com/es-modules/masters/modules/exporting.src.js';




function getData(n: number) {
    var arr = [],
        i,
        a = 0,
        b = 0,
        c = 0,
        spike;
    for (i = 0; i < n; i = i + 1) {
        if (i % 100 === 0) {
            a = 2 * Math.random();
        }
        if (i % 1000 === 0) {
            b = 2 * Math.random();
        }
        if (i % 10000 === 0) {
            c = 2 * Math.random();
        }
        if (i % 50000 === 0) {
            spike = 10;
        } else {
            spike = 0;
        }
        arr.push([
            i,
            2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
        ]);
    }
    return arr;
}
var n = 1000,
    data = getData(n);

export function log() {
    console.log(data)
}



// @ts-ignore
Highcharts.chart('performanceGraph', {
    chart: {
        zoomType: 'x',
        panning: true,
        panKey: 'shift'
    },

    boost: {
        useGPUTranslations: true
    },

    title: {
        text: 'Highcharts drawing ' + n + ' points'
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



class MReversionConfig  {
    private interval: string
    constructor() {

        this.interval = "tick"
    }
}





class algorithmGraph{

}



/*export function generateConfig() {
    const config = new MReversionConfig()

    const MReversionGraphs = document.getElementById("MReversionConfig")

    let checkbox = document.createElement("div");
    MReversionGraphs.append(checkbox)
    checkbox.textContent = "Data"
    checkbox.style.width = "30px"
    checkbox.style.height = "30px"

    if (config.compactData === true) {
        checkbox.style.backgroundColor = "blue"
    } else {
        checkbox.style.backgroundColor = "black"
    }
    checkbox.onclick = function () {
        if (config.compactData === true) {
            config.compactData = false
            checkbox.style.backgroundColor = "black"
        } else {
            config.compactData = true
            checkbox.style.backgroundColor = "blue"
        }
    }
    let intervals = document.createElement("div");
    MReversionGraphs.append(intervals)


    function intervalGenerator() {

    }


    let  option1d = document.createElement("div");
    intervals.append(option1d)

    option1d.textContent = "1d"
    option1d.style.width = "30px"
    option1d .style.height = "30px"

    if (config.interval === true) {
        option1d .style.backgroundColor = "blue"
    } else {
        checkbox.style.backgroundColor = "black"
    }
    checkbox.onclick = function () {
        if (config.compactData === true) {
            config.compactData = false
            checkbox.style.backgroundColor = "black"
        } else {
            config.compactData = true
            checkbox.style.backgroundColor = "blue"
        }
    }


}*/


