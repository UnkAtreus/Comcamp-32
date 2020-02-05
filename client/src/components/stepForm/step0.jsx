import React from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Radio } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

function StepForm0(props) {

    const {currentStep, handleNext} = props
    const alert = useAlert()

    const nextStep = async () => {
        const flag =  await register.sendData(currentStep, {step0: true})
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next")
            alert.success("บันทึกข้อมูลเสร็จสมบูรณ์")
            handleNext()
        } else {
            alert.error('บันทึกข้อมูลผิดพลาด')
        }
    }

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
                2. ใบรับรองการเป็นนักเรียนของสถานศึกษาหรือใบ บฟ.7 อย่างใดอย่างหนึ่ง
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                3. ใบรับรองแสดงผลการเรียน ระดับมัธยมศึกษาตอนปลาย (ปพ.1) 
                หรือ แบบรายงานประจำตัวนักเรียนภาคเรียนล่าสุด อย่างใดอย่างหนึ่ง (อนุญาติให้ใช้สำเนาได้)
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                4. ใบขออนุญาติผู้ปกครอง
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                5. สำเนาบัตรประจำตัวประชาชนของผู้ปกครองที่ให้การรับรองในใบอนุญาติผู้ปกครอง
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
                7. ภาพถ่ายอิสระของผู้สมัคที่เห็นหน้าชัดเจนและมีขนาดไม่ต่ำกว่า 4x6 นิ้ว พร้อมเขียนชื่อ นามสกุล และโรงเรียน หลังภาพ
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                8. ภาพถ่ายตลกที่สุด และมีขนาดไม่ต่ำกว่า 4x6 นิ้ว
                </Col>
                <Col span={2} offset={1}>
                    1 ชุด
                </Col>
            </Row>
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
                                <button className="Button-Background" htmlType="submit" onClick={nextStep}>
                                    <span className="Markdown">Next</span>
                                </button>
                            </div>

                        </div>
                        </Form.Item>

        </div>
    )
}

export default StepForm0