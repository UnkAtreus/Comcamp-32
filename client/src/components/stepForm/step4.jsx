import React, {useState} from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'

function StepForm5(props) {

    const {currentStep, handlePrev, handleNext} = props

    const [futureInfo, setFutureInfo] = useState({
        one_faculty: '',
        one_university: '',
        two_faculty: '',
        two_university: '',
        three_faculty: '',
        three_university: '',
        interest: '',
    })

    const alert = useAlert()

    const nextStep = async () => {
        const flag =  await register.sendData(currentStep, {step0: true})
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

    return (
        <div>
            <h1>ความสนใจ</h1>
            <form>
                
            </form>
           <button onClick={handlePrev}>ก่อนหน้า</button>
           <button onClick={nextStep}>ถัดไป</button>
        </div>
    )
}

export default StepForm5