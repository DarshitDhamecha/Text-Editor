import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'black',
    //     color: 'white'
    // });

    // const [btnText, setBtnText] = useState('light')


    // const darkStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             backgroundColor: 'black',
    //             color: 'white',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //         setBtnText("dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#415c72' : 'white',
        // border: '2px solid',
        // borderColor:  props.mode === 'dark' ? 'white' : '#415c72',
    }

    return (
        <>
            <h3 className='my-2 mx-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h3>
            {/* <div className="container" style={myStyle}> */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This website gives youa way to Analyze yuor text quickly and efficiently. Be it word count, character count and more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This website is free character count tool that provides instant character count & words count like many other features.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This words counter website works any Browser like Chrome, Fire-Fox, like many other browser.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container m-2">
                <button onClick={darkStyle} className='btn btn-outline-primary'>{btnText}</button>
            </div> */}
            {/* </div> */}
        </>
    )
}
