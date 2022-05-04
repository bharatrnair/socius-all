import React from 'react'
import next from './../components/Assets/next.svg'
import vector from './../components/Assets/otpvector.png'


const Otp = () => {
  return (
    <div className='mainContainer'>
        <div className="otpSection">
            <div className="otpDetailsSection">
                <p id='otp'>ENTER OTP</p>
                <div className="otpInput">
                    <input className='underline' type="text" maxLength={1} />
                    <input className='underline' type="text" maxLength={1}/>
                    <input className='underline' type="text" maxLength={1}/>
                    <input className='underline' type="text" maxLength={1}/>
            </div>
            <div className="messageSection">
                <p>Resend OTP</p>
            </div>
            <div className="nextButton">
                <img src={next} alt="" />

            </div>



        </div>
        </div>
        <div className="vectorSection">
            <div className="vectorImage">
                <img src={vector} alt="" />
                </div>
                <div className="otpMessage">
                <p id='three'>we have sent an otp to your registered  phone number</p>
                </div>
            

        </div>
    </div>
  )
}

export default Otp