import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateBus } from "../../redux/busSlice";


const EditBus = () => {
    const [numbers,setNumbers] = useState('')
    const [chars,setChars] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [phone,setPhone] = useState('')
    const [license,setLicense] = useState('')

    const dispatch = useDispatch();
    const history = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            numbers: numbers,
            chars: chars,
            firstname:firstName,
            lastname: lastName,
            phone: phone,
            license:license
        }

        dispatch(updateBus(id,data));
        history('/');
    }
    return ( 
        <div className= "contact_section layout_padding">
        <div className= "container">
          <h1 className= "contact_taital">Request A Call Back</h1>
          <form onSubmit={handleSubmit}>
          <div className= "email_text">
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Bus Numers" 
                name="Numbers"
                value={numbers}
                onChange= { (e) => setNumbers(e.target.value) } />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Bus Chars" 
                name="Email"
                value= { chars }
                onChange= { (e) => setChars(e.target.value) } />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Driver First Name" 
                name="Email"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Driver Last Name" 
                name="Email"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Driver Phone" 
                name="Email"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Driver License Type" 
                name="Email"
                value={license}
                onChange={(e) => setLicense(e.target.value)} />
             </div>
             
             <button type="submit" className= "send_btn"> Submit </button>
          </div>
        </form>
        </div>
      </div>
     );
}
 
export default EditBus;