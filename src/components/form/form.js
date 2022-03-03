import React from 'react';
import './form.css';

function form(){
    return (
        <div class="container">
            <h3>Register a new Student</h3>
            <br />
            <br />
            <p>Personal Details</p>
            <form action="">
                <input type="text" placeholder="Enter Student name" />
                <input type="text" placeholder="Enter mobile number" />
                <select name="timezone" id="timezone">
                    <option value="EST">(UTC -5) Eastern Standard Time</option>
                    <option value="WET">Western European Time</option>
                    <option value="IST">(UTC +5:30)Indian Standard Time</option>
                </select>
                <input type="email" placeholder="Enter E-mail" />
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default form;
