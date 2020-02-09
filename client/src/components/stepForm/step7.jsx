import React, { useEffect } from 'react'
import register from '../../api/register'
import { Form, Input, Checkbox, Row, Col, Select } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

const { Option } = Select

const locations = ['มา มจธ. ด้วยตนเอง', 'สถานีขนส่งผู้โดยสารกรุงเทพฯ (สายใต้ใหม่)', 'สถานีขนส่งผู้โดยสารกรุงเทพฯ (เอกมัย)', 'สถานีรถไฟกรุงเทพ (สถานีหัวลำโพง)', 'อนุสาวรีย์ชัยสมรภูมิ']

function StepForm7(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props

    useEffect(() => {
        if (user.hasOwnProperty("location")) {
            let locationData = user.location
            props.form.setFieldsValue({ location: locationData });
        }
        if (user.hasOwnProperty("news")) {
            let newsData = user.news
            props.form.setFieldsValue({ news: newsData });
        }
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 5")
            handleNext()
        } else {
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                nextStep(values)
            }
        });
    };
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    const { getFieldDecorator } = props.form;
    return (
        <div>
            <h1>สถานที่ที่ต้องการให้พี่ค่ายไปรับ</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Item label="สถานที่ที่ต้องการให้พี่ค่ายไปรับ">
                    {getFieldDecorator('location', {
                        rules: [{ required: !summary, message: 'กรุณาระบุสถานที่' }],
                        // initialValue: "มา มจธ. ด้วยตนเอง"
                    })(
                        <Select disabled={summary} placeholder='ระบุสถานที่'>
                            {
                                locations.map((location) => (
                                    <Option key={location} value={location}>{location}</Option>
                                )
                                )
                            }
                        </Select>,
                    )}
                </Form.Item>
                <h1>ได้รับข่าวสารการจัดค่ายจากที่ใด</h1>
                <Form.Item className="Right-Radio">
                    {getFieldDecorator('news', {
                        // rules: [{ required: !summary, message: 'กรุณาเลือกหลักสูตรที่ต้องการ' }]
                })(
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange} disabled={summary}>
                <Row>
                    <Col md={{span:8}}>
                        <Checkbox value="facebook">Facebook Page</Checkbox>
                    </Col>
                    <Col md={{span:8}}>
                        <Checkbox value="instagram">Instagram</Checkbox>
                    </Col>
                    <Col md={{span:8}}>
                        <Checkbox value="camphub">เว็บไซต์ Camphub</Checkbox>
                    </Col>
                    <Col md={{span:8}}>
                        <Checkbox value="senior">การแนะนำจากรุ่นพี่</Checkbox>
                    </Col>
                    <Col md={{span:8}}>
                        <Checkbox value="friend">การแนะนำจากเพื่อน</Checkbox>
                    </Col>
                    <Col md={{span:8}}>
                        <Checkbox value="teacher">การแนะนำจากครูแนะแนว</Checkbox>
                    </Col>
                    <Col md={{span:8}}>
                        <Checkbox value="openhouse">งาน Open House</Checkbox>
                    </Col>
                    </Row>
                </Checkbox.Group>
                )}
                </Form.Item>

                {!summary &&
                    <Form.Item>
                        <div class="Button-Row">
                            <div className="Button-Column right">
                                <div className="Button-Left-Image">
                                    <img
                                        src={btn_left}
                                        alt="Left button decoration"
                                    />
                                </div>
                                <div className="Button-Right-Image">
                                    <img
                                        src={btn_right}
                                        alt="Right button decoration"
                                    />
                                </div>
                                <div className="Button-BorderImage"></div>
                                <button className="Button-Background" htmlType="submit">
                                    <span className="Markdown">Next</span>
                                </button>
                            </div>

                            <div className="Button-Column left">
                                <div className="Button-Left-Image">
                                    <img
                                        src={btn_left}
                                        alt="Left button decoration"
                                    />
                                </div>
                                <div className="Button-Right-Image">
                                    <img
                                        src={btn_right}
                                        alt="Right button decoration"
                                    />
                                </div>
                                <div className="Button-BorderImage"></div>
                                <button className="Button-Background" onClick={handlePrev}>
                                    <span className="Markdown">Back</span>
                                </button>
                            </div>
                        </div>
                    </Form.Item>
                }
            </Form>
        </div>
    )
}

export default Form.create({ name: 'step7' })(StepForm7)