import React from 'react'

function Contact() {
 const hndlForm = (formData) => {
  const forinputData=Object.fromEntries(formData.entries());
  console.log(forinputData)

 }

    
  
  return (
      <div>
      <div className="contact-container">
          <form  className='contact-left' action={hndlForm}>
              <div className="contact-left-title">
                    <h2>Contact:</h2>

                </div>
                <input type="text" name='name' placeholder='your name please' className='contact-inputs' required />
                <input type="text" name='email' placeholder='your Email please' className='contact-inputs' required />
                <textarea name="message"  placeholder='Your message please' className='contact-inputs' required></textarea>
                <button className="button">
                    Get in touch
                    <div className="hoverEffect">
                        <div></div>
                    </div>
                </button>
            
            </form>
            
        </div>
        
        </div>
  )
}

export default Contact
