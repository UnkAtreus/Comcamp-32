import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Radio } from 'antd';
function StepForm5(props) {

    const {currentStep, handlePrev, handleNext, user, summary } = props

    const alert = useAlert()

    useEffect(() => {
        if(user.hasOwnProperty("future")) {
            let futureData = user.future
            props.form.setFieldsValue({
                one_faculty: futureData.one.faculty,
                one_university: futureData.one.university,
                two_faculty: futureData.two.faculty,
                two_university: futureData.two.university,
                three_faculty: futureData.three.faculty,
                three_university: futureData.three.university,
                interest: futureData.interest
            });
        }
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        const flag =  await register.sendData(currentStep, payload)
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
                    <Col span={10} >
                        <Form.Item label="คณะลำดับที่หนึ่ง">
                        {getFieldDecorator('one_faculty', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            disabled={summary}
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={1}>
                        <Form.Item label="มหาวิทยาลัยลำดับที่หนึ่ง">
                        {getFieldDecorator('one_university', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                        })(
                            <Input
                            disabled={summary}
                            placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={10}>
                        <Form.Item label="คณะลำดับที่สอง">
                        {getFieldDecorator('two_faculty', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            disabled={summary}
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={1}>
                        <Form.Item label="มหาวิทยาลัยลำดับที่สอง">
                        {getFieldDecorator('two_university', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                        })(
                            <Input
                            disabled={summary}
                            placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={10} >
                        <Form.Item label="คณะลำดับที่สาม">
                        {getFieldDecorator('three_faculty', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            disabled={summary}
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={1} >
                        <Form.Item label="มหาวิทยาลัยลำดับที่สาม">
                        {getFieldDecorator('three_university', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                        })(
                            <Input
                            disabled={summary}
                            placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label="หลักสูตรที่สนใจ">
                {getFieldDecorator('interest', {
                    rules: [{required: true, message: 'กรุณาเลือกหลักสูตรที่ต้องการ'}]
                })(
                    <Radio.Group disabled={summary}>
                    <Radio value="reg">Regular</Radio>
                    <Radio value="inter">Inter</Radio>
                    <Radio value="hds">HDS</Radio>
                    </Radio.Group>,
                )}
                </Form.Item>
                {!summary && 
                <Form.Item>
                    <Button type="primary" onClick={handlePrev}>
                    Back
                    </Button>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                }
            </Form>
        </div>
    )
}

export default Form.create({name: 'step5'})(StepForm5)