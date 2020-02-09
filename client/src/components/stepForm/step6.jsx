import React, { useEffect, useState } from 'react'
import register from '../../api/register'
import { Form, Input, Button, Row, Col, Select, DatePicker, InputNumber, Slider } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

const { Option } = Select

function StepForm6(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props

    const [accident, setAccident] = useState(false)
    
    let abilityData = {}
    useEffect(() => {
        async function fetchData() {
            if (user.hasOwnProperty("ability")) {
                abilityData = user.ability
                delete abilityData._id
                if (abilityData.hasOwnProperty("language")) {
                    await setAccident(true)
                    await props.form.setFieldsValue({ have_language: "true" })
                } else {
                    await setAccident(false)
                    await props.form.setFieldsValue({ have_language: "false" })
                }
                props.form.setFieldsValue(abilityData);
            }
        }
        fetchData()
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
            <h1>ความถนัด</h1>
            <Form onSubmit={handleSubmit} >
            <Form.Item label="เคยเขียนภาษาคอมพิวเตอร์มาก่อนหรือไม่">
                    {getFieldDecorator('have_language', {
                        rules: [{ required: !summary, message: 'กรุณากรอกข้อมูล' }],
                    })(
                        <Select
                            disabled={summary}
                            placeholder="โปรดระบุ"
                            onChange={handleAccident}
                        >
                            <Option value="false">ไม่เคย</Option>
                            <Option value="true">เคย</Option>
                        </Select>
                    )}
                </Form.Item>
                {accident &&
                    <Form.Item label="ภาษาที่เคยเขียน">
                        {getFieldDecorator('language', {
                            rules: [{ required: !summary, message: 'กรุณากรอกข้อมูล' }],
                        })(
                            <Input.TextArea
                                autoSize={{ minRows: 4 }}
                                disabled={summary}
                                placeholder="ภาษา C, Python"
                            />,
                        )}
                    </Form.Item>
                }
            <h1>ผลงาน</h1>
                    <Form.Item label="ผลงานที่เคยทำ">
                        {getFieldDecorator('achieve', {
                            rules: [{ message: 'กรุณากรอกข้อมูล' }],
                        })(
                            <Input.TextArea
                                autoSize={{ minRows: 4 }}
                                disabled={summary}
                                placeholder="NSC, ศิลปหัตถกรรม, ประกวดร้องเพลง, สภานักเรียน"
                            />,
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

export default Form.create({ name: 'step6' })(StepForm6)