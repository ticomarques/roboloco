import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
  return (
    <section className="contact py-5">
        <Title title="Contact us" />
        <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
                <form action="https://formspree.io/thymarques@gmail.com" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            id="name" 
                            placeholder="John Doe" 
                        />                        
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="email" 
                            id="email" 
                            placeholder="johndoe@example.com" 
                        />                        
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            name="description"
                            id="description"
                            className="form-control"
                            rows="5"
                            placeholder="Type your message here..."
                        />                        
                    </div>

                    <button type="submit" className="btn btn-yellow btn-block text-capitalize">Send</button>
                </form>
            </div>
        </div>
    </section>
  )
}
