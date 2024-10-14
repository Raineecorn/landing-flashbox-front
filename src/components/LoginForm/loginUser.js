import React, { useState } from 'react';
import './loginUser.css'; // Keeping it for background transparency if needed

function InputForm({ onClose }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You might want to handle login here
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="container-login ml-mr-5">
            <div className="description-login text-white mb-3 text-center"> 
                <p> View your complete package details here (sender/receiver information).</p>
            </div>
            <form onSubmit={handleSubmit} className="input-form text-center">
                <div className="mb-2">
                    <label className="form-label text-light">Tracking Number:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-2 ">
                    <label className="form-label text-light">Tracking Code:</label>
                    <input type="text" name="password" value={formData.password} onChange={handleChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-danger btn-lg mt-3">Track Here</button>
            </form>
        </div>
    );
}

export default InputForm;
