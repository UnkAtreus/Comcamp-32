import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select, DatePicker, InputNumber } from 'antd';

const { Option } = Select

const province_th = [
    'กรุงเทพฯ',
    'กระบี่',
    'กาญจนบุรี',
    'กาฬสินธุ์',
    'กำแพงเพชร',
    'ขอนแก่น',
    'จันทบุรี',
    'ฉะเชิงเทรา',
    'ชลบุรี',
    'ชัยนาท',
    'ชัยภูมิ',
    'ชุมพร',
    'เชียงใหม่',
    'เชียงราย',
    'ตรัง',
    'ตราด',
    'ตาก',
    'นครนายก',
    'นครปฐม',
    'นครพนม',
    'นครราชสีมา',
    'นครศรีธรรมราช',
    'นครสวรรค์',
    'นนทบุรี',
    'นราธิวาส',
    'น่าน',
    'บึงกาฬ',
    'บุรีรัมย์',
    'ปทุมธานี',
    'ประจวบคีรีขันธ์',
    'ปราจีนบุรี',
    'ปัตตานี',
    'พระนครศรีอยุธยา',
    'พะเยา',
    'พังงา',
    'พัทลุง',
    'พิจิตร',
    'พิษณุโลก',
    'เพชรบุรี',
    'เพชรบูรณ์',
    'แพร่',
    'ภูเก็ต',
    'มหาสารคาม',
    'มุกดาหาร',
    'แม่ฮ่องสอน',
    'ยโสธร',
    'ยะลา',
    'ร้อยเอ็ด',
    'ระนอง',
    'ระยอง',
    'ราชบุรี',
    'ลพบุรี',
    'ลำปาง',
    'ลำพูน',
    'เลย',
    'ศรีสะเกษ',
    'สกลนคร',
    'สงขลา',
    'สตูล',
    'สมุทรปราการ',
    'สมุทรสงคราม',
    'สมุทรสาคร',
    'สระแก้ว',
    'สระบุรี',
    'สิงห์บุรี',
    'สุโขทัย',
    'สุพรรณบุรี',
    'สุราษฎร์ธานี',
    'สุรินทร์',
    'หนองคาย',
    'หนองบัวลำภู',
    'อ่างทอง',
    'อำนาจเจริญ',
    'อุดรธานี',
    'อุตรดิตถ์',
    'อุทัยธานี',
    'อุบลราชธานี',
  ];

function StepForm2(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props
    const alert = useAlert()

    useEffect(() => {
        if(user.hasOwnProperty("school")) {
            let schoolData = user.school
            delete schoolData._id
            props.form.setFieldsValue(schoolData);
        }
    }, []);


    const nextStep = async (payload) => {
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
            console.log('Received values of form: ', values);
            nextStep(values)
          }
        });
      };

    const { getFieldDecorator } = props.form;

    return (
        <div>
            <h1>ประวัติการศึกษา</h1>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col span={16}>
                        <Form.Item label="ชื่อสถานศึกษา">
                        {getFieldDecorator('school_name', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อสถานศึกษา' }],
                        })(
                            <Input
                            placeholder="โรงเรียนคอมแคมป์ 32"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={6} offset={1}>
                        <Form.Item label="จังหวัด">
                        {getFieldDecorator('school_province', {
                            rules: [{ required: true, message: 'กรุณากรอกชื่อสถานศึกษา' }],
                        })(
                            <Select>
                                {
                                    province_th.map( (province) => (
                                        <Option key={province} value={province}>{province}</Option>
                                    )
                                    )
                                }
                            </Select>,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={10}>
                        <Form.Item label="ชั้นปี">
                        {getFieldDecorator('grade', {
                            rules: [{ required: true, message: 'กรุณากรอกชั้นปีการศึกษา', enum:['4', '5', '6', 'ปวช'] }],
                        })(
                            <Select>
                                <Option value={'4'}>ม.4</Option>
                                <Option value={'5'}>ม.5</Option>
                                <Option value={'6'}>ม.6</Option>
                                <Option value={'ปวช'}>ปวช</Option>
                            </Select>,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={10} offset={1}>
                        <Form.Item label="เกรดเฉลี่ย">
                        {getFieldDecorator('gpax', {
                            rules: [{ required: true, message: 'กรุณากรอกเกรดเฉลี่ย' }],
                        })(
                            <InputNumber min={0} max={4} step={0.01}
                            placeholder="4.00"
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

export default Form.create({name: 'step2'})(StepForm2)