import React, {useState} from 'react'
import register from '../../api/register'
import { useAlert } from 'react-alert'

function StepForm6(props) {

    const {currentStep, handlePrev, handleNext} = props

    const [ability, setAbility] = useState({
        programming: '',
        big_data: '',
        flow_chart: '',
        microcontroller: '',
        brain_storm: '',
    })

    const alert = useAlert()

    const nextStep = async () => {
        const flag =  await register.sendData(currentStep, {step0: true})
        console.log("Click Next")
        console.log(flag)
        if(flag) {
            console.log("Next 5")
            handleNext()
            alert.success('บันทึกข้อมูลเสร็จสมบูรณ์')
        } else {
            alert.error('บันทึกข้อมูลผิดพลาด')
        }
    }

    return (
        <div>
            <h1>ความถนัด</h1>
            <form>
                
            </form>
           <button onClick={handlePrev}>ก่อนหน้า</button>
           <button onClick={nextStep}>ถัดไป</button>
        </div>
    )
}

export default StepForm6