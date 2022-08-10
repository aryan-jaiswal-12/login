import React, { useState } from "react";

function Form() {

    const [formData, editFormData] = useState({
        userName: "",
        password: "",
    });


    function handleChange(event) {
        const {name, value} = event.target;
        editFormData((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
        console.log(formData);
    }
  

    function handleClick() {
        //BACKEND
    }

    return (<div className="Form">
        <form>
            <input
                name="userName"
                placeholder="Username"
                value ={formData.userName}
                onChange={handleChange}
            />
            <input
                name="password"
                placeholder="Password"
                value ={formData.password}
                onChange= {handleChange}
            />
            <button onClick={handleClick}>Submit</button>
        </form>
    </div>);
}

export default Form;