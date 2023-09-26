import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addUser } from "../../redux/userSlice";

const AddEmployee = () => {
    const [firstName,setFirstName] = useState('');
    const [middleName,setMiddleName] = useState('');
    const [lastName,setLastName] = useState('');
    const [age,setAge] = useState('');
    const [phone,setPhone] = useState('');
    const [telephone,setTelePhone] = useState('');
    const [work,setWork] = useState('');
    const [experience,setExperience] = useState('');
    const [marital,setMarital] = useState('');


    const dispatch = useDispatch();
    const history = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = { 
            firstname: firstName,
            middlename: middleName,
            lastname: lastName,
            age: age,
            phone: phone,
            telephone: telephone,
            work: work,
            experience: experience,
            marital: marital
        }

        dispatch(addUser(data));
        history('/')
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                 />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Middle Name" 
                name="Email"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                 />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Last Name" 
                name="Email"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Age" 
                name="Email"
                value={age}
                onChange={(e) => setAge(e.target.value)} />
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
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="TelePhone" 
                name="Email"
                value={telephone}
                onChange={(e) => setTelePhone(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Work" 
                name="Email"
                value={work}
                onChange={(e) => setWork(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Experience" 
                name="Email"
                value={experience}
                onChange={(e) => setExperience(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Marital Status" 
                name="Email"
                value={marital}
                onChange={(e) => setMarital(e.target.value)} />
             </div>
             
             <button type="submit" className= "send_btn"> Submit </button>
          </div>
        </form>
        </div>
      </div>
     );
}
 
export default AddEmployee;