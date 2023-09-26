import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
import { deleteMotel, getOneMotel } from "../../redux/motelSlice";

const SingleMotel = () => {
    const { isLoading, motels } = useSelector(state => state.motels)
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOneMotel(id));
    })
    return ( 
        <div>
            { isLoading && <div> Loading....</div> }
        <div className= "card" style={{ width: "18rem" }}>
            <div className= "card-header">
                Motel ID: { motels.id }
            </div>
            <ul className= "list-group list-group-flush">
                <li className= "list-group-item"> Motel Name: { motels.name } </li>
                <li className= "list-group-item"> Motel Location:  { motels.location } </li>
                <li className= "list-group-item"> Motel Size: { motels.size } </li>
                <li className= "list-group-item"> Motel City:  { motels.city } </li>
                <li className= "list-group-item"> Motel Count: { motels.count } </li>
            </ul>
            <div className= "card-footer">
                <button type="button" className= "btn btn-danger"
                onClick={() => dispatch(deleteMotel(motels.id))}>
                    Delete </button>
                <Link to= { "/editmotel/"+ motels.id }> 
                <button type="button" className= "btn btn-info">
                    Edit
                </button>
                </Link>
            </div>
        </div>
        </div>
     );
}
 
export default SingleMotel;