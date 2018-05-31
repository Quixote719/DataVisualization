import React, { Component } from 'react';
import './app.scss';
import {ServerData} from './dataStorage.js';
import ReactEcharts from 'echarts-for-react';

console.log(ServerData.sendGet());

let ChartOpt={
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

class App extends Component {
    getOption(){
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {type: 'time'},
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [18, 11, 36, 10, 22, 20]
            }]
        };
    }
    render() {
        return (
            <div>
                <ReactEcharts option={ChartOpt} style={{height: '500px', width: '100%'}}
                              className='echarts-for-echarts' theme='my_theme'/>
                <ReactEcharts option={this.getOption()} style={{height: '300px', width: '100%'}}
                              className='echarts-for-echarts' theme='my_theme'/>
            </div>
        );
    }
}

export default App;
