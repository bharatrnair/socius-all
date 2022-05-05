import { useState } from 'react';
import next from './../components/Assets/next.svg'
import vector from './../components/Assets/otpvector.png'
import OtpField from './Common/OtpField'


const Otp = () => {
  const [otp, setOtp] = useState('');
  return (
    <div className='mainContainer'>
        <div className="otpSection">
            <div className="otpDetailsSection">
                <p id='otp'>ENTER OTP</p>
                <OtpField value={otp} onChange={setOtp}/>
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