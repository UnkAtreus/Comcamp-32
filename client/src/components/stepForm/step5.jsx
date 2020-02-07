import React, { useEffect } from 'react'
import register from '../../api/register'
import { Form, Input, Checkbox, Row, Col, Radio } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

const options = [
    { label: 'หลักสูตรวิศวกรรมคอมพิวเตอร์', value: 'Reg' },
    { label: 'หลักสูตรวิศวกรรมคอมพิวเตอร์ (นานาชาติ)', value: 'Inter' },
    { label: 'หลักสูตรวิทยาศาสตร์ข้อมูลสุขภาพ', value: 'HDS' },
  ];

function StepForm5(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props

    useEffect(() => {
        if (user.hasOwnProperty("future")) {
            let futureData = user.future
            props.form.setFieldsValue({
                one_department: futureData.one.department,
                one_faculty: futureData.one.faculty,
                one_university: futureData.one.university,
                two_department: futureData.two.department,
                two_faculty: futureData.two.faculty,
                two_university: futureData.two.university,
                three_department: futureData.three.department,
                three_faculty: futureData.three.faculty,
                three_university: futureData.three.university,
                interest: futureData.interest,
                one_camp: futureData.one_camp.camp,
                one_camp_university: futureData.one_camp.university,
                two_camp: futureData.two_camp.camp,
                two_camp_university: futureData.two_camp.university,
                three_camp: futureData.three_camp.camp,
                three_camp_university: futureData.three_camp.university,
            });
        }
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 4")
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

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    const { getFieldDecorator } = props.form;
    return (
        <div>
            <h1>ความสนใจ</h1>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col md={{span:6 }} xs={24}>
                        <Form.Item label="ภาควิชาลำดับที่หนึ่ง">
                            {getFieldDecorator('one_department', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="ภาควิชาวิศวกรรมคอมพิวเตอร์"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:6, offset:1}} xs={24}>
                        <Form.Item label="คณะลำดับที่หนึ่ง">
                            {getFieldDecorator('one_faculty', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="คณะวิศวกรรมศาสตร์"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:10,offset:1}} xs={24}>
                        <Form.Item label="มหาวิทยาลัยลำดับที่หนึ่ง">
                            {getFieldDecorator('one_university', {
                                // rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
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
                    <Col md={{span:6 }} xs={24}>
                        <Form.Item label="ภาควิชาลำดับที่สอง">
                            {getFieldDecorator('two_department', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="ภาควิชาวิศวกรรมคอมพิวเตอร์"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:6, offset:1}} xs={24}>
                        <Form.Item label="คณะลำดับที่สอง">
                            {getFieldDecorator('two_faculty', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="คณะวิศวกรรมศาสตร์"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:10,offset:1}} xs={24}>
                        <Form.Item label="มหาวิทยาลัยลำดับที่สอง">
                            {getFieldDecorator('two_university', {
                                // rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
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
                    <Col md={{span:6 }} xs={24}>
                        <Form.Item label="ภาควิชาลำดับที่สาม">
                            {getFieldDecorator('three_department', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="ภาควิชาวิศวกรรมคอมพิวเตอร์"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:6, offset:1}} xs={24}>
                        <Form.Item label="คณะลำดับที่สาม">
                            {getFieldDecorator('three_faculty', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="คณะวิศวกรรมศาสตร์"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:10,offset:1}} xs={24}>
                        <Form.Item label="มหาวิทยาลัยลำดับที่สาม">
                            {getFieldDecorator('three_university', {
                                // rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item className="Right-Radio" label="หลักสูตรของภาควิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ที่สนใจ">
                    {getFieldDecorator('interest', {
                        // rules: [{ required: true, message: 'กรุณาเลือกหลักสูตรที่ต้องการ' }]
                    })(
                        <Checkbox.Group options={options} onChange={onChange} />,
                    )}
                </Form.Item>
                <h1>ค่ายที่เคยเข้าร่วม</h1>
                <Row>
                    <Col md={{span:11}} xs={24}>
                        <Form.Item label="ค่ายที่เคยเข้าร่วม">
                            {getFieldDecorator('one_camp', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="ค่าย Comcamp32"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:11,offset:2}} xs={24}>
                        <Form.Item label="มหาวิทยาลัย">
                            {getFieldDecorator('one_camp_university', {
                                // rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
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
                    <Col md={{span:11}} xs={24}>
                        <Form.Item label="ค่ายที่เคยเข้าร่วม">
                            {getFieldDecorator('two_camp', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="ค่าย Comcamp32"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:11,offset:2}} xs={24}>
                        <Form.Item label="มหาวิทยาลัย">
                            {getFieldDecorator('two_camp_university', {
                                // rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
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
                    <Col md={{span:11}} xs={24}>
                        <Form.Item label="ค่ายที่เคยเข้าร่วม">
                            {getFieldDecorator('three_camp', {
                                // rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="ค่าย Comcamp32"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={{span:11,offset:2}} xs={24}>
                        <Form.Item label="มหาวิทยาลัย">
                            {getFieldDecorator('three_camp_university', {
                                // rules: [{ required: true, message: 'กรุณากรอกชื่อมหาวิทยาลัย' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
                                />,
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

export default Form.create({ name: 'step5' })(StepForm5)