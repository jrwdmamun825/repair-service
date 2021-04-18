import React from 'react';
import quote from '../../../images/free.jpg';
import './Contact.css'

const Contact = () => {
    return (
        <section  className="mt-5 py-2" id="contact">
            <div className="row">
                <div className="col-md-5">
                    <div className="offset-md-4 mt-3">
                        <img src={quote} className="img-fluid w-50" alt=""/>
                    </div>

                </div>
                <div className="col-md-6">
                    <h2 style={{color: '#00C3ED'}}>REQUEST FREE QUOTE</h2>
                    <p>Send your request using the form and you will get a free estimation.</p>
                    <form>
                        <div className="form-group">
                        <label  class="form-label">Name</label>
                        <input type="text" className="form-control w-75" placeholder="your name" required/>
                        </div>
                        <div className="form-group">
                        <label  class="form-label">Email address</label>
                        <input type="email" className="form-control w-75" placeholder="email" required/>
                        </div>
                        <div className="form-group">
                        <label  class="form-label">message</label>
                        <input  type="text" className="form-control mb-4 message-box w-75" placeholder="your name"/>
                        </div>
                        <button className="btn btn-brand">send meassege</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;