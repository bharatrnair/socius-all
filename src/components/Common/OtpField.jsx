import { useEffect, useRef } from 'react'

const OtpField = ({value,onChange}) => {

    const firstBoxRef = useRef();
    const secondBoxRef = useRef();
    const thirdBoxRef = useRef();
    const fourthBoxRef = useRef();

    useEffect(()=>{
        firstBoxRef.current.focus();
    },[]);

    const keyDown = (e,i,ref)=>{
        if(!e.target.value && e.key === "Backspace"){
            ref.current.focus();
            let newValue = i===1?"": value.substring(0,i-1);
            onChange(newValue);
        }
    }
    
  return (
    <div className="otpInput">
        <input
            className='underline'
            type="text"
            maxLength={1}
            ref={firstBoxRef}
            onChange={(e)=>{
                let newValue = e.target.value + value.substring(1);
                onChange(newValue);
                if(e.target.value)secondBoxRef.current.focus();
            }}
            value={value.charAt(0)}
        />
        <input
            className='underline'
            type="text"
            maxLength={1}
            ref={secondBoxRef}
            onChange={(e)=>{
                let newValue = value.substring(0,1) + e.target.value + value.substring(2);
                onChange(newValue);
                if(e.target.value)thirdBoxRef.current.focus()
            }}
            value={value.charAt(1)}
            onKeyDown={(e)=>keyDown(e,1,firstBoxRef)}
        />
        <input
            className='underline'
            type="text"
            maxLength={1}
            ref={thirdBoxRef}
            onChange={(e)=>{
                let newValue = value.substring(0,2) + e.target.value + value.substring(3);
                onChange(newValue);
                if(e.target.value)fourthBoxRef.current.focus()
            }}
            value={value.charAt(2)}
            onKeyDown={(e)=>keyDown(e,2,secondBoxRef)}
        />
        <input
            className='underline'
            type="text"
            maxLength={1}
            ref={fourthBoxRef}
            onChange={(e)=>{
                let newValue = value.substring(0,3) + e.target.value;
                onChange(newValue);
            }}
            value={value.charAt(3)}
            onKeyDown={(e)=>keyDown(e,3,thirdBoxRef)}
        />
    </div>
  )
}

export default OtpField