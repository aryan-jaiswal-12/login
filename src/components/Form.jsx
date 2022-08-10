import React from "react";

function Form() {
    return (<div className="Form">
        <form>
            <input
                name="fName"
                placeholder="Username"
            />
            <input
                name="lName"
                placeholder="Password"
            />
            <button>Submit</button>
        </form>
    </div>);
}

export default Form;