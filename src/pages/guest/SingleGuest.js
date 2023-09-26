import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
import { deleteGuest, getOneGuest } from "../../redux/guestSlice";

const SingleGuest = () => {
    const { isLoading, guests } = useSelector(state => state.guests)
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOneGuest(id));
    })
    return ( 
        <div>
            { isLoading && <div> Loading....</div> }
        <div className= "card" style={{ width: "18rem" }}>
            <div className= "card-header">
                Guest ID: { guests.id }
            </div>
            <ul className= "list-group list-group-flush">
                <li className= "list-group-item"> Guest First Name: { guests.firstname } </li>
                <li className= "list-group-item"> Guest Last Name: { guests.lastname } </li>
                <li className= "list-group-item"> Guest Phone: { guests.phone } </li>
                <li className= "list-group-item"> Guest National ID: { guests.nationid } </li>
                <li className= "list-group-item"> Guest Nationality: { guests.nationality } </li>
                <li className= "list-group-item"> Guest Age: { guests.age } </li>
                <li className= "list-group-item"> Guest Health Status: { guests.health } </li>
            </ul>
            <div className= "card-footer">
            <button type="button" className= "btn btn-danger"
            onClick={ () => dispatch(deleteGuest(guests.id)) }>
                 Delete </button>
            <Link to= { "/editguest/" + guests.id }> 
            <button type="button" className= "btn btn-info">
                 Edit
            </button>
            </Link>
            </div>
        </div>
        </div>
     );
}
 
export default SingleGuest;