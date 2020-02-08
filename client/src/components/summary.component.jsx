import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { fetchUserAction } from '../actions/myaction'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import btn_left from '../asset/Button_left.png';
import btn_right from '../asset/Button_right.png';

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

    console.log("prop user", props.user)

    const [finished, setFinished] = useState(false)
    const [currentStep, setCurrentStep] = useState(0);
    const [maxStep, setMaxStep] = useState(0);
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    // useEffect( () => {
    //     console.log("test", test)
    // }, [currentStep])

    useEffect(() => {
        props.fetch_user()
    }, [currentStep])

    useEffect( () => {
        if(!loading && user) {
            if(!finished) {
                props.history.push('/')
            }
        }
    }, [finished])

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
            if(user.hasOwnProperty("tracking_number")) {
                setFinished(true)
            }
        }
        // newStep = 3
        setCurrentStep(newStep)
        setMaxStep(newStep)
    }

    useEffect(() => {
        if (props.user === false) {
            props.history.push('/')
        }
        if (user != null && props.user) {
            setUser(props.user)
            setLoading(false)
        }
    }, [props, user])


    useEffect(() => {
        checkStep(user)
    }, [loading])

    if (loading) {
        return <h1></h1>
    }

    

    return (
        <div>
            <Navbar user={user} />
                <Row>
                    <Col span={18} offset={3}>
                        <h1>สรุปข้อมูล</h1>
                            <StepForm1  user={user} summary={true}/>
                            <StepForm2  user={user} summary={true}/>
                            <StepForm3  user={user} summary={true}/>
                            <StepForm4  user={user} summary={true}/>
                            <StepForm5  user={user} summary={true}/>
                            <StepForm6  user={user} summary={true}/>
                            <StepForm7  user={user} summary={true}/>
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
                                <button className="Button-Background">
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