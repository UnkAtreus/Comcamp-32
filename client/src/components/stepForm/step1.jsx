import React, { useEffect } from 'react'
import register from '../../api/register'
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';
import moment from 'moment'

const { Option } = Select



function StepForm1(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props


    useEffect(() => {
        if (user.hasOwnProperty("general")) {
            let generalData = user.general
            console.log("gen ", generalData.birthday)
            delete generalData._id
            generalData.birthday = moment(generalData.birthday, dateFormat)
            // delete generalData.birthday
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
        } else {
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

    const dateFormat = 'YYYY/MM/DD';

    const { getFieldDecorator } = props.form;

    const prefix_th = getFieldDecorator('prefix_th', {
        rules: [{required: true, message: 'กรุณาระบุคำนำหน้าชื่อ'}]
    })(
        <Select style={{ width: 90 }}
            disabled={summary}
        >
            <Option value="ด.ช.">ด.ช.</Option>
            <Option value="ด.ญ.">ด.ญ.</Option>
          <Option value="นาย">นาย</Option>
          <Option value="นางสาว">นางสาว</Option>
        </Select>
    );

    const prefix_eng = getFieldDecorator('prefix_eng', {
        rules: [{required: true, message: 'กรุณาระบุคำนำหน้าชื่อ'}]
    })(
        <Select style={{ width: 90 }}
            disabled={summary}
            defaultValue={"Mr."}
        >
          <Option value="Mr.">Mr.</Option>
          <Option value="Mrs.">Mrs.</Option>
        </Select>
    );

    return (
        <div>
            <h1>ข้อมูลทั่วไป</h1>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col xs={24} md={{span: 4}}>
                        <Form.Item label="ชื่อ (ภาษาไทย)">
                            {getFieldDecorator('fname_th', {
                                rules: [{ required: true, message: 'กรุณากรอกชื่อภาษาไทย' }],
                            })(
                                <Input
                                    addonBefore={prefix_th}
                                    placeholder="สมชาย"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    
                    </Col>
                    <Col xs={24} md={{span: 4, offset:1}}>
                        <Form.Item label="นามสกุล (ภาษาไทย)">
                            {getFieldDecorator('lname_th', {
                                rules: [{ required: true, message: 'กรุณากรอกชื่อภาษาไทย' }],
                            })(
                                <Input
                                    placeholder="ใจดี"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 2}}>
                        <Form.Item label="ชื่อ (ภาษาอังกฤษ)">
                            {getFieldDecorator('fname_eng', {
                                rules: [{ required: true, message: 'กรุณากรอกชื่อภาษาอังกฤษ' }],
                            })(
                                <Input
                                    addonBefore={prefix_eng}
                                    placeholder="Somchai"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 1}}>
                        <Form.Item label="นามสกุล (ภาษาอังกฤษ)">
                            {getFieldDecorator('lname_eng', {
                                rules: [{ required: true, message: 'กรุณากรอกชื่อภาษาอังกฤษ' }],
                            })(
                                <Input
                                    placeholder="Jaidee"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col xs={24} md={4}>
                        <Form.Item label="ชื่อเล่น">
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: 'กรุณากรอกชื่อเล่น' }],
                            })(
                                <Input
                                    placeholder="ชัย"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 1}} >
                        <Form.Item label="เพศ">
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: 'กรุณากรอกเพศ', enum: ['ชาย', 'หญิง'] }],
                            })(
                                <Select disabled={summary}>
                                    <Option value="ชาย">ชาย</Option>
                                    <Option value="หญิง">หญิง</Option>
                                </Select>
                            ,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 1}}>
                        <Form.Item label="วัน-เดือน-ปีเกิด">
                            {getFieldDecorator('birthday', {
                                initialValue:moment('2001/01/01', dateFormat),
                                rules: [{ type: 'object', required: true, message: 'กรุณาเลือกวันเกิด' }],
                            }, 
                            
                            )(<DatePicker 
                                defaultValue={moment('2015/01/01', dateFormat)} 
                                disabled={summary} 
                                style={{width: '100%'}}
                                format={dateFormat}
                                
                                />)}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 1}}>
                        <Form.Item label="กรุ๊ปเลือด">
                            {getFieldDecorator('bloodenum', {
                                rules: [{ required: true, message: 'กรุณากรอกกรุ๊ปเลือด', enum: ['A', 'B', 'AB', 'O'] }],
                            })(
                                <Select disabled={summary} >
                                    <Option value="A">A</Option>
                                    <Option value="B">B</Option>
                                    <Option value="AB">AB</Option>
                                    <Option value="O">O</Option>
                                </Select>
                            ,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 1}}>
                        <Form.Item label="ศาสนา">
                            {getFieldDecorator('religion', {
                                rules: [{ required: true, message: 'กรุณากรอกศาสนา' }],
                            })(
                                <Input
                                    placeholder="พุทธ"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>

                    <Col xs={24} md={{span: 4}}>
                        <Form.Item label="เบอร์โทรศัพท์">
                            {getFieldDecorator('telephone', {
                                rules: [{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก', len: 10 }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="08xxxxxxxx"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 1}}>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'กรุณากรอกอีเมล', type: 'email' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="sample@gmail.com"
                                />,
                            )}
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={{span: 4, offset: 1}}>
                        <Form.Item label="ขนาดเสื้อ">
                            {getFieldDecorator('shirt_size', {
                                rules: [{ required: true, message: 'กรุณากรอกขนาดเสื้อ', enum: ['S', 'M', 'L', 'XL'] }],
                            })(
                                <Select disabled={summary}>
                                    <Option value="SS">SS รอบอก 34</Option>
                                    <Option value="S">S รอบอก 36</Option>
                                    <Option value="M">M รอบอก 38</Option>
                                    <Option value="L">L รอบอก 40</Option>
                                    <Option value="XL">XL รอบอก 42</Option>
                                    <Option value="XXL">XXL รอบอก 44</Option>
                                    <Option value="3XL">3XL รอบอก 48</Option>
                                </Select>
                            ,
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

export default Form.create({ name: 'step1' })(StepForm1)