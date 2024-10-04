import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const MessageForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const handleMessage = async (e) => {
        e.preventDefault();
        try {
            await axios
                .post(
                    "http://localhost:4000/api/v1/messages/send",
                    { firstName, lastName, email, phone, message },
                    {
                        withCredentials: true,
                        headers: { "Content-Type": "application/json" },
                    }
                )
                .then((res) => {
                    toast.success(res.data.message);
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className='container form-component message-form'>
            <h2>Need Help? Contact Care404</h2>
            <form onSubmit={handleMessage}>
                <div>
                    <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="tel" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <textarea rows={7} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
                <div style={{ justifyContent: "center", alignItems: "center" }}>
                    <button type='submit'>Care404 Submit</button>
                </div>

            </form>
        </div>
    )
}

export default MessageForm
