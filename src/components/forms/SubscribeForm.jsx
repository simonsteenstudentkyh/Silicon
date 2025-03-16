import React, { useState } from 'react'

const SubscribeForm = () => {
    const apiUrl = "https://kyhn24.azurewebsites.net/api/subscribe";
    const [formData, setFormData] = useState({email: ""})
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ email: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email){
            setMessage("Please enter your email");
            return;
        }

        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            setMessage( "You are now subscribed" );
        }
    }

    return (
        <>
            <form className="subscribe-form" onSubmit={handleSubmit}>
                <i className="bi bi-envelope"></i>
                <input type="email" className="input-field" placeholder="Your email" value={formData.email} onChange={handleChange} />
                <button type="submit" className="btn primary large">Subscribe</button>
            </form>

            {message && <p>{message}</p>}
        </>
    )
}

export default SubscribeForm