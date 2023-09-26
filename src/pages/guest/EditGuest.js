import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateGuest } from "../../redux/guestSlice";


const EditGuest = () => {
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [phone,setPhone] = useState('');
    const [nationid,setNationId] = useState('');
    const [nationality,setNationality] = useState('');
    const [age,setAge] = useState('');
    const [health,setHealth] = useState('');

    const dispatch = useDispatch();
    const history = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            nationid:nationid,
            nationality:nationality,
            age:age,
            health:health
        }
        dispatch(updateGuest(id,data))
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
                placeholder="First Name" 
                name="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Last Name" 
                name="Email"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Phone" 
                name="Email"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Nation ID" 
                name="Email"
                value={nationid}
                onChange={(e) => setNationId(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Nationality" 
                name="Email"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Age" 
                name="Email"
                value={age}
                onChange={(e) => setAge(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Health Status" 
                name="Email"
                value={health}
                onChange={(e) => setHealth(e.target.value)} />
             </div>
             
             <button type="submit" className= "send_btn"> Submit </button>
          </div>
        </form>
        </div>
      </div>
     );
}
 
export default EditGuest;