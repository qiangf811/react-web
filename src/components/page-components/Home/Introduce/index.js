import React, { Component } from 'react'
import { Col, Row, Progress } from 'antd'
import CSSModules from 'react-css-modules'
import styles from './index.css'

class Introduce extends Component {
    constructor() {
        super()
        this.state = {
            info: {
                name: '强峰',
                job: '高级前端开发工程师',
                // eslint-disable-next-line
                description: '熟练掌握网站性能优化、SEO和服务器端语言。前端开发是个非常新的职业，对一些规范和最佳实践的研究都处于探索阶段。\
                              总有新的灵感和技术不时闪现出来，例如CSS sprite、悬浮定位、负边距布局、栅格布局等；各种JavaScript框架层出不穷，\
                              为整个前端开发领域注入了巨大的活力；浏览器大战也越来越白热化，跨浏览器兼容方案依然是五花八门。为了满足“高可维护性”\
                              的需要,需要更深入、更系统地去掌握前端知识，这样才可能创建一个好的前端架构，保证代码的质量。服务于企业级产品的开发，基\
                              于确定和自然的设计价值观上的模块化解决方案.'
            },
            skills: [
                { name: 'Vue', score: 90 },
                { name: 'React', score: 90 },
                { name: 'Node', score: 90 },
                { name: 'Electron', score: 96 },
                { name: 'ReactNative', score: 90 },
                { name: 'MongoDB', score: 90 }
            ]
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.state.skills.forEach(skill => { skill.score = parseInt(25 + (Math.random() * 75)) })
            this.setState({ skills: this.state.skills })
        }, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        this.timer = null
    }

    render() {

        const SkillsList = this.state.skills.map((item => (
            <div key={item.name} className="progress-wrapper">
                <div>{item.name}</div>
                <Progress percent={item.score} status="active" />
            </div>))
        )

        return (
            <Row gutter={16}>
                <Col span={8}>
                    <div className="self-info">
                        <h1>{this.state.info.name}</h1>
                        <h2 className="job-name">{this.state.info.job}</h2>
                        <p>{this.state.info.description}</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="person"></div>
                </Col>
                <Col span={8} className="progress-box">
                    {SkillsList}
                </Col>
            </Row>
        )
    }
}

export default CSSModules(Introduce, styles)
