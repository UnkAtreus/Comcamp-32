import React, { useEffect } from 'react'
import register from '../../api/register'
import { Form, Input, Button, Row, Col, Select } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';
import img8 from '../../image/img8.png'
import { useAlert } from 'react-alert'

const { Textarea } = Input


function StepForm8(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props
    const alert = useAlert()


    useEffect(() => {
        if (user.hasOwnProperty("question")) {
            let questionData = user.question
            delete questionData._id
            props.form.setFieldsValue(questionData);
        }
        // props.form.setFieldsValue({have_accident: false})
    }, []);

    const nextStep = async (payload) => {
        const flag = await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next 5")
            alert.success("บันทึกข้อมูลเสร็จสิ้น")
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
    const { getFieldDecorator } = props.form;
    return (
        <div>
            <h1>คำถาม</h1>
            <Form onSubmit={handleSubmit} >
                <p>
                    1. หากน้องต้องไปทำภารกิจในเกมกับเพื่อนอีกสองคน ซึ่งคนหนึ่งเป็นเพื่อนสนิทของน้อง ส่วนอีก คนเป็นแฟนของเพื่อนน้อง 
                    โดยที่น้องไม่เคยรู้จักเป็นการส่วนตัวมาก่อน ปรากฏว่าเมื่อภารกิจสำเร็จแล้ว น้อง ได้รับรางวัลพิเศษที่หายากมากและมีเพียงชิ้นเดียว 
                    (เพิ่มเติมจากรางวัลของภารกิจ) แต่เพื่อนของน้องไม่ทราบ เรื่องนี้ น้องจะจัดการรางวัลชิ้นนี้อย่างไร เพราะเหตุใด
                </p>
                <Form.Item>
                    {getFieldDecorator('question1', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                            disabled={summary}
                            autoSize={{ minRows: 4 }}
                            placeholder="กรอกคำตอบที่นี่..."
                        />,
                    )}
                </Form.Item>
                <p>
                    2. ในขณะที่น้องกำลังเล่นเกม Comcamp#32 อยู่ ทันใดนั้น น้องพบว่าตนได้มาติดอยู่ในเขาวงกต แห่งหนึ่งซึ่งเต็มไปด้วยศัตรูมากมาย 
                    ภายในเขาวงกตนั้น น้องพบกับผู้เล่นอีกสองคน คนแรกคือ Inwza007 ผู้ เล่นที่ขึ้นชื่อเรื่องความขี้โกง มีนิสัยชอบกลั่นแกล้งทีมฝ่ายตรงข้าม 
                    และน้องไม่ชอบคนแบบนี้เลย กับผู้เล่นอีก คนที่น้องไม่รู้จักมาก่อน ทั้งยังดูท่าทางเหมือนคนที่มักจะอยู่คนเดียวไม่สุงสิงกับใคร น้องรู้ดีว่าน้องไม่สามารถ
                    หนีออกจากเขาวงกตนี้ได้ด้วยตัวคนเดียวแน่นอน และจำเป็นต้องขอความช่วยเหลือของทั้งสองคน น้องจะมีวิธี สร้างปฏิสัมพันธ์และทำงานร่วมกับทั้งสองคนนั้นอย่างไร 

                </p>
                <Form.Item>
                    {getFieldDecorator('question2', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                            disabled={summary}
                            autoSize={{ minRows: 4 }}
                            placeholder="กรอกคำตอบที่นี่..."
                        />,
                    )}
                </Form.Item>

                <p>
                    3. จากเหตุการณ์ในข้อที่แล้ว น้องสามารถทำความรู้จักและทำงานร่วมกับคนทั้งสองได้สำเร็จ ต่อมา น้องเริ่มหาทางออกจากเขาวงกตที่ซับซ้อน แต่เมื่อไปถึงห้องสุดท้าย 
                    ทางออกกลับถูกล็อกอยู่ เคราะห์ดีที่ เพื่อนในกลุ่มของน้องได้พบกับข้อความที่ผู้เล่นคนก่อน ๆ ได้สลักทิ้งไว้ตามผนัง น้องจะต้องตามหากุญแจวิเศษ ที่ถูกซ่อนอยู่ในเขาวงกตนี้ 
                    แต่ต้องระวังไม่ให้เจอกับผู้พิทักษ์ที่คอยไล่ล่าคนที่ติดอยู่ในเขาวงกตนี้เช่นกัน ข้อความนั้นบอกว่า ผู้พิทักษ์และกุญแจจะเปลี่ยนที่อยู่ของตนอยู่ตลอด แต่มีเงื่อนไขที่ต้องทำตามดังนี้ 
                </p>
                    <ol >
                    <li className="CC">ต้องมีผู้พิทักษ์เฝ้ายามอยู่ในห้อง B หรือมีกุญแจถูกซ่อนอยู่ในห้อง A ก็ได้</li>
                    <li className="CC">กุญแจถูกซ่อนอยู่ในห้อง D หรือมีกุญแจถูกซ่อนอยู่ในห้อง A ในตอนที่ห้อง B ไม่มีผู้พิทักษ์</li>
                    <li className="CC">ห้อง C จะมีผู้พิทักษ์เฝ้ายามอยู่ก็ต่อเมื่อห้อง B ไม่มีผู้พิทักษ์อยู่</li>  
                    <li className="CC">ตอนที่ผู้พิทักษ์ไม่ได้อยู่ในห้อง C ตอนนั้นกุญแจจะไม่อยู่ในห้อง A</li>  
                    <li className="CC">ถ้ากุญแจอยู่ในห้อง A แล้วจะมีผู้พิทักษ์เฝ้ายามอยู่ในห้อง B</li> 
                    </ol>
                <p>
                    เมื่ออ่านข้อความจบ เพื่อนของน้องคนที่เหมือนจะไม่ชอบสุงสิงกับใครได้ใช้ความสามารถพิเศษ และสัมผัสได้ว่า หนึ่งในเงื่อนไขเหล่านี้ถูกเพิ่มเข้าไปทีหลังโดยปีศาจผู้ชั่วร้ายเพื่อหลอกให้คนเข้าใจผิด
                    แต่ไม่ทราบว่าเป็นข้อไหน จากเวลาที่ผ่านมายาวนานทำให้ผู้พิทักษ์ผุพังจนเหลืออยู่เพียงตนเดียวเท่านั้น จากเงื่อนไขข้างต้น น้องคิดว่า กุญแจและผู้พิทักษ์จะอยู่ในห้องใดบ้าง เพราะเหตุใด
                </p>



                <Form.Item>
                    {getFieldDecorator('question3', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                        disabled={summary}
                        autoSize={{ minRows: 4 }}
                        placeholder="กรอกคำตอบที่นี่..."
                        
                        />,
                    )}
                </Form.Item>
                <p>
                    4.หากวันหนึ่งน้องกลายเป็นซุปเปอร์ฮีโร่ และมีพลังพิเศษหนึ่งอย่าง น้องอยากได้พลังอะไร แล้ว น้องคิดว่าควรใช้พลังนั้นทำอะไรบ้าง 
                </p>


                <Form.Item>
                    {getFieldDecorator('question4', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                        disabled={summary}
                        autoSize={{ minRows: 4 }}
                        placeholder="กรอกคำตอบที่นี่..."
                        
                        />,
                        )}
                </Form.Item>
                <p>
                    5.หากน้องกับเพื่อนของน้องติดค่าย Comcamp#32 ทั้งคู่ น้องอยากไปค่ายนี้มาก ๆ แต่เพื่อน น้องไม่อยากไป 
                    น้องจะมีวิธีโฆษณาค่ายนี้อย่างไร เพื่อให้เพื่อนอยากมาค่ายนี้กับน้อง 
                </p>


                <Form.Item>
                    {getFieldDecorator('question5', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                        disabled={summary}
                        autoSize={{ minRows: 4 }}
                        placeholder="กรอกคำตอบที่นี่..."
                        
                        />,
                    )}
                </Form.Item>

                <p>
                    6.หลังเลิกเรียน น้องรีบกลับบ้านเพื่อจะไปเล่นเกม Comcamp#32 ที่เพิ่งกลับมาเปิดให้บริการ อีกครั้ง แต่เมื่อน้องกลับมาถึงบ้าน 
                    กลับพบว่าคุณแม่ของน้องกำลังเดือดร้อนอยู่ เพราะคุณแม่ของน้องได้ทำ เพชรสิบเอ็ดเม็ดกับพลอยอีกหนึ่งเม็ดปนกัน ทั้งเพชรและพลอยทุกชิ้นมีหน้าตาเหมือนกัน 
                    น้องรู้ว่าน้ำหนักของ พลอยต่างกับเพชรเพียงเล็กน้อย แต่น้องไม่รู้ว่าพลอยนั้นเบากว่าหรือหนักกว่าเพชรกันแน่ ในบ้านของน้องไม่มี ตาชั่งแบบอื่นนอกจากตาชั่งสองแขนเท่านั้น 
                    น้องอยากไปเล่นเกมมาก แต่ด้วยความเป็นเด็กดีของคุณแม่ น้อง จึงต้องช่วยคุณแม่เสียก่อน ดังนั้น จึงอยากให้น้องหยิบปากกาเคมีนำโชคของน้องขึ้นมา และหาวิธีชั่งน้ำหนัก 
                    เพื่อหาพลอยออกมาให้ได้โดยใช้จำนวนการชั่งที่น้อยที่สุด โดยอธิบายเป็นขั้นตอน และระบุเงื่อนไขในการทำ ขั้นตอนนั้นให้ชัดเจน
                </p>


                <Form.Item>
                    {getFieldDecorator('question6', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                            disabled={summary}
                            autoSize={{ minRows: 4 }}
                            placeholder="กรอกคำตอบที่นี่..."
                            
                            />,
                    )}
                </Form.Item>

                <p>
                    7.ในช่วงเวลาสิบปีมานี้ มีเทคโนโลยีใหม่ ๆ ถูกพัฒนาขึ้นมากมาย น้องคิดว่าเทคโนโลยีใดเป็นที่ กล่าวถึงหรือน่าสนใจที่สุด เทคโนโลยีนั้นมีคุณสมบัติอะไรบ้าง แล้วในอนาคต 
                    คุณสมบัติเหล่านั้นจะสร้าง ผลกระทบใดในสังคมบ้าง 
                </p>


                <Form.Item>
                    {getFieldDecorator('question7', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                            disabled={summary}
                            autoSize={{ minRows: 4 }}
                            placeholder="กรอกคำตอบที่นี่..."

                            />,
                            )}
                </Form.Item>

                <p>
                    8.เมื่อต้องสร้างศัตรูตัวฉกาจกลุ่มใหม่ขึ้นมา เหล่าทีมงานของ Comcamp#32 จึงได้ตัดสินใจนำ สัตว์จากปีนักษัตรมาเป็นต้นแบบในการสร้างศัตรูตัวใหม่ทั้ง 12 ตัว 
                    แต่เนื่องจากกลัวว่าผู้เล่นจะเดาได้ว่าศัตรูตัว ต่อไปจะเป็นอะไร จึงตัดสินใจเรียงลำดับปีนักษัตรใหม่ ดังนี้ น้อง ๆ คิดว่า ลำดับต่อไปนี้มีความสัมพันธ์กัน อย่างไร จงอธิบาย 
                </p>

                    <Row>
                        <Col md={{span:16, offset: 4}} >
                            <img src={img8} style={{'width': '100%'}}/>
                        </Col>
                    </Row>

                <Form.Item>
                    {getFieldDecorator('question8', {
                        rules: [{ required: !summary, message: 'กรุณาตอบคำถาม' }],
                    })(
                        <Input.TextArea
                        style={{'margin-top': '20px'}}
                        disabled={summary}
                        autoSize={{ minRows: 4 }}
                            placeholder="กรอกคำตอบที่นี่..."

                        />,
                    )}
                </Form.Item>

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
                }|
            </Form>
        </div>
    )
}

export default Form.create({ name: 'step8' })(StepForm8)