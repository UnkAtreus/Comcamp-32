import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select, DatePicker, InputNumber, Slider  } from 'antd';

function StepForm7(props) {

    const {currentStep, handlePrev, handleNext, user} = props

    const alert = useAlert()

    useEffect(() => {
        if(user.hasOwnProperty("ability")) {
            let abilityData = user.ability
            props.form.setFieldsValue(abilityData);
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
            <h1>คำถาม</h1>
            <Form onSubmit={handleSubmit} >
                
                
                

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