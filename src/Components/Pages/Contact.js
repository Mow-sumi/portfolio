import React, { useState } from 'react';
// import { db } from '../../firebase';
import './Contact.css';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // db.collection("personal_info").add({
    //     name: name,
    //     email: email,
    //     message: message,
    // })

    //     .then(() => {
    //         alert('message hase benn submitted ')
    //     })

    //     .catch(error => {
    //         alert(error.message);
    //     })

    // setName('');
    // setEmail('');
    // setMessage('');

    return (
        <div className="container mt-5 pt-5">

            <div className="contact-section">

                <div className="title text-center mt-3 mb-3">
                    <h3>Lets ' Conversation</h3>
                </div>
                <form action="" className="was-validated w-50 m-auto" onClick={handleSubmit}>
                    <div className="input-group ">
                        <input type="text" name="name" placeholder="Enter Your name" className="form-control" required

                            value={name}
                            onChange={(e) => setName(e.target.value)}


                        />
                    </div>
                    <br />


                    <div className="input-group">
                        <input type="email" name="email" placeholder="Enter Your email" className="form-control" required

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}


                        />
                    </div>
                    <br />

                    <div className="input-group">
                        <textarea name="message" id="" cols="30" rows="10" className="form-control" placeholder="Message"


                            value={message}
                            onChange={(e) => setMessage(e.target.value)}


                        ></textarea>
                    </div>
                    <br />

                    <div className="input-group">
                        <input type="Submit" value="submit" className='btn-primary ' />

                    </div>
                </form>
            </div>


        </div>
    );
};

export default Contact;