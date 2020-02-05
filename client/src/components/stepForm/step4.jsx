import React, { useEffect } from 'react'
import register from '../../api/register'
import { Form, Input, Button, Row, Col, Select } from 'antd';
import btn_left from '../../asset/Button_left.png';
import btn_right from '../../asset/Button_right.png';

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

const config = {
    rules: [{
        required: true, message: 'กรุณากรอกจังหวัด', enum: ['กรุงเทพฯ',
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
            'อุบลราชธานี']
    }]
}

const selectBefore = (
    <Select defaultValue="นาย" style={{ width: 90 }}>
      <Option value="นาย">นาย</Option>
      <Option value="นางสาว">นางสาว</Option>
    </Select>
);

function StepForm4(props) {

    const { currentStep, handlePrev, handleNext, user, summary } = props
    const { getFieldDecorator, getFieldsValue, setFieldsValue } = props.form;

    useEffect(() => {
        if (user.hasOwnProperty("address")) {
            let addressData = user.address
            props.form.setFieldsValue({
                home_number: addressData.address_present.home_number,
                road: addressData.address_present.road,
                village: addressData.address_present.village,
                lane: addressData.address_present.lane,
                sub_district: addressData.address_present.sub_district,
                district: addressData.address_present.district,
                province: addressData.address_present.province,
                postal_code: addressData.address_present.postal_code,

                home_number_regis: addressData.address_regis.home_number,
                road_regis: addressData.address_regis.road,
                village_regis: addressData.address_regis.village,
                lane_regis: addressData.address_regis.lane,
                sub_district_regis: addressData.address_regis.sub_district,
                district_regis: addressData.address_regis.district,
                province_regis: addressData.address_regis.province,
                postal_code_regis: addressData.address_regis.postal_code,

                home_number_parent: addressData.address_parent.home_number,
                road_parent: addressData.address_parent.road,
                village_parent: addressData.address_parent.village,
                lane_parent: addressData.address_parent.lane,
                sub_district_parent: addressData.address_parent.sub_district,
                district_parent: addressData.address_parent.district,
                province_parent: addressData.address_parent.province,
                postal_code_parent: addressData.address_parent.postal_code,

                relation: addressData.parent.relation,
                name: addressData.parent.name,
                tel: addressData.parent.tel,
                email: addressData.parent.name,
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

    const copyLocationRegis = () => {
        const location = getFieldsValue(['home_number', 'road', 'village', 'lane', 'sub_district', 'district', 'province', 'postal_code'])
        setFieldsValue({
            home_number_regis: location.home_number,
            road_regis: location.road,
            village_regis: location.village,
            lane_regis: location.lane,
            sub_district_regis: location.sub_district,
            district_regis: location.district,
            province_regis: location.province,
            postal_code_regis: location.postal_code,
        })
    }

    const copyLocationParent = () => {
        const location = getFieldsValue(['home_number', 'road', 'village', 'lane', 'sub_district', 'district', 'province', 'postal_code'])
        setFieldsValue({
            home_number_parent: location.home_number,
            road_parent: location.road,
            village_parent: location.village,
            lane_parent: location.lane,
            sub_district_parent: location.sub_district,
            district_parent: location.district,
            province_parent: location.province,
            postal_code_parent: location.postal_code,
        })
    }

    return (
        <div>
            <h1>ที่อยู่</h1>
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col xs={24} md={{span: 10}}>
                    <h1>ที่อยู่ปัจจุบัน</h1>
                        <Row>
                            <Col md={{span:5}}>
                            <Form.Item label="บ้านเลขที่">
                            {getFieldDecorator('home_number', {
                                rules: [{ required: true, message: 'กรุณากรอกบ้านเลขที่' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="10"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                            <Col md={{span:18, offset:1}}>
                                <Form.Item label="หมู่">
                                    {getFieldDecorator('village', {
                                        rules: [{ required: true, message: 'กรุณากรอกหมู่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="หมู่บ้านวิศวกรรมคอมพิวเตอร์"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        
                        <Row>
                            
                            <Col md={{span:5}}>
                                <Form.Item label="ซอย">
                                    {getFieldDecorator('lane', {
                                            rules: [{ required: true, message: 'กรุณากรอกชื่อหรือเลขที่ซอย' }],
                                    })(
                                        
                                        <Input
                                            disabled={summary}
                                            placeholder="32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:18, offset:1}}>
                            <Form.Item label="ถนน">
                            {getFieldDecorator('road',{
                                rules: [{ required: true, message: 'กรุณากรอกชื่อถนน' }],
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="วิศววัฒนะ"
                                />,
                            )}
                            </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={{span:11}}>
                                <Form.Item label="ตำบล/แขวง">
                                {getFieldDecorator('sub_district', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อตำบล/แขวง' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="บางมด"
                                    />,
                                )}
                                </Form.Item>
                            </Col>
                            <Col md={{span:11, offset:2}}>
                                <Form.Item label="อำเภอ/เขต">
                                    {getFieldDecorator('district', {
                                        rules: [{ required: true, message: 'กรุณากรอกชื่ออำเภอ/เขต' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="ทุ่งครุ"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        


                        <Form.Item label="จังหวัด">
                            {getFieldDecorator('province', config, {
                                 rules: [{ required: true, message: 'กรุณาเลือกจังหวัด' }]
                            })(
                                <Select disabled={summary}
                                    placeholder="--ระบุจังหวัด--"
                                >
                                    {
                                        province_th.map((province) => (
                                            <Option key={province} value={province}>{province}</Option>
                                        )
                                        )
                                    }
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="รหัสไปรษณีย์">
                            {getFieldDecorator('postal_code', {
                                rules: [{ required: true, message: 'กรุณากรอกรหัสไปรษณีย์' }]
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="10032"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 10, offset: 1}}>
                        <h1 style={{display: 'inline', 'margin-right': '1em'}}>ที่อยู่ตามทะเบียนบ้าน</h1>
                        {!summary && <Button onClick={copyLocationRegis}>เหมือนที่อยู่ปัจจุบัน</Button>}
                        <Row>
                            <Col md={{span:5}}>
                                <Form.Item label="บ้านเลขที่">
                                    {getFieldDecorator('home_number_regis', {
                                        rules: [{ required: true, message: 'กรุณากรอกบ้านเลขที่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="10"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span: 18, offset:1}}>
                                <Form.Item label="หมู่">
                                    {getFieldDecorator('village_regis', {
                                        rules: [{ required: true, message: 'กรุณากรอกหมู่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="หมู่บ้านวิศวกรรมคอมพิวเตอร์"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                            
                        <Row>
                            <Col md={{span:5}}>
                                <Form.Item label="ซอย">
                                    {getFieldDecorator('lane_regis', {
                                        rules: [{ required: true, message: 'กรุณากรอกชื่อหรือเลขที่ซอย' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span: 18, offset:1}}>
                            <Form.Item label="ถนน">
                                {getFieldDecorator('road_regis', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อถนน' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="หมู่บ้านวิศวกรรมคอมพิวเตอร์"
                                    />,
                                )}
                            </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={{span:11}}>
                            <Form.Item label="ตำบล/แขวง">
                                {getFieldDecorator('sub_district_regis', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อตำบล/แขวง' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="บางมด"
                                    />,
                                )}
                            </Form.Item>
                        </Col>
                        <Col md={{span:11, offset:2}}>
                            <Form.Item label="อำเภอ/เขต">
                                {getFieldDecorator('district_regis', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่ออำเภอ/เขต' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="ทุ่งครุ"
                                    />,
                                )}
                            </Form.Item>
                        </Col>
                        </Row>
                        <Form.Item label="จังหวัด">
                            {getFieldDecorator('province_regis', config, {
                                 rules: [{ required: true, message: 'กรุณาเลือกจังหวัด' }]
                            })(
                                <Select disabled={summary}
                                    placeholder="--ระบุจังหวัด--"
                                >
                                    {
                                        province_th.map((province) => (
                                            <Option key={province} value={province}>{province}</Option>
                                        )
                                        )
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="รหัสไปรษณีย์">
                            {getFieldDecorator('postal_code_regis', {
                                rules: [{ required: true, message: 'กรุณากรอกรหัสไปรษณีย์' }]
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="10032"
                                />,
                            )}
                        </Form.Item>
                    {/* end block */}
                    </Col> 
                </Row>

                <Row>
                    <Col xs={24} md={{span: 10}}>
                    <h1 style={{display: 'inline', 'margin-right': '1em'}}>ที่อยู่ตามทะเบียนผู้ปกครอง</h1>
                    {!summary && <Button onClick={copyLocationParent}>เหมือนที่อยู่ปัจจุบัน</Button>}
                    <Row>
                            <Col md={{span:5}}>
                                <Form.Item label="บ้านเลขที่">
                                    {getFieldDecorator('home_number_parent', {
                                        rules: [{ required: true, message: 'กรุณากรอกบ้านเลขที่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="10"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span: 18, offset:1}}>
                                <Form.Item label="หมู่">
                                    {getFieldDecorator('village_parent', {
                                        rules: [{ required: true, message: 'กรุณากรอกหมู่' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="หมู่บ้านวิศวกรรมคอมพิวเตอร์"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                            
                        <Row>
                            <Col md={{span:5}}>
                                <Form.Item label="ซอย">
                                    {getFieldDecorator('lane_parent', {
                                        rules: [{ required: true, message: 'กรุณากรอกชื่อหรือเลขที่ซอย' }],
                                    })(
                                        <Input
                                            disabled={summary}
                                            placeholder="32"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={{span: 18, offset:1}}>
                            <Form.Item label="ถนน">
                                {getFieldDecorator('road_parent', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อถนน' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="หมู่บ้านวิศวกรรมคอมพิวเตอร์"
                                    />,
                                )}
                            </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={{span:11}}>
                            <Form.Item label="ตำบล/แขวง">
                                {getFieldDecorator('sub_district_parent', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อตำบล/แขวง' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="บางมด"
                                    />,
                                )}
                            </Form.Item>
                        </Col>
                        <Col md={{span:11, offset:2}}>
                            <Form.Item label="อำเภอ/เขต">
                                {getFieldDecorator('district_parent', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่ออำเภอ/เขต' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="ทุ่งครุ"
                                    />,
                                )}
                            </Form.Item>
                        </Col>
                        </Row>
                        <Form.Item label="จังหวัด">
                            {getFieldDecorator('province_parent', config, {
                                 rules: [{ required: true, message: 'กรุณาเลือกจังหวัด' }]
                            })(
                                <Select disabled={summary}
                                    placeholder="---ระบุจังหวัด---"
                                >
                                    {
                                        province_th.map((province) => (
                                            <Option key={province} value={province}>{province}</Option>
                                        )
                                        )
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="รหัสไปรษณีย์">
                            {getFieldDecorator('postal_code_parent', {
                                rules: [{ required: true, message: 'กรุณากรอกรหัสไปรษณีย์' }]
                            })(
                                <Input
                                    disabled={summary}
                                    placeholder="10032"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={{span: 10, offset: 1}}>
                    <h1>ข้อมูลติดต่อผู้ปกครอง</h1>
    
                            <Form.Item label="ชื่อ">
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อ' }],
                                })(
                                    <Input 
                                        addonBefore={selectBefore}
                                        disabled={summary}
                                        placeholder="คณะวิศวกรรมศาสตร์"
                                    />,
                                )}
                            </Form.Item>

                            <Form.Item label="ความสัมพันธ์">
                                {getFieldDecorator('relation', {
                                    rules: [{ required: true, message: 'กรุณากรอกความสัมพันธ์' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="คณะวิศวกรรมศาสตร์"
                                    />,
                                )}
                            </Form.Item>

                            <Form.Item label="เบอร์โทรศัพท์">
                                {getFieldDecorator('tel', {
                                    rules: [{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="คณะวิศวกรรมศาสตร์"
                                    />,
                                )}
                            </Form.Item>

                            <Form.Item label="E-mail">
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'กรุณากรอกอีเมล' }],
                                })(
                                    <Input
                                        disabled={summary}
                                        placeholder="คณะวิศวกรรมศาสตร์"
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

export default Form.create({ name: 'step4' })(StepForm4)