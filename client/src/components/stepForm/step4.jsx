import React, { useEffect } from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'
import { Form, Input, Button, Row, Col, Select } from 'antd';

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
    rules: [{required: true, message: 'กรุณากรอกจังหวัด', enum: ['กรุงเทพฯ',
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
    'อุบลราชธานี']}]
}

function StepForm4(props) {

    const {currentStep, handlePrev, handleNext, user} = props
    const { getFieldDecorator, getFieldsValue, setFieldsValue } = props.form;

    const alert = useAlert()

    useEffect(() => {
        if(user.hasOwnProperty("address")) {
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
        const flag =  await register.sendData(currentStep, payload)
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next 4")
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

    const copyLocationRegis = () => {
        const location = getFieldsValue(['home_number', 'road', 'village', 'lane','sub_district', 'district', 'province', 'postal_code'])
        setFieldsValue({
            home_number_regis:location.home_number,
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
        const location = getFieldsValue(['home_number', 'road', 'village', 'lane','sub_district', 'district', 'province', 'postal_code'])
        setFieldsValue({
            home_number_parent:location.home_number,
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
                <h1>ที่อยู่ปัจจุบัน</h1>
                <Row>
                    <Col span={4} >
                        <Form.Item label="บ้านเลขที่">
                        {getFieldDecorator('home_number', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="ถนน">
                        {getFieldDecorator('road', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>

                    <Col span={5} offset={1}>
                        <Form.Item label="หมู่">
                        {getFieldDecorator('village', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="ซอย">
                        {getFieldDecorator('lane')(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} >
                        <Form.Item label="ตำบล/แขวง">
                        {getFieldDecorator('sub_district', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="อำเภอ/เขต">
                        {getFieldDecorator('district', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>

                    <Col span={5} offset={1}>
                    <Form.Item label="จังหวัด">
                        {getFieldDecorator('province', config)(
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
                    <Col span={5} offset={1}>
                        <Form.Item label="รหัสไปรษณีย์">
                        {getFieldDecorator('postal_code', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }]
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

                <h1>ที่อยู่ตามทะเบียนบ้าน</h1><Button onClick={copyLocationRegis}>เหมือนที่อยู่ปัจจุบัน</Button>
                <Row>
                    <Col span={4} >
                        <Form.Item label="บ้านเลขที่">
                        {getFieldDecorator('home_number_regis', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="ถนน">
                        {getFieldDecorator('road_regis', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>

                    <Col span={5} offset={1}>
                        <Form.Item label="หมู่">
                        {getFieldDecorator('village_regis', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="ซอย">
                        {getFieldDecorator('lane_regis')(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} >
                        <Form.Item label="ตำบล/แขวง">
                        {getFieldDecorator('sub_district_regis', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="อำเภอ/เขต">
                        {getFieldDecorator('district_regis', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>

                    <Col span={5} offset={1}>
                    <Form.Item label="จังหวัด">
                        {getFieldDecorator('province_regis', config)(
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
                    <Col span={5} offset={1}>
                        <Form.Item label="รหัสไปรษณีย์">
                        {getFieldDecorator('postal_code_regis', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }]
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

                <h1>ที่อยู่ตามทะเบียนผู้ปกครอง</h1><Button onClick={copyLocationParent}>เหมือนที่อยู่ปัจจุบัน</Button>
                <Row>
                    <Col span={4} >
                        <Form.Item label="บ้านเลขที่">
                        {getFieldDecorator('home_number_parent', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="ถนน">
                        {getFieldDecorator('road_parent', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>

                    <Col span={5} offset={1}>
                        <Form.Item label="หมู่">
                        {getFieldDecorator('village_parent', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="ซอย">
                        {getFieldDecorator('lane_parent')(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} >
                        <Form.Item label="ตำบล/แขวง">
                        {getFieldDecorator('sub_district_parent', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                        <Form.Item label="อำเภอ/เขต">
                        {getFieldDecorator('district_parent', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>

                    <Col span={5} offset={1}>
                        <Form.Item label="จังหวัด">
                        {getFieldDecorator('province_parent', config)(
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
                    <Col span={5} offset={1}>
                        <Form.Item label="รหัสไปรษณีย์">
                        {getFieldDecorator('postal_code_parent', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }]
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

                <h1>ข้อมูลติดต่อผู้ปกครอง</h1>
                <Row>
                    <Col span={6}>
                        <Form.Item label="ความสัมพันธ์">
                        {getFieldDecorator('relation', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={16} offset={1}>
                        <Form.Item label="ชื่อ">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Form.Item label="เบอร์โทรศัพท์">
                        {getFieldDecorator('tel', {
                            rules: [{ required: true, message: 'กรุณากรอกคณะที่อยากเข้า' }],
                        })(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                    <Col span={6} offset={1}>
                        <Form.Item label="E-mail">
                        {getFieldDecorator('email')(
                            <Input
                            placeholder="คณะวิศวกรรมศาสตร์"
                            />,
                        )}
                        </Form.Item>
                    </Col>
                </Row>

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

export default Form.create({name: 'step4'})(StepForm4)