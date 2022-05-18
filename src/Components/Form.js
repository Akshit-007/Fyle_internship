import React, { useState, useEffect } from 'react';
import "../Styles/Form.css"

const Form = ({ getFormData }) => {

    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getFormData(id);
    }

    React.useEffect(() => {
        // console.log(id);
    }, [id]);
    return (
        <>
            <div className="form_title">GITHUB SEARCH</div>
            <br />
            <br />
            <br />
            <div className="input_form" >
                <input type="name" value={id} onChange={(e) => { setId(e.target.value) }} className="search_input" placeholder="github_id" />
                &nbsp; &nbsp;<input type="button" value="Search" onClick={handleSubmit} className="search_btn" />
            </div>
        </>
    );
}

export default Form;
