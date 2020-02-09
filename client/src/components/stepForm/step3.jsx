import React, { useEffect, useState } from 'react'
import register from '../../api/register'
import { Form, Input, Button, Row, Col, Select, DatePicker, InputNumber } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

const { Option } = Select


function StepForm3(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props

    const [accident, setAccident] = useState(false)

    let diseaseData = {}

    useEffect(() => {
        async function fetchData() {
            if (user.hasOwnProperty("disease")) {
                diseaseData = user.disease
                delete diseaseData._id
                if (diseaseData.hasOwnProperty("accident")) {
                    await setAccident(true)
                    await props.form.setFieldsValue({ have_accident: "true" })
                } else {
                    await setAccident(false)
                    await props.form.setFieldsValue({ have_accident: "false" })
                }
                props.form.setFieldsValue(diseaseData);
            }
        }
        fetchData()
    }, []);

    const nextStep = async (payload) => {
        const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 3")
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

    const { getFieldDecorator } = props.form;

    const handleAccident = value => {
        if (value == "true") {
            setAccident(true)
        } else if (value == "false") {
            setAccident(false)
        }
        console.log(accident)
    }

    return (
        <div>
            <h1>ข้อมูลสุขภาพ</h1>
            <Form onSubmit={handleSubmit} >

                {(!summary || diseaseData.disease) && 
                <Form.Item label="โรคประจำตัว">
                    {getFieldDecorator('disease')(
                        <Input
                            placeholder="โรคหอบหึด"
                            disabled={summary}
                        />,
                    )}
                </Form.Item>
                }
                
                {(!summary || diseaseData.allergy_food) && 
                <Form.Item label="อาหารที่แพ้">
                    {getFieldDecorator('allergy_food')(
                        <Input
                            placeholder="ถั่วเขียว"
                            disabled={summary}
                        />,
                    )}
                </Form.Item>
                }
                {(!summary || diseaseData.allergy_medic) && 
                <Form.Item label="ยาที่แพ้">
                    {getFieldDecorator('allergy_medic')(
                        <Input
                            placeholder="ยาแอมพลิซิลลิน"
                            disabled={summary}
                        />,
                    )}
                </Form.Item>
                }
                {(!summary || diseaseData.medic_other) && 
                <Form.Item label="อาการแพ้อื่นๆ">
                    {getFieldDecorator('medic_other')(
                        <Input
                            placeholder="แพ้แป้งฝุ่น แพ้สารเคมี"
                            disabled={summary}
                        />,
                    )}
                </Form.Item>
                }
                {(!summary || diseaseData.medic_need) && 
                <Form.Item label="ยาประจำตัว">
                    {getFieldDecorator('medic_need')(
                        <Input
                            placeholder="ยาแก้หอบหึด"
                            disabled={summary}
                        />,
                    )}
                </Form.Item>
                }
                <Form.Item label="อุบัติเหตุในรอบ 6 เดือน">
                    {getFieldDecorator('have_accident', {
                        rules: [{ required: !summary, message: 'กรุณากรอกข้อมูล' }],
                    })(
                        <Select
                            disabled={summary}
                            placeholder="โปรดระบุ"
                            onChange={handleAccident}
                        >
                            <Option value="false">ไม่มี</Option>
                            <Option value="true">มี</Option>
                        </Select>
                    )}
                </Form.Item>
                {accident &&
                    <Form.Item label="เนื่องจาก">
                        {getFieldDecorator('accident', {
                            rules: [{ required: !summary, message: 'กรุณากรอกข้อมูล' }],
                        })(
                            <Input.TextArea
                                autoSize={{ minRows: 4 }}
                                disabled={summary}
                                placeholder="อุบัติเหตุทางรถยนต์"
                            />,
                        )}
                    </Form.Item>
                }

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

export default Form.create({ name: 'step3' })(StepForm3)