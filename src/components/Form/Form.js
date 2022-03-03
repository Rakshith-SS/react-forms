import React from 'react';
import './Form.css';

function Form(){
    return (
        <div className="container">
            <div className="form-group col-6 mx-auto">
                <h3>Register a new Student</h3>
                <br />
                <br />
                <p>Personal Details</p>
                <form action="" method="post">
                    <input type="text" className="form-control" placeholder="Enter Student name" /><br />
                    <input type="text" className="form-control" placeholder="Enter mobile number" /><br />
                    <select className="form-control" name="timezone" id="timezone">
                        <option value="EST">(UTC -5) Eastern Standard Time</option>
                        <option value="WET">Western European Time</option>
                        <option value="IST">(UTC +5:30)Indian Standard Time</option>
                    </select>
                    <br />
                    <input type="email" placeholder="Enter E-mail" className="form-control"/><br />
                    <button className="form-control btn btn-block btn-primary" type="button">Register New Student</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
