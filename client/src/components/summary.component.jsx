import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { fetchUserAction } from '../actions/myaction'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

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
    const [loading, setLoading] = useState(true)

    // useEffect( () => {
    //     console.log("test", test)
    // }, [currentStep])

    useEffect(() => {
        props.fetch_user()
    }, [currentStep])

    function checkStep(user) {
        console.log("user", user)
        let newStep = 0
        if(user != null) {
            // Refactorize from this
            // if(user.hasOwnProperty("...")) {
            //    newStep++
            // }
            // ...
            [
              "step0",
              "general",
              "school",
              "disease",
              "address",
              "future",
              "ability",
              "location",
              "question"
            ].reduce((step, next) => step + user.hasOwnProperty(next));
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
        return <h1>Is Loading...</h1>
    }

    const options = {
        // you can also just use 'bottom center'
        position: positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: '30px',
        // you can also just use 'scale'
        transition: transitions.SCALE
    }

    return (
        <div>
            <Navbar user={user} />
            <AlertProvider template={AlertTemplate}{...options} >
                <Row>
                    <Col span={18} offset={3}>
                        <h1>สรุปข้อมูล</h1>
                        <AlertProvider template={AlertTemplate}{...options} >
                            <StepForm1  user={user} summary={true}/>
                            <StepForm2  user={user} summary={true}/>
                            <StepForm3  user={user} summary={true}/>
                            <StepForm4  user={user} summary={true}/>
                            <StepForm5  user={user} summary={true}/>
                            <StepForm6  user={user} summary={true}/>
                            <StepForm7  user={user} summary={true}/>
                            <StepForm8  user={user} summary={true}/>
                        </AlertProvider>
                        <Button type="primary" >
                        Back
                        </Button>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Col>
                </Row>
            </AlertProvider>
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