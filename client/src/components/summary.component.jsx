import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col } from 'antd';
import { fetchUserAction } from '../actions/myaction'
import btn_left from '../asset/Button_left.png';
import btn_right from '../asset/Button_right.png';
import register from '../api/register'
import { useAlert } from 'react-alert'

import Navbar from './navbar.component'

// import step form
import StepForm1 from './stepForm/step1'
import StepForm2 from './stepForm/step2'
import StepForm3 from './stepForm/step3'
import StepForm4 from './stepForm/step4'
import StepForm5 from './stepForm/step5'
import StepForm6 from './stepForm/step6'
import StepForm7 from './stepForm/step7'
import StepForm8 from './stepForm/step8'
import StepForm9 from './stepForm/step9'

function SummaryForm(props) {

    const { step9, handlePrev, setConfirmed } = props
    const alert = useAlert()

    console.log("prop user", props.user)

    const [finished, setFinished] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [maxStep, setMaxStep] = useState(0)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // useEffect( () => {
    //     console.log("test", test)
    // }, [currentStep])

    useEffect(() => {
        props.fetch_user()
    }, [currentStep])
    
    useEffect( () => {
        if(!step9) {
            if(!loading) {
                if(!finished) {
                   window.location = 'https://comcamp.io/register'
                }
            }
        }
     }, [currentStep, finished])

     useEffect( () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
     }, [])
    

    async function checkStep(user) {
        console.log("user", user)
        let newStep = 0
        if(user != null) {
            // Refactorize from this
            // if(user.hasOwnProperty("...")) {
            //    newStep++
            // }
            // ...
            newStep = await [
              "step0",
              "general",
              "school",
              "disease",
              "address",
              "future",
              "ability",
              "location",
              "question"
            ].reduce((step, next) => step + user.hasOwnProperty(next), 0);
            if(user.hasOwnProperty("tracking_number") && user.hasOwnProperty("personal")) {
                setFinished(true)
            } 
        }
        // newStep = 3
        setCurrentStep(newStep)
        setMaxStep(newStep)
    }

    useEffect(() => {
        if (props.user === false) {
            window.location = 'https://comcamp.io'
        }
        if (user != null && props.user) {
            setUser(props.user)
            setLoading(false)
        }
    }, [props, user])


    useEffect(() => {
        checkStep(user)
    }, [loading])


    // if (loading || !finished) {
    if (loading) {
        return <h1></h1>
    }


    const handleConfirmed = async () => {
        const flag = await register.sendData(10, { confirmed: true })
        console.log("Click Next")
        console.log(flag)
        if (flag) {
            console.log("Next")
            alert.success('บันทึกข้อมูลเสร็จสิ้น')
            props.fetch_user()
            // window.location = '/register'
        }
    }

    const statusTracking = () => {
        if(!user.hasOwnProperty("status")) {
            return (
                <h1 style={{'color': 'red', 'textAlign': 'center'}}>**ยังไม่ได้รับเอกสาร**</h1>
            )
        } else if(user.status == 1) {
            return (
                <h1 style={{'color': 'blue', 'textAlign': 'center'}}>ได้รับเอกสารแล้ว รอตรวจสอบ</h1>
            )
        } else if(user.status == 2) {
            return (
                <h1 style={{'color': 'green', 'textAlign': 'center'}}>ตรวจสอบเอกสารเรียบร้อยแล้ว</h1>
            )
        }
    }

    if(step9) {
        return (
            
            <Col span={24}>
                <h1>สรุปข้อมูล</h1>
                <hr className="break-line"/>
                
                <StepForm1  user={user} summary={true}/>
                <hr className="break-line"/>
                <StepForm2  user={user} summary={true}/>
                <hr className="break-line"/>
                <StepForm3  user={user} summary={true}/>
                <hr className="break-line"/>
                <StepForm4  user={user} summary={true}/>
                <hr className="break-line"/>
                <StepForm5  user={user} summary={true}/>
                <hr className="break-line"/>
                <StepForm6  user={user} summary={true}/>
                <hr className="break-line"/>
                <StepForm7  user={user} summary={true}/>
                <hr className="break-line"/>
                <StepForm8  user={user} summary={true}/>
                
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
                                <button className="Button-Background" htmlType="submit" onClick={handleConfirmed}>
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
            </Col>
            
        )
    } else {
    return (
        <div>
            {!step9 && <Navbar user={user} /> }
                <Row>
                    <Col span={20} offset={2}>
                        <h1>สรุปข้อมูล</h1>
                            {statusTracking()}
                            <hr className="break-line"/>
                            <StepForm9  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm1  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm2  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm3  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm4  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm5  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm6  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm7  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm8  user={user} summary={true}/>
                    </Col>
                </Row>
        </div>
    )
} 
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
        // fetch_user:()=>{dispatch(fetchUserAction())}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_user: () => { dispatch(fetchUserAction()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryForm)