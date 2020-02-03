import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select } from 'antd';

const { Textarea } = Input


function StepForm8(props) {

    const {currentStep, handlePrev, handleNext, user, summary } = props

    const alert = useAlert()

    useEffect(() => {
        if(user.hasOwnProperty("question")) {
            let questionData = user.question
            delete questionData._id
            props.form.setFieldsValue(questionData);
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
                <p>
                1. หากน้อง ๆ ไปทำภารกิจในเกมกับเพื่อนอีก 2 คน โดยคนหนึ่งเป็นเพื่อนสนิทของน้อง และอีก
                คนหนึ่งเป็นแฟนของเพื่อนเราที่เราไม่เคยรู้จักเป็นการส่วนตัวมาก่อน ปรากฏว่าเมื่อภารกิจสำเร็จแล้ว น้อง
                ได้รับรางวัลพิเศษที่หายากมาก ๆ แต่เพียงผู้เดียว (เพิ่มเติมจากรางวัลของภารกิจ) และเพื่อน ๆ ของน้องไม่
                ทราบเรื่องนี้น้องจะทำอย่างไร
                </p>
                <Form.Item>
                    {getFieldDecorator('question1', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                            placeholder="โรคหอบหึด"
                        />,
                    )}
                </Form.Item>
                <p>
                2. ในขณะที่น้องกำลังเล่นเกม Comcamp#32 อยู่นั้น น้องก็มาถึงดันเจี้ยนหรือถ้ำที่เต็มไปด้วย
                มอนสเตอร์แห่งหนึ่ง และน้องก็อยากเข้าไปพิชิตดันเจี้ยนแห่งนี้มาก ๆ แต่มีเงื่อนไขว่าน้องจะต้องเข้าไปพร้อม
                กับผู้เล่นคนอื่นอีก 2 คนเท่านั้น และผู้เล่นที่น้องพบอยู่หน้าดันเจี้ยนนั้นก็คือ Noobmaster69 ผู้เล่นที่ขึ้นชื่อ
                เรื่องความขี้โกง ชอบเข้าไปกลั่นแกล้งทีมฝ่ายตรงข้าม และน้องไม่ชอบผู้เล่นแบบนี้เลย กับผู้เล่นอีกคนที่น้องไม่
                รู้จักมาก่อน และดูท่าทางเหมือนคนที่ชอบเล่นเกมคนเดียวไม่สุงสิงกับใคร น้องจะใช้วิธีการใดในการรับมือกับ
                ทั้งสองคนนี้ และจะทำงานด้วยกันอย่างไรเพื่อเอาชนะดันเจี้ยนนี้

                </p>
                <Form.Item>
                    {getFieldDecorator('question2', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                        placeholder="โรคหอบหึด"
                        />,
                    )}
                </Form.Item>
                

                <p>
                3. จากเหตุการณ์ในข้อที่แล้ว น้อง ๆ สามารถพาทั้งสองคนนั้นเข้ามาในดันเจี้ยนได้สำเร็จ แต่กลับ
                พบว่าภายในถ้ำนั้นเป็นเขาวงกตที่ซับซ้อน โชคดีที่ Noobmaster69 เป็นผู้เล่นสายเติมเงิน จึงได้รับแผนที่ของ
                ดันเจี้ยนนี้มาไว้ในมือ โดยระบุจำนวนมอนสเตอร์ที่ต้องเจอระหว่างทางเอาไว้ด้วย
                </p>
                <p>
                น้อง ๆ รู้เส้นทางแล้ว แต่เพื่อนอีก 2 คนไม่เข้าใจว่าทำไมน้องจึงเลือกเส้นทางนั้น น้อง ๆ จึงต้องอธิบายวิธีหา
                เส้นทางที่ง่ายที่สุด เจอมอนสเตอร์ระหว่างทางน้อยที่สุด เพื่อผ่านเข้าไปเอาชนะบอสหรือหัวหน้าของเหล่ามอน
                สเตอร์ และรับรางวัลของดันเจี้ยนนี้ไปให้จงได้
                </p>


                <Form.Item>
                    {getFieldDecorator('question3', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                        placeholder="โรคหอบหึด"
                        />,
                    )}
                </Form.Item>
                <p>
                4. หากน้อง ๆ สามารถนำสกิลหรือทักษะภายในเกมออกมาใช้ภายในโลกความจริงได้ 1 อย่าง
                น้องจะเลือกสกิลหรือทักษะใด แล้วน้องจะใช้ทักษะหรือสกิลนั้นทำอะไรในโลกความจริงบ้าง
                </p>


                <Form.Item>
                    {getFieldDecorator('question4', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                        placeholder="โรคหอบหึด"
                        />,
                    )}
                </Form.Item>
                <p>
                5. หากน้องกับเพื่อนของน้องติดค่าย Comcamp#32 ทั้งคู่ น้องอยากไปค่ายนี้มาก ๆ แต่เพื่อน
                น้องไม่อยากไป น้องจะมีวิธีโฆษณาค่ายนี้อย่างไร เพื่อให้เพื่อนอยากมาค่ายนี้กับน้อง
                </p>


                <Form.Item>
                    {getFieldDecorator('question5', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                        placeholder="โรคหอบหึด"
                        />,
                    )}
                </Form.Item>

                <p>
                6. หลังเลิกเรียน น้อง ๆ รีบกลับบ้านเพื่อจะไปเล่นเกม Comcamp#32 ที่เพิ่งกลับมาเปิด
                ให้บริการอีกครั้ง แต่เมื่อน้อง ๆ กลับมาถึงบ้านก็พบว่าคุณแม่ของน้อง ๆ กำลังเดือดร้อนอยู่ เพราะคุณแม่ของ
                น้อง ๆ ได้ทำเพชร 11 เม็ด กับคริสตัลอีก 1 เม็ดปนกัน ทั้งหมดมีหน้าตาเหมือนกัน ต่างกันที่น้ำหนักของ
                คริสตัลที่อาจจะเบากว่าหรือหนักกว่าเพชรอยู่เล็กน้อยเท่านั้น ในบ้านของน้องไม่มีตาชั่งแบบอื่นนอกจากตาชั่ง
                สองแขนเท่านั้น น้อง ๆ อยากไปเล่นเกมมาก แต่ด้วยความเป็นเด็กดีของคุณแม่ น้อง ๆ จึงต้องช่วยคุณแม่
                เสียก่อน ดังนั้น จึงอยากให้น้อง ๆ หยิบปากกาเคมีนำโชคของน้อง ๆ ขึ้นมา และหาวิธีชั่งน้ำหนักเพื่อหาคริสตัล
                ออกมาให้ได้โดยเร็วที่สุด
                </p>


                <Form.Item>
                    {getFieldDecorator('question6', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                        placeholder="โรคหอบหึด"
                        />,
                    )}
                </Form.Item>

                <p>
                7. ในช่วงเวลา 10 ปีมานี้มีเทคโนโลยีใหม่ ๆ เกิดขึ้นมากมาย น้อง ๆ คิดว่าเทคโนโลยีใดเป็นที่
                กล่าวถึงหรือน่าสนใจที่สุด แล้วน้องคิดว่าในอนาคต เทคโนโลยีนั้นจะสร้างผลกระทบใดในสังคมบ้าง
                </p>


                <Form.Item>
                    {getFieldDecorator('question7', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                        placeholder="โรคหอบหึด"
                        />,
                    )}
                </Form.Item>

                <p>
                8. เมื่อต้องสร้างบอสกลุ่มใหม่ขึ้นมาในเกม เหล่าทีมงานของเกม Comcamp#32 จึงได้ตัดสินใจ
                นำสัตว์จากปีนักษัตรมาเป็นต้นแบบในการสร้างบอสตัวใหม่ทั้ง 12 ตัว แต่เนื่องจากกลัวว่าผู้เล่นจะเดาได้ว่า
                บอสตัวต่อไปจะเป็นอะไร จึงตัดสินใจเรียงลำดับปีนักษัตรใหม่ ดังนี้
                (รูป) ระกา มะเส็ง วอก ฉลู ขาล มะเมีย ชวด เถาะ มะโรง มะแม กุน
                น้อง ๆ คิดว่า ทีมงานใช้อะไรเป็นเกณฑ์ในการเรียงลำดับดังกล่าง จงอธิบาย
                </p>


                <Form.Item>
                    {getFieldDecorator('question8', {
                        rules: [{required: true, message: 'กรุณาระบุสถานที่'}],
                    })(
                        <Input
                        placeholder="โรคหอบหึด"
                        />,
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
                }|
            </Form>
        </div>
    )
}

export default Form.create({name: 'step8'})(StepForm8)