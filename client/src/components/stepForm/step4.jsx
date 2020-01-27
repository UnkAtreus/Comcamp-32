import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select, DatePicker, InputNumber } from 'antd';
function StepForm5(props) {

    const {currentStep, handlePrev, handleNext} = props

//    const [futureInfo, setFutureInfo] = useState({
//        one_faculty: '',
//       one_university: '',
//        two_faculty: '',
//        two_university: '',
//        three_faculty: '',
//        three_university: '',
//        interest: '',
//    })

    const alert = useAlert()

    const nextStep = async () => {
        const flag =  await register.sendData(currentStep, {step0: true})
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next 4")
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
            <h1>ความสนใจ</h1>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col span={12} >
                        <Form.Item label="คณะลำดับที่หนึ่ง">
                        {getFieldDecorator('one_faculty', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item label="มหาวิทยาลัยลำดับที่หนึ่ง">
                        {getFieldDecorator('one_university', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                        })(
                            <Input
                            placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={12}>
                        <Form.Item label="คณะลำดับที่สอง">
                        {getFieldDecorator('two_faculty', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item label="มหาวิทยาลัยลำดับที่สอง">
                        {getFieldDecorator('two_university', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                        })(
                            <Input
                            placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={12} >
                        <Form.Item label="คณะลำดับที่สาม">
                        {getFieldDecorator('three_faculty', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item label="มหาวิทยาลัยลำดับที่สาม">
                        {getFieldDecorator('three_university', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                        })(
                            <Input
                            placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                            />,
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