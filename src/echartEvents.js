import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Events extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
        };
    }
    getOption = () => ({
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    });

    onChartClick = (param, echarts) => {
        console.log(param, echarts);
        console.log('chart click');
        this.setState({
            cnt: this.state.cnt + 1,
        })
    };

    onChartLegendselectchanged = (param, echart) => {
        console.log(param, echart);
        console.log('chart legendselectchanged');
    };

    onChartReady = (echarts) => {
        console.log('echart is ready', echarts);
    };

    render() {
        let onEvents = {
            'click': this.onChartClick,
            'legendselectchanged': this.onChartLegendselectchanged
        };
        let code = "let onEvents = {\n" +
            "  'click': this.onChartClick,\n" +
            "  'legendselectchanged': this.onChartLegendselectchanged\n" +
            "}\n\n" +
            "<ReactEcharts \n" +
            "  option={this.getOption()} \n" +
            "  style={{height: 300}} \n" +
            "  onChartReady={this.onChartReady} \n" +
            "  onEvents={onEvents} />";

        return (
            <div className='examples'>
                <div className='parent'>
                    <label> Chart of error log {this.state.cnt}</label>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{height: 300}}
                        onChartReady={this.onChartReady}
                        onEvents={onEvents} />
                    {/*<label> code below: </label>*/}
                    {/*<pre>*/}
                    {/*<code>{code}</code>*/}
                    {/*</pre>*/}
                </div>
            </div>
        );
    }
};
