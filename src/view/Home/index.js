import React, { Component } from 'react'
import Banner from '../../components/page-components/Banner'
import Content from '../../components/page-components/Content'
import { Card, Col, Row, Timeline, Icon } from 'antd';
const { Meta } = Card;

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            home: ''
        }
    }
    render() {
        return (
            <div>
                <Banner />
                <Content>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Timeline mode="alternate" style={{marginTop:'40px'}}>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
                    </Timeline>,
                </Content>
            </div>
        )
    }
}
