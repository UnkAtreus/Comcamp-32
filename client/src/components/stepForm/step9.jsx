import React, { useEffect, useState } from 'react'
import register from '../../api/register'
import { Form, Input, Button, Row, Col, Select } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';
import SummaryForm from '../summary.component'
// import { useAlert } from 'react-alert'

const { Option } = Select


function StepForm9(props) {

    const { currentStep, handlePrev, handleNext, user, summary, step9, fetch_user } = props

    const [accident, setAccident] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (user.hasOwnProperty("tracking_number")) {
                let tracking_numbernData = user.tracking_number
                if(tracking_numbernData == "มาส่งที่ภาควิชาด้วยตนเอง") {
                    props.form.setFieldsValue({Submit_file : "false"})
                    // await setAccident(true)
                } else {
                    props.form.setFieldsValue({Submit_file : "true"})
                    await setAccident(true)
                }
                
                props.form.setFieldsValue({ tracking_number: tracking_numbernData });
            }
        }
        fetchData()
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        if(!accident) {
            payload = {tracking_number: "มาส่งที่ภาควิชาด้วยตนเอง"}
        }
        console.log("payload", payload)
        const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 5")
            // fetch_user()
            window.location = '/summary'
        } else {
        }
    }

    const backtosummary = async (payload) => {
        const flag = await register.sendData(10, { confirmed: false })
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 5")
            fetch_user()
            // window.location = '/register'
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

    if(!user.hasOwnProperty("confirmed") || user.confirmed === false) {
        return <SummaryForm summary={true} step9={true} handlePrev={handlePrev} />
    }

    return (
        
        <div>
            <h1>จัดส่งเอกสาร</h1>
            <p>โปรดส่งเอกสารมาตามที่อยู่นี้ โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องตน ครั้งที่ 32 ภาควิชาวิศวกรรมคอมพิวเตอร์คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี 126 ถนนประชาอุทิศ 
            แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140</p>
            ดาวโหลดเอกสาร <a href="https://drive.google.com/file/d/1dJeHY3UGLLHArmGY59mblyovY2Vn9Z2Y/view" target ="_blank">คลิกที่นี่</a>
            
            <Form onSubmit={handleSubmit} >
            <Form.Item label="วิธีการส่งเอกสาร">
                    {getFieldDecorator('Submit_file', {
                        rules: [{ required: !summary, message: 'กรุณากรอกข้อมูล' }],
                    })(
                        <Select
                            disabled={summary}
                            placeholder="โปรดระบุ"
                            onChange={handleAccident}
                        >
                            <Option value="false">มาส่งที่ภาควิชาด้วยตนเอง</Option>
                            <Option value="true">ส่งทางไปรษณีย์</Option>
                        </Select>
                    )}
                </Form.Item>
                {accident &&
                <Form.Item label="เลข Tracking Number">
                    {getFieldDecorator('tracking_number', {
                        rules: [{ required: !summary, message: 'กรุณาระบุ tracking number' }],
                    })(
                        <Input
                            disabled={summary}
                            placeholder="EF123456789TH"
                        />,
                    )}
                </Form.Item>
                }

                {/* {(!summary) && 
                <Form.Item label="เลข Tracking Number">
                    {getFieldDecorator('tracking_number', {
                        rules: [{ required: !summary, message: 'กรุณาระบุ tracking number' }],
                    })(
                        <Input
                            disabled={summary}
                            placeholder="EF123456789TH"
                        />,
                    )}
                </Form.Item>
                } */}
                {(!summary && step9)&&  
                <p>*หมายเหตุ.หลังจากกด Submit แล้ว จะไม่สามารถแก้ไขข้อมูลได้อีก</p>
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
                                <span className="Markdown">Submit</span>
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
                            <button className="Button-Background" onClick={backtosummary}>
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

export default Form.create({ name: 'step9' })(StepForm9)