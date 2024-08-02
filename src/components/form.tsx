import * as React from 'react'
import './form.css'
type PropsType = {
    loadercolor?: string;
  
  };
const Form:React.FC<PropsType>=({loadercolor= '#555'}:PropsType )=>{
 
    
return (
<>

<div className="container">
  <form id="contact" action="" method="post">
    <h3>Quick Contact</h3>
    <h4>Contact us today, and get reply with in 24 hours!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email"  required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel"  required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site starts with http://" type="url"  required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>

</div>

</>
)
}
export {Form}