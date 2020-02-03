import React, { useEffect, useState } from 'react'
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

function StepForm3(props) {

    const {currentStep, handlePrev, handleNext, user, summary } = props
    const alert = useAlert()

    const [accident, setAccident] = useState(false)

    useEffect( () => {
        async function fetchData()  {
            if(user.hasOwnProperty("disease")) {
                let diseaseData = user.disease
                delete diseaseData._id
                if(diseaseData.hasOwnProperty("accident")) {
                    await setAccident(true)
                    await props.form.setFieldsValue({have_accident: "true"})
                } else {
                    await setAccident(false)
                    await props.form.setFieldsValue({have_accident: "false"})
                }
                props.form.setFieldsValue(diseaseData);
            }
        }  
        fetchData()  
    }, []);

    const nextStep = async (payload) => {
        const flag =  await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next 3")
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

    const handleAccident = value => {
        if(value == "true") {
            setAccident(true)
        } else if(value == "false") {
            setAccident(false)
        }
        console.log(accident)
    }

    return (
        <div>
            <h1>สิ่งที่แพ้</h1>
            <Form onSubmit={handleSubmit} >

                <Form.Item label="โรคประจำตัว">
                {getFieldDecorator('disease')(
                    <Input
                    placeholder="โรคหอบหึด"
                    />,
                )}
                </Form.Item>
                <Form.Item label="อาหารที่แพ้">
                {getFieldDecorator('allergy_food')(
                    <Input
                    placeholder="ถั่วเขียว"
                    />,
                )}
                </Form.Item>
                <Form.Item label="ยาที่แพ้">
                {getFieldDecorator('allergy_medic')(
                    <Input
                    placeholder="ยาแอมพลิซิลลิน"
                    />,
                )}
                </Form.Item>
                <Form.Item label="ยาประจำตัว">
                {getFieldDecorator('medic_need')(
                    <Input
                    placeholder="ยาแก้หอบหึด"
                    />,
                )}
                </Form.Item>

                <Form.Item label="อุบัติเหตุในรอบ 6 เดือน">
                {getFieldDecorator('have_accident')(
                    <Select
                    placeholder="Select a option and change input text above"
                    onChange={handleAccident}
                    >
                    <Option value="false">ไม่มี</Option>
                    <Option value="true">มี</Option>
                    </Select>
                )}
                </Form.Item>
                { accident && 
                <Form.Item label="เนื่องจาก">
                {getFieldDecorator('accident', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                })(
                    <Input
                    placeholder="ยาแก้หอบหึด"
                    />,
                )}
                </Form.Item>
                }

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

export default Form.create({name: 'step3'})(StepForm3)