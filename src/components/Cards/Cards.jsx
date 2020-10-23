import React from 'react';
import 'antd/dist/antd.css';
import CountUp from 'react-countup';
import { Card, Row, Col } from 'antd';
import styles from './Cards.module.css'


const Cards = ({data: {confirmed}}) => {

    if (!confirmed) {
        return 'LOADING...';
    }
    return (
        <div className={styles.container}>
            <Row gutter={10}>
                <Col span={8}>
                    <Card title="Confirmed" bordered={true} style={{'fontSize':'50px'}}>
                        <CountUp start={0} end = 
                        {confirmed.confirmed.value} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Recovered" bordered={true} style={{'fontSize':'50px'}}>
                    <CountUp start={0} end = 
                        {confirmed.recovered.value} />
            </Card>
                </Col>
                <Col span={8}>
                    <Card title="Deaths" bordered={true} style={{'fontSize':'50px'}}>
                    <CountUp start={0} end = 
                        {confirmed.deaths.value} />
            </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cards;