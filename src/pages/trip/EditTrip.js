import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTrip } from "../../redux/tripSlice";

const EditTrip = () => {
    const [start,setStart] = useState('');
    const [end,setEnd] = useState('');
    const [destination,setDestination] = useState('');
    const [location,setLocation] = useState('');
    const [type,setType] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');

    const dispatch = useDispatch();
    const history = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            start:start,
            end:end,
            destination:destination,
            location:location,
            type:type,
            price:price,
            description:description
        }
        dispatch(updateTrip(id,data))
        history('/');
    }
    return ( 
        <div className= "contact_section layout_padding">
        <div className= "container">
          <h1 className= "contact_taital">Request A Call Back</h1>
          <form onSubmit={handleSubmit}>
          <div className= "email_text">
             <div className= "form-group">
                <input type="date" 
                className= "email-bt" 
                placeholder="Trip Start" 
                name="Name"
                value={start}
                onChange={(e) => setStart(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="date" 
                className= "email-bt" 
                placeholder="Trip End Date" 
                name="Email"
                value={end}
                onChange={(e) => setEnd(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Destination" 
                name="Email"
                value={destination}
                onChange={(e) => setDestination(e.target.value)} />
             </div>
             <div className= "form-group">
                <input type="text" 
                className= "email-bt" 
                placeholder="Location" 
                name="Email"
                value={location}
                onChange={(e) => setLocation(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Trip Type" 
                name="Email"
                value={type}
                onChange={(e) => setType(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Trip Type" 
                name="Email"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
             </div>
             <div className= "form-group">
                <input 
                type="text" 
                className= "email-bt" 
                placeholder="Trip Type" 
                name="Email"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
             </div>
             
             <button type="submit" className= "send_btn"> Submit </button>
          </div>
        </form>
        </div>
      </div>
     );
}
 
export default EditTrip;