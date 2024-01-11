import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const clearScreen = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Your text is clear", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    // handleAllCheckboxChange = () => {
    //     const { allChecked, items } = this.state;
    //     const updatedItems = items.map((item) => ({ ...item, checked: !allChecked }));
    //     this.setState({ items: updatedItems, allChecked: !allChecked });
    // };

    // handleCheckboxChange = (itemId) => {
    //     const { items } = this.state;
    //     const updatedItems = items.map((item) =>
    //         item.id === itemId ? { ...item, checked: !item.checked } : item
    //     );
    //     this.setState({ items: updatedItems, allChecked: updatedItems.every((item) => item.checked) });
    // };


    //     const { items, allChecked } = this.state;

    const [text, setText] = useState('');
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.hedding}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary m-2' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-primary m-2' onClick={handleLoClick}>Convert To Lowercase</button>
                <button className='btn btn-primary m-2' onClick={clearScreen}>clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summery</h3>
                <p>{text.split("/\s+/").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>



        </>
    )
}
