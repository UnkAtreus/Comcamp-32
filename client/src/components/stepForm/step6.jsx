import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select, DatePicker, InputNumber, Slider  } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

function StepForm6(props) {

    const {currentStep, handlePrev, handleNext, user, summary } = props

    const alert = useAlert()

    useEffect(() => {
        if(user.hasOwnProperty("ability")) {
            let abilityData = user.ability
            props.form.setFieldsValue(abilityData);
        }
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        const flag =  await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next 5")
            handleNext()
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
            <h1>ความถนัด</h1>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col span={10}>
                        <Form.Item label="โปรแกรมมิ่ง">
                        {getFieldDecorator('programming', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Programming'}],
                            initialValue: 3
                        })(
                            <Slider max={5} min={1} tooltipVisible disabled={summary}/>,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={1}>
                        <Form.Item label="บิ๊กดาต้า">
                        {getFieldDecorator('big_data', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Big data' }],
                            initialValue: 3
                        })(
                            <Slider max={5} min={1} tooltipVisible disabled={summary}/>,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
  
                    <Col span={10} >
                        <Form.Item label="ผังงาน">
                        {getFieldDecorator('flow_chart', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Flow chart' }],
                            initialValue: 3
                        })(
                            <Slider max={5} min={1} tooltipVisible disabled={summary}/>,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={1}>
                        <Form.Item label="ไมโครคอนโทรลเลอร์">
                        {getFieldDecorator('microcontroller', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Microcontroller'}],
                            initialValue: 3
                        })(
                            <Slider max={5} min={1} tooltipVisible disabled={summary}/>,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
  
                    <Col span={10}>
                        <Form.Item label="ระดมสมอง">
                        {getFieldDecorator('brain_storm', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Brain storm' }],
                            initialValue: 3
                        })(
                            <Slider max={5} min={1} tooltipVisible disabled={summary}/>,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                
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

export default Form.create({name: 'step6'})(StepForm6)