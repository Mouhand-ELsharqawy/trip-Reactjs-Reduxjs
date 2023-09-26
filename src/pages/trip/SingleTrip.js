import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteTrip, getOneTrip } from "../../redux/tripSlice";

const SingleTrip = () => {
    const { isLoading, trips } = useSelector(state => state.trips)
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOneTrip(id));
    })

    return ( 
        <div>
            { isLoading && <div> Loading....</div> }
        <div className= "card" style={{ width: "18rem" }}>
            <div className= "card-header">
                Trip ID: { trips.id }
            </div>
            <ul className= "list-group list-group-flush">
                <li className= "list-group-item"> Trip Starting Time: { trips.start } </li>
                <li className= "list-group-item"> Trip ending Time: { trips.end } </li>
                <li className= "list-group-item"> Trip Destination: { trips.destination } </li>
                <li className= "list-group-item"> Trip Location: { trips.location } </li>
                <li className= "list-group-item"> Trip Type: { trips.type } </li>
                <li className= "list-group-item"> Trip Price: { trips.price } </li>
                <li className= "list-group-item"> Trip Description: { trips.description } </li>
            </ul>
            <div className= "card-footer">
            <button type="button" className= "btn btn-danger"
                onClick={ () => dispatch(deleteTrip(trips.id))}>
                    Delete </button>
                <Link to= { "/edittrip/"+ trips.id }> 
                <button type="button" className= "btn btn-info">
                    Edit
                </button>
                </Link>
            </div>
        </div>
        </div>
     );
}
 
export default SingleTrip;