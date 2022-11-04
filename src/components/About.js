import React, { useState } from 'react'

export default function About() {

    const [btnText,setBtnText]=useState('click for dark mode')
    const [myStyle, setMyStyle] = useState({

        color: 'black',
        backgroundColor: 'white'


    })

    let toggleEffect = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("click for light mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("click for dark mode")  
        }
        
    }

    return (
        <>

            <div className='container my-5' >

                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>

            </div>
            <div className="conatiner mx-5">
                <button onClick={toggleEffect} type="button" className="btn btn-success ">{btnText}</button>
            </div>
        </>

    )
}
