import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBus, getOneBus } from "../../redux/busSlice";
import { Link, useParams } from "react-router-dom";

const SingleBus = () => {
    const { isLoading, buses } = useSelector(state  => state.buses);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneBus(id));
    })
    return ( 
        <div>
            { isLoading && <div> Loading....</div> }
        <div className= "card" style={{ width: "18rem" }}>
            <div className= "card-header">
                Bus ID: { buses.id }
            </div>
            <ul className= "list-group list-group-flush">
                <li className= "list-group-item"> Bus Numbers: { buses.numbers } </li>
                <li className= "list-group-item"> Bus Chars: { buses.chars } </li>
                <li className= "list-group-item"> Bus Driver First Name: { buses.firstname } </li>
                <li className= "list-group-item"> Bus Driver Last Name: { buses.lastname } </li>
                <li className= "list-group-item"> Bus Driver Phone: { buses.phone } </li>
                <li className= "list-group-item"> Bus Driver License: { buses.license } </li>
            </ul>
            <div className= "card-footer">
            <button type="button" className= "btn btn-danger"
            onClick={ () => dispatch(deleteBus(buses.id))}>
                 Delete </button>
            <Link to= { "/editbus/" + buses.id }> 
            <button type="button" className= "btn btn-info">
                 Edit
            </button>
            </Link>
            </div>
        </div>
        </div>
     );
}
 
export default SingleBus;