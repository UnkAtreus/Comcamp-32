import React from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'

function StepForm2(props) {

    const {currentStep, handlePrev, handleNext} = props

    const alert = useAlert()

    if(currentStep != 1) {
        return null
    }

    const nextStep = async () => {
        const flag =  await register.sendData(currentStep, {step0: true})
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next 2")
            handleNext()
            alert.success('บันทึกข้อมูลเสร็จสมบูรณ์')
        } else {
            alert.error('บันทึกข้อมูลผิดพลาด')
        }
    }

    return (
        <div>
            <h1>Step2</h1>
           <ul>
               <li>
                   สำเนาบัตรประชาชน
               </li>
           </ul>
           <button onClick={handlePrev}>ก่อนหน้า</button>
           <button onClick={nextStep}>ถัดไป</button>
        </div>
    )
}

export default StepForm2