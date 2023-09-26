import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateMotel } from "../../redux/motelSlice";

const EditMotel = () => {
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [size,setSize] = useState('');
    const [city,setCity] = useState('');
    const [count,setCount] = useState('');

    const dispatch = useDispatch();
    const history = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name:name,
            location:location,
            size:size,
            city:city,
            count:count
        }
        dispatch(updateMotel(id,data))
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
                placeholder="Motel Name" 
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Motel Location" 
                name="Email"
                value={location}
                onChange={(e) => setLocation(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Motel Size" 
                name="Email"
                value={size}
                onChange={(e) => setSize(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Motel City" 
                name="Email"
                value={city}
                onChange={(e) => setCity(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Motel Rooms Number" 
                name="Email"
                value={count}
                onChange={(e) => setCount(e.target.value)} />
             </div>
             
             <button type="submit" className= "send_btn"> Submit </button>
          </div>
        </form>
        </div>
      </div>
     );
}
 
export default EditMotel;