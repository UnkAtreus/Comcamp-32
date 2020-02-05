import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

// import step form
import StepForm1 from './step1'
import StepForm2 from './step2'
import StepForm3 from './step3'
import StepForm4 from './step4'
import StepForm5 from './step5'
import StepForm6 from './step6'
import StepForm7 from './step7'
import StepForm8 from './step8'

const { Option } = Select

const locations = ['มา มจธ. ด้วยจนเอง', 'สายใต้ใหม่ ถนนบรม (ใต้)', 'ขนส่งเอกมัย (ตะวันออก)', 'หัวลำโพง (รถไฟ)', 'อนุเสาวรีย์ชัยสมรถภูมิ (รถตู้)']

function StepForm9(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props

    const alert = useAlert()

    useEffect(() => {
        if (user.hasOwnProperty("tracking_number")) {
            let tracking_numbernData = user.tracking_number
            props.form.setFieldsValue({ tracking_number: tracking_numbernData });
        }
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 5")
            alert.success('บันทึกข้อมูลเสร็จสมบูรณ์')
        } else {
            alert.error('บันทึกข้อมูลผิดพลาด')
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
    return (
        <div>
            <h1>เสร็จสิ้น</h1>
            โปรดส่งเอกสารมาตามที่อยู่นี้ ......
            <Form onSubmit={handleSubmit} >
                <Form.Item label="เลข Tracking Number">
                    {getFieldDecorator('tracking_number', {
                        rules: [{ required: true, message: 'กรุณาระบุสถานที่' }],
                    })(
                        <Input
                            disabled={summary}
                            placeholder="test"
                        />,
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
                            <button className="Button-Background" onClick={handlePrev}>
                                <span className="Markdown">Back</span>
                            </button>
                        </div>
                    </div>
                </Form.Item>

            </Form>
            <h1>สรุปข้อมูล</h1>
        </div>
    )
}

export default Form.create({ name: 'step9' })(StepForm9)