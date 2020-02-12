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
// import { geoCoordMap,provienceData } from "./geo";

import { API } from '@/api/config';
import { DATA } from '@/api/listData';
import '../../style/view-style/index.scss'




class Index extends Component {

	constructor (props) {
		super(props);
		this.illnessData = this.handleDatas(DATA);


	}
    componentDidMount() {
        this.initalECharts();
    }

    initalECharts() {
    	const data = [
            { name: '黑龙江'},
            { name: '吉林'},
            { name: '辽宁' },
            { name: '内蒙古' },
            { name: '北京' },
            { name: '天津' },
            { name: '河北' },
            { name: '山东' },
            { name: '山西' },
            { name: '江苏' },
            { name: '上海' },
            { name: '浙江' },
            { name: '福建' },
            { name: '广东' },
            { name: '海南' },
            { name: '台湾' },
            { name: '香港' },
            { name: '澳门' },
            { name: '河南' },
            { name: '安徽' },
            { name: '江西' },
            { name: '广东' },
            { name: '陕西' },
            { name: '湖北' },
            { name: '湖南' },
            { name: '广西' },
            { name: '宁夏' },
            { name: '重庆' },
            { name: '贵州' },
            { name: '四川' },
            { name: '云南' },
            { name: '甘肃' },
            { name: '青海' },
            { name: '西藏' },
            { name: '新疆' }
        ];

        echarts.registerMap('china', geoJson);
        const myChart = echarts.init(document.getElementById('mainMap'));


        myChart.setOption({
                tooltip: {
                    show: false, // 不显示提示标签
                    // formatter: '{b}', // 提示标签格式
                    //鼠标放地图的某一块，显示的提示框
                    formatter(params, ticket, callback) {
                        console.log(params)
                        return `1`
                    },
                    backgroundColor: '#ff7f50', // 提示标签背景颜色
                    textStyle: { color: '#fff' } // 提示标签字体颜色
                },
                grid: {
                    left: '10%',
                    right: '10%',
                    top: '10%',
                    bottom: '10%',
                    containLabel: true
                },
                geo: {
                    map: 'china',
                    roam: false,
                    zoom: 1.2,
                    tooltip: {
                        show: false, // 不显示提示标签
                    },
                    label: {
                        normal: {
                            show: false, // 显示省份标签
                            textStyle: { color: '#c71585' }// 省份标签字体颜色
                        },
                        emphasis: {// 对应的鼠标悬浮效果
                            show: false,
                            textStyle: { color: '#800080' }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0.5, // 区域边框宽度
                            borderColor: '#000', // 区域边框颜色
                            areaColor: '#ffefd5', // 区域颜色
                            label: { show: false }
                        },
                        emphasis: {
                            show: false,
                            borderWidth: 0.5,
                            borderColor: '#4b0082',
                            areaColor: '#ffdead',
                        }
                    },
                },
                series: [
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.convertData(data),
                        symbolSize: 1,
                        symbolRotate: 40,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'top',
                                show: true
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        tooltip: {
                            show: false, // 不显示提示标签
                            // 显示提示的标签
                            formatter(name) {
                                return `Legend ${name}`;
                            }, // 提示标签格式
                            backgroundColor: '#fff', // 提示标签背景颜色
                            borderColor: '#ccc',
                            borderWidth: 5,
                            textStyle: { color: '#000' } // 提示标签字体颜色
                            },
                        itemStyle: {
                            normal: {
                                color: 'black'
                            }
                        }
                    },
                    {
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        zoom: 1.2,
                        tooltip: {
                            show: false, // 不显示提示标签
                        },
                        label: {
                            normal: {
                                show: false // 显示省份标签
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 0.5, // 区域边框宽度
                                borderColor: '#fff', // 区域边框颜色
                                label: { show: false }
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        // geoIndex: 0,
                        //鼠标放入地图显示提示框
                        tooltip: { show: true },
                        data: provienceData
                    }
                ],
        })


    }

    // convertData(data) {
    //     const res = [];
    //     for (let i = 0; i < data.length; i++) {
    //         const geoCoord = geoCoordMap[data[i].name];
    //         if (geoCoord) {
    //             res.push({
    //                 name: data[i].name,
    //                 value: geoCoord.concat(data[i].area),
    //                 area: data[i].area,
    //                 type: data[i].type,
    //                 InValue: data[i].InValue
    //             });
    //         }
    //     }
    //     return res;
    // }

    // convert() {
    //     return '1';
    // }


	// 处理数据
	handleDatas(data = {}) {
		let listData = data.data.areaTree[0];
		let arr = [] ;
		listData.children.map((values,key ) => {

			//if () {}  这里可对 值是否存在进行判断
			let obj = {};
			// console.log(values)
			obj[values.name] = {
				confirm: values.total.confirm,
				suspect: values.total.suspect,
				heal: values.total.heal,
				dead: values.total.dead
			};
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
       console.log(this.illnessData);


		// 本来想使用网易的疫情数据， 但是有跨域问题 这里先模拟数据
		//this.getChinaIllnessList()


	}


    render() {
        return (
            <div id='mainMap'>hello</div>
        )
    }
}

export default Index
