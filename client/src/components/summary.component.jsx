import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { fetchUserAction } from '../actions/myaction'
import btn_left from '../asset/Button_left.png';
import btn_right from '../asset/Button_right.png';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import register from '../api/register'

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

function SummaryForm(props) {

    const { step9, handlePrev, handleNext } = props

    console.log("prop user", props.user)

    const [finished, setFinished] = useState(false)
    const [currentStep, setCurrentStep] = useState(0);
    const [maxStep, setMaxStep] = useState(0);
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // useEffect( () => {
    //     console.log("test", test)
    // }, [currentStep])

    useEffect(() => {
        props.fetch_user()
    }, [currentStep])
    
    // useEffect( () => {
    //      if(!loading) {
    //          if(!finished) {
    //             window.location = 'https://comcamp.io'
    //          }
    //      }
    //  }, [currentStep, finished])
    

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
            if(user.hasOwnProperty("confirmed")) {
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

       // optional cofiguration
       const options = {
        // you can also just use 'bottom center'
        position: positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: '30px',
        // you can also just use 'scale'
        transition: transitions.SCALE
    }

    const handleConfirmed = () => {
        const nextStep = async () => {
            const flag = await register.sendData(10, { confirmed: true })
            console.log("Click Next")
            console.log(flag)
            if (flag) {
                console.log("Next")
            } else {
            }
        }
    }

    

    return (
        <div>
            {!step9 && <Navbar user={user} /> }
                <Row>
                    <Col span={24}>
                        <h1>สรุปข้อมูล</h1>
                            <AlertProvider template={AlertTemplate} {...options}>
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
                            <AlertProvider template={AlertTemplate} {...options}>
                            <StepForm7  user={user} summary={true}/>
                            <hr className="break-line"/>
                            <StepForm8  user={user} summary={true}/>
                            </AlertProvider>
                            

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
                </Row>
        </div>
    )
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
