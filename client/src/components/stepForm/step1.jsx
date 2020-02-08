import React, { useEffect } from 'react'
import register from '../../api/register'
import { Form, Input, Row, Col, Select, DatePicker } from 'antd';
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
        rules: [{required: !summary, message: 'กรุณาระบุคำนำหน้าชื่อ'}]
    })(
        <Select style={{ 'width':'90px'}}
            disabled={summary}
        >
            <Option value="ด.ช.">ด.ช.</Option>
            <Option value="ด.ญ.">ด.ญ.</Option>
          <Option value="นาย">นาย</Option>
          <Option value="นางสาว">นางสาว</Option>
        </Select>
    );

    const prefix_eng = getFieldDecorator('prefix_eng', {
        rules: [{required: !summary, message: 'กรุณาระบุคำนำหน้าชื่อ'}]
    })(
        <Select style={{ width: 90 }}
            disabled={summary}
            defaultValue={"Mr."}
        >
          <Option value="Mr.">Mr.</Option>
          <Option value="Miss">Miss</Option>
        </Select>
    );

    return (
        <div>
            <h1>ข้อมูลทั่วไป</h1>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col xs={24} md={{span: 8}}>
                        <Form.Item label="ชื่อ (ภาษาไทย)">
                            {getFieldDecorator('fname_th', {
                                rules: [
                                    { 
                                        required: !summary, 
                                        message: 'กรุณากรอกชื่อภาษาไทย', 
                                        pattern: new RegExp(/^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]+$/) 
                                    }
                                ],
                            })(
                                <Input
                                    addonBefore={prefix_th}
                                    placeholder="สมชาย"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    
                    </Col>
                    <Col xs={24} md={{span: 8, offset:1}}>
                        <Form.Item label="นามสกุล (ภาษาไทย)">
                            {getFieldDecorator('lname_th', {
                                rules: [{ required: !summary, 
                                    message: 'กรุณากรอกชื่อภาษาไทย', 
                                    pattern: new RegExp(/^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]+$/) }],
                            })(
                                <Input
                                    placeholder="ใจดี"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:4 , offset:1}}>
                        <Form.Item label="ชื่อเล่น">
                            {getFieldDecorator('nickname', {
                                rules: [{ required: !summary, message: 'กรุณากรอกชื่อเล่น' }],
                            })(
                                <Input
                                    placeholder="ชัย"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={24} md={{span: 8}}>
                        <Form.Item label="Firstname">
                            {getFieldDecorator('fname_eng', {
                                rules: [
                                    { 
                                        required: !summary, 
                                        message: 'กรุณากรอกชื่อภาษาอังกฤษ', 
                                        pattern: new RegExp(/^[A-Za-z]+$/)
                                    }
                                ],
                            })(
                                <Input
                                    addonBefore={prefix_eng}
                                    placeholder="Somchai"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 8, offset: 1}}>
                        <Form.Item label="Lastname">
                            {getFieldDecorator('lname_eng', {
                                rules: [{ required: !summary, message: 'กรุณากรอกชื่อภาษาอังกฤษ', pattern: new RegExp(/^[A-Za-z]+$/)}],
                            })(
                                <Input
                                    placeholder="Jaidee"
                                    disabled={summary}
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:4 , offset:1}}>
                        <Form.Item label="เพศ">
                            {getFieldDecorator('sex', {
                                rules: [{ required: !summary, message: 'กรุณากรอกเพศ', enum: ['ชาย', 'หญิง'] }],
                            })(
                                <Select disabled={summary} placeholder="ระบุเพศ">
                                    <Option value="ชาย">ชาย</Option>
                                    <Option value="หญิง">หญิง</Option>
                                </Select>
                            ,
                            )}
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                                     
                    <Col xs={24} md={{span: 4}}>
                        <Form.Item label="วัน-เดือน-ปีเกิด">
                            {getFieldDecorator('birthday', {
                                initialValue:moment('2001/01/01', dateFormat),
                                rules: [{ type: 'object', required: !summary, message: 'กรุณาเลือกวันเกิด' ,pattern: new RegExp(/[0-3][0-9]-[0-1][0-9]-[0-2][0-9][0-9]/)}],
                            }, 
                            
                            )(<DatePicker 
                                disabled={summary} 
                                style={{width: '100%'}}
                                format={dateFormat}
                                
                                />)}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 4, offset: 1}}>
                        <Form.Item label="กรุ๊ปเลือด">
                            {getFieldDecorator('bloodenum', {
                                rules: [{ required: !summary, message: 'กรุณากรอกกรุ๊ปเลือด', enum: ['A', 'B', 'AB', 'O'] }],
                            })(
                                <Select disabled={summary} placeholder="ระบุกรุ๊ปเลือด">
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
                                rules: [{ required: !summary, message: 'กรุณากรอกศาสนา' }],
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
                                rules: [{ required: !summary, message: 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก', pattern: new RegExp(/^[0-9]{10}$/)}],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="08xxxxxxxx"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 6, offset: 1}}>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [{ required: !summary, message: 'กรุณากรอกอีเมล', type: 'email' }],
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
                                rules: [{ required: !summary, message: 'กรุณากรอกขนาดเสื้อ', enum: ['S', 'M', 'L', 'XL','XXL','3XL','4XL'] }],
                            })(
                                <Select disabled={summary} placeholder="ระบุขนาดเสื้อ">
                                
                                    <Option value="S">S รอบอก 32</Option>
                                    <Option value="M">M รอบอก 36</Option>
                                    <Option value="L">L รอบอก 40</Option>
                                    <Option value="XL">XL รอบอก 44</Option>
                                    <Option value="XXL">XXL รอบอก 48</Option>
                                    <Option value="3XL">3XL รอบอก 52</Option>
                                    <Option value="4XL">4XL รอบอก 54</Option>
                                </Select>
                            ,
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                {!summary &&
                    <Form.Item>
                        <div className="Button-Row">
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