/*
 * 登录界面
*/

import React, { Component } from 'react';
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd';
import { withRouter } from 'react-router-dom';
// import axios from '@/api';
// import { API } from '@/api/config';
import '../../style/view-style/login.scss';

class login extends Component {
	state = {
		loading: false
	}

	showLoading = () => {
		this.setState({
			loading : true
		})
	}

	// 处理用户提交的账号密码
    handleSubmit = (event) => {
        event.preventDefault();
        // validateFields 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // let { username, password } = values
                // axios
                //     .post(`${API}/login`, { username, password })
                //     .then(res => {
                //         if (res.data.code === 0) {
                //             localStorage.setItem('user', JSON.stringify(res.data.data.user))
                //             localStorage.setItem('token', res.data.data.token)
                //             this.props.history.push('/')
                //             message.success('登录成功!')
                //         } else {
                //             // 这里处理一些错误信息
                //         }
                //     })
                //     .catch(err => {})

                // 这里可以做权限校验 模拟接口返回用户权限标识
                switch (values.username) {
                    case 'wowu':
                        values.auth = 0
                        break
                    default:
                        values.auth = 1
                }

                localStorage.setItem('user', JSON.stringify(values))
                this.showLoading()
                this.timer = setTimeout(() => {
                    message.success('登录成功!')
                    this.props.history.push('/')
                }, 2000)
            }
        })
    }

    // 组件挂载之后
    componentDidMount() {
    	 notification.open({
            message: '欢迎使用我武-疫情管理平台',
            duration: null,
            description: '账号 wowu(管理员) 其他(游客) 密码随意'
        })
    }

    // 组件被卸载的时候调用
    componentWillUnmount() {
        notification.destroy()
        this.timer && clearTimeout(this.timer)
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                        <h3>后台管理系统</h3>
                        <Divider />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名!' }]
                                })(
                                    <Input
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='用户名'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type='password'
                                        placeholder='密码'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                    loading={this.state.loading}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }

}

export default withRouter(Form.create()(login))