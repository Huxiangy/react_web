import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Divider } from 'antd'
import axios from '@/api';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

// 引入中国地图
import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';
import { DATA , geoCoordMap } from '@/api/listData';

import { API } from '@/api/config';
import '../../style/view-style/index.scss'




class Index extends Component {

	constructor (props) {
		super(props);
		


	}
    componentDidMount() {
        this.initalECharts();
    }

    initalECharts() {
    	let name_title = "新冠状病毒感染引起的肺炎疫情情况"
		let subname = '数据来自网易疫情，时间截止于2020年2月12日17时\n，\n由于底图来源问题，图中未显示中国香港（确诊49例），\n中国澳门（确诊10例），中国台湾（确诊18例）'
		let nameColor = " rgb(55, 75, 113)"
		let name_fontFamily = '等线'
		let subname_fontSize = 15
		let name_fontSize = 18
		let mapName = 'china'
		let max = 5880,
		    min = 9; // todo 
		
        let illnessData = this.handleDatas(DATA);
    	const data = [];

    	for (let i = 0; i <= illnessData.length - 1; i++) {
    		let obj = {
    			name : illnessData[i].name,
    			value: illnessData[i].value[0].value
    		}

    		data.push(obj);
    	}



        echarts.registerMap('china', geoJson);
        const myChart = echarts.init(document.getElementById('mainMap'));

        let option = {
			    title: {
			        text: name_title,
			        subtext: subname,
			        x: 'center',
			        textStyle: {
			            color: nameColor,
			            fontFamily: name_fontFamily,
			            fontSize: name_fontSize
			        },
			        subtextStyle: {
			            fontSize: subname_fontSize,
			            fontFamily: name_fontFamily
			        }
			    },
			    tooltip: {
			        trigger: 'item',
			        formatter: function(params) {
			            if (typeof(params.value)[2] == "undefined") {
			                let toolTiphtml = ''
			                for (let i = 0; i < illnessData.length; i++) {
			                    if (params.name == illnessData[i].name) {
			                        toolTiphtml += illnessData[i].name + ':<br>'
			                        for (let j = 0; j < illnessData[i].value.length; j++) {
			                            toolTiphtml += illnessData[i].value[j].name + ':' + illnessData[i].value[j].value + "<br>"
			                        }
			                    }
			                }
			                //console.log(toolTiphtml)
			                // console.log(convertData(data))
			                return toolTiphtml;
			            } else {
			                let toolTiphtml = ''
			                for (let i = 0; i < illnessData.length; i++) {
			                    if (params.name == illnessData[i].name) {
			                        toolTiphtml += illnessData[i].name + ':<br>'
			                        for (let j = 0; j < illnessData[i].value.length; j++) {
			                            toolTiphtml += illnessData[i].value[j].name + ':' + illnessData[i].value[j].value + "<br>"
			                        }
			                    }
			                }
			                console.log(toolTiphtml)
			                // console.log(convertData(data))
			                return toolTiphtml;
			            }
			        }
			    },
			    visualMap: {
			        show: true,
			        min: 1,
			        max: 600,
			        left: 'left',
			        top: 'bottom',
			        text: ['高', '低'], // 文本，默认为数值文本
			        calculable: true,
			        seriesIndex: [1],
			        inRange: {
			            color: ['#FAB354', '#F90C05'] 
			        }
			    },
			    geo: {
			        show: true,
			        map: mapName,
			        label: {
			            normal: {
			                show: true,
			                textStyle: {
			                	color: '#000',
			                	fontSize: 12
			                }
			            },
			            emphasis: {
			                show: false,
			                areaColor: '#fff'
			            }
			        },
			        roam: true,
			        itemStyle: {
			            normal: {
			                areaColor: '#031525',
			                borderColor: '#3B5077',
			            },
			            emphasis: {
			                areaColor: '#2B91B7',
			            }
			        }
			    },
			    series: [{
			            name: '散点',
			            type: 'scatter',
			            coordinateSystem: 'geo',
			            data: this.convertData(data),
			            symbolSize: function(val) {
			                return val[2] / 100;
			            },
			            label: {
			                normal: {
			                    formatter: '{b}',
			                    position: 'right',
			                    show: true
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			            itemStyle: {
			                normal: {
			                    color: '#05C3F9'
			                }
			            }
			        },
			        {
			            type: 'map',
			            map: mapName,
			            geoIndex: 0,
			            aspectScale: 5.75, //长宽比
			            showLegendSymbol: false, // 存在legend时显示
			            label: {
			                normal: {
			                    show: true
			                },
			                emphasis: {
			                    show: false,
			                    textStyle: {
			                        color: '#fff'
			                    }
			                }
			            },
			            roam: true,
			            itemStyle: {
			                normal: {
			                    areaColor: '#031525',
			                    borderColor: '#3B5077',
			                },
			                emphasis: {
			                    areaColor: '#2B91B7'
			                }
			            },
			            animation: false,
			            data: data
			        }

			    ]
		};

        myChart.setOption(option);


    }

    convertData(data) {
        const res = [];
	    // for (let i = 0; i < data.length; i++) {
	    //     const geoCoord = geoCoordMap[data[i].name];
	    //     if (geoCoord) {
	    //         res.push({
	    //             name: '',
	    //             value: geoCoord.concat(data[i].area)
	    //         });
	    //     }
	    // }
        return res;
    }


	// 处理疫情数据
	handleDatas(data = {}) {
		let listData = data.data.areaTree[0];
		let arr = [] ;
		listData.children.map((values,key ) => {

			//if () {}  这里可对 值是否存在进行判断
			let obj = {};
			// console.log(values)
			obj.name = values.name;
			obj.value = [
				{
		            name: "确诊",
		            value: values.total.confirm
		        }, {
		            name: "死亡",
		            value: values.total.dead
		        }, {
		            name: "治愈",
		            value: values.total.heal
		        }
			];
			arr.push(obj);
		})
		return arr;
	}

	getChinaIllnessList() {
		axios.post(`${API}/ug/api/wuhan/app/data/list-total?t=1581498720263`)
					.then(res => {
						console.log(res)

					}).catch(err => {})
	}

	componentWillMount() {
		// 本来想使用网易的疫情数据， 但是有跨域问题 这里先模拟数据
		//this.getChinaIllnessList()
	}


    render() {
        return (
            <div id='mainMap' style={{ width: '100%', height: '500px' }}>hello</div>
        )
    }
}

export default Index
