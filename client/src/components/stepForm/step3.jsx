import React from 'react'

function StepForm3(props) {

    const {currentStep, handlePrev} = props

    if(currentStep != 2) {
        return null
    }

    return (
        <div>
            <h1>Step3</h1>
           <ul>
               <li>
                   สำเนาบัตรประชาชน
               </li>
           </ul>
           <button onClick={handlePrev}>ก่อนหน้า</button>
        </div>
    )
}

export default StepForm2