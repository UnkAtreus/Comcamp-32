import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';

const { Option } = Select

function StepForm1(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props
    
    const alert = useAlert()
    
    useEffect(() => {
        if(user.hasOwnProperty("general")) {
            let generalData = user.general
            console.log("gen ", generalData.birthday)
            delete generalData._id
            delete generalData.birthday
            props.form.setFieldsValue(generalData)
        }
    }, []);
    
    const nextStep = async (payload) => {
        console.log("payload ", payload)
        const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 2")
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
            console.log('Received values of form: ', values)
            console.log('birthday', values['birthday'])
            nextStep({
                ...values,
                birthday: values['birthday'].format('YYYY-MM-DD')
            })
          }
        });
      };

    const { getFieldDecorator } = props.form;

    return (
        <div>
            <h1>ข้อมูลทั่วไป</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Item label="ชื่อภาษาไทย">
                {getFieldDecorator('name_th', {
                    rules: [{ required: true, message: 'กรุณากรอกชื่อภาษาไทย' }],
                })(
                    <Input
                    placeholder="สมชาย  ใจดี"
                    />,
                )}
                </Form.Item>

                <Form.Item label="ชื่อภาษาอังกฤษ">
                {getFieldDecorator('name_eng', {
                    rules: [{ required: true, message: 'กรุณากรอกชื่อภาษาอังกฤษ' }],
                })(
                    <Input
                    placeholder="Somchai  Jaidee"
                    />,
                )}
                </Form.Item>

                <Row>
                    <Col span={4}>
                        <Form.Item label="ชื่อเล่น">
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อเล่น' }],
                        })(
                            <Input
                            placeholder="ชัย"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={4} offset={1}>
                        <Form.Item label="เพศ">
                        {getFieldDecorator('sex', {
                            rules: [{ required: true, message: 'กรุณากรอกเพศ', enum: ['ชาย', 'หญิง']}],
                        })(
                            <Select>
                                <Option value="ชาย">ชาย</Option>
                                <Option value="หญิง">หญิง</Option>
                            </Select>
                            ,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={4} offset={1}>
                        <Form.Item label="วันเกิด">
                        {getFieldDecorator('birthday', {
                            rules: [{ type: 'object', required: true, message: 'กรุณาเลือกวันเกิด' }],
                        })(<DatePicker />)}
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="กรุ๊ปเลือด">
                        {getFieldDecorator('bloodenum', {
                            rules: [{ required: true, message: 'กรุณากรอกเพศ', enum: ['A', 'B', 'AB', 'O']}],
                        })(
                            <Select>
                                <Option value="A">A</Option>
                                <Option value="B">B</Option>
                                <Option value="AB">AB</Option>
                                <Option value="O">O</Option>
                            </Select>
                            ,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={4} offset={1}>
                        <Form.Item label="ศาสนา">
                        {getFieldDecorator('religion', {
                            rules: [{ required: true, message: 'กรุณากรอกศาสนา' }],
                        })(
                            <Input
                            placeholder="พุทธ"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={4}>
                        <Form.Item label="ไซต์เสื้อ">
                        {getFieldDecorator('shirt_size', {
                            rules: [{ required: true, message: 'กรุณาระไซต์เสื้อ', enum: ['S', 'M', 'L', 'XL']}],
                        })(
                            <Select>
                                <Option value="S">S</Option>
                                <Option value="M">M</Option>
                                <Option value="L">L</Option>
                                <Option value="XL">XL</Option>
                            </Select>
                            ,
                        )}
                        </Form.Item>
                    </Col>

                    <Col span={4} offset={1}>
                        <Form.Item label="เบอร์โทรศัพท์">
                        {getFieldDecorator('telephone', {
                            rules: [{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก', len:10}],
                        })(
                            <Input
                            placeholder="0903234466"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={6} offset={1}>
                        <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก', type: 'email'}],
                        })(
                            <Input
                            placeholder="comcamp32@gmail.com"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
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

export default Form.create({name: 'step1'})(StepForm1)