import React, {useState} from 'react'
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

    const [generals, setGenerals] = useState({
        name_th: '',
        name_end: '',
        nickname: '',
        sex: '',
        birthday: new Date(),
        blood: '',
        religion: '',
        shire_size: '',
        telephone: '',
        email: ''
    })

    return (
        <div>
            <h1>ข้อมูลทั่วไป</h1>
            <input type="text" />
           <button onClick={handlePrev}>ก่อนหน้า</button>
           <button onClick={nextStep}>ถัดไป</button>
        </div>
    )
}

export default StepForm2