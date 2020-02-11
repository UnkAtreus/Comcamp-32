import React from 'react'
import register from '../../api/register'
import { Form, Checkbox, Row, Col } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

function StepForm0(props) {

    const { currentStep, handleNext } = props

    const nextStep = async () => {
        const flag = await register.sendData(currentStep, { step0: true })
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next")
            handleNext()
        } else {
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                nextStep()
            }
        });
    };

    const {getFieldDecorator} = props.form

    return (
        <div>
            <h1>หลักฐานการสมัคร</h1>
            <Row>
                <Col span={20}>
                    1. สำเนาบัตรประจำตัวประชาชน หรือสำเนาบัตรนักเรียน
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                    2. ใบรับรองการเป็นนักเรียนของสถานศึกษาหรือใบ ปพ.7 อย่างใดอย่างหนึ่ง
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                    3. ใบรับรองแสดงผลการเรียน ระดับมัธยมศึกษาตอนปลาย (ปพ.1)
                    หรือ แบบรายงานประจำตัวนักเรียนภาคเรียนล่าสุด อย่างใดอย่างหนึ่ง (อนุญาตให้ใช้สำเนาได้)
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                    4. ใบขออนุญาตผู้ปกครอง
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                    5. สำเนาบัตรประจำตัวประชาชนของผู้ปกครองที่ให้การรับรองในใบขออนุญาตผู้ปกครอง
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                    6. ภาพถ่ายหน้าตรงสวมชุดนักเรียนหรือชุดที่สถานศึกษากำหนด ขนาด 1.5 นิ้ว
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                    7. ภาพถ่ายอิสระของผู้สมัครที่เห็นหน้าชัดเจนและมีขนาดไม่ต่ำกว่า 4x6 นิ้ว พร้อมเขียนชื่อจริง นามสกุล และโรงเรียน หลังภาพ
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                    8. ภาพถ่ายที่ตลกที่สุด และมีขนาดไม่ต่ำกว่า 4x6 นิ้ว
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Form.Item className="Right-Radio">
                    {getFieldDecorator('agree', {
                        rules: [{ required: true, message: 'กรุณาอ่านข้อมูลการสมัครให้ครบถ้วน' }]
                    })(
                        <Checkbox.Group options={['ข้าพเจ้าได้อ่านข้อมูลการสมัครทั้งหมดแล้ว']} />,
                    )}
                </Form.Item>
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
                            <button className="Button-Background" htmlType="submit" >
                                <span className="Markdown">Next</span>
                            </button>
                        </div>

                    </div>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Form.create({ name: 'step0' })(StepForm0)