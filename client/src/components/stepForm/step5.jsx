import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select, DatePicker, InputNumber, Slider  } from 'antd';

function StepForm5(props) {

    const {currentStep, handlePrev, handleNext} = props

 //   const [ability, setAbility] = useState({
 //       programming: '',
 //       big_data: '',
 //       flow_chart: '',
 //       microcontroller: '',
 //       brain_storm: '',
 //   })

    const alert = useAlert()

    const nextStep = async () => {
        const flag =  await register.sendData(currentStep, {step0: true})
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
                    <Col span={12}>
                        <Form.Item label="โปรแกรมมิ่ง">
                        {getFieldDecorator('programming', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Programming'}],
                        })(
                            <Slider defaultValue={3} max={5} min={1} tooltipVisible />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item label="บิ๊กดาต้า">
                        {getFieldDecorator('big_data', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Big data' }],
                        })(
                            <Slider defaultValue={3} max={5} min={1} tooltipVisible />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
  
                    <Col span={12} >
                        <Form.Item label="ผังงาน">
                        {getFieldDecorator('flow_chart', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Flow chart' }],
                        })(
                            <Slider defaultValue={3} max={5} min={1} tooltipVisible />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="ไมโครคอนโทรลเลอร์">
                        {getFieldDecorator('microcontroller', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Microcontroller'}],
                        })(
                            <Slider defaultValue={3} max={5} min={1} tooltipVisible />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
  
                    <Col span={12} offset={12}>
                        <Form.Item label="ระดมสมอง">
                        {getFieldDecorator('brain_storm', {
                            rules: [{ required: true, message: 'กรุณาเลือกความถนัดทางด้าน Brain storm' }],
                        })(
                            <Slider defaultValue={3} max={5} min={1} tooltipVisible />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                

                <Form.Item>
                    <Button type="primary" onClick={handlePrev}>
                    Back
                    </Button>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                
            </Form>
           <button onClick={handlePrev}>ก่อนหน้า</button>
           <button onClick={nextStep}>ถัดไป</button>
        </div>
    )
}

export default StepForm5