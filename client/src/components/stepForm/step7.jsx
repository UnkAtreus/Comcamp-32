import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select } from 'antd';

const { Option } = Select

const locations = ['มา มจธ. ด้วยจนเอง', 'สายใต้ใหม่ ถนนบรม (ใต้)', 'ขนส่งเอกมัย (ตะวันออก)', 'หัวลำโพง (รถไฟ)', 'อนุเสาวรีย์ชัยสมรถภูมิ (รถตู้)']

function StepForm7(props) {

    const {currentStep, handlePrev, handleNext, user} = props

    const alert = useAlert()

    useEffect(() => {
        if(user.hasOwnProperty("location")) {
            let locationData = user.location
            props.form.setFieldsValue({location: locationData});
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
            <h1>สถานที่ที่งการให้พี่ค่ายไปรับ</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Item label="สถานที่ที่ต้องการให้พี่ค่ายไปรับ">
                    {getFieldDecorator('location', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                        initialValue:"มา มจธ. ด้วยจนเอง"
                    })(
                    <Select>
                    {
                        locations.map( (location) => (
                            <Option key={location} value={location}>{location}</Option>
                        )
                        )
                    }
                    </Select>,
                    )}
                </Form.Item>
                
                

                <Form.Item>
                    <Button type="primary" onClick={handlePrev}>
                    Back
                    </Button>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                
            </Form>
        </div>
    )
}

export default Form.create({name: 'step7'})(StepForm7)