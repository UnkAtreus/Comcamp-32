import React from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'

function StepForm1(props) {

    const {currentStep, handleNext} = props
    const alert = useAlert()

    if(currentStep != 0) {
        return null
    }

    const nextStep = async () => {
        const flag =  await register.sendData(currentStep, {step0: true})
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next")
            alert.success("บันทึกข้อมูลเสร็จสมบูรณ์")
            handleNext()
        } else {
            alert.error('บันทึกข้อมูลผิดพลาด')
        }
    }

    return (
        <div>
            <h1>เอกสารประกอบการสมัคร</h1>
            <ul>
                <li>
                    สำเนาบัตรประชาชน
                </li>
            </ul>
           <button onClick={nextStep}>ถัดไป</button>
        </div>
    )
}

export default StepForm1