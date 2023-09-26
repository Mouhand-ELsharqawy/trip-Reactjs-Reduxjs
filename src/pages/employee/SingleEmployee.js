import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteUser, getOneUser } from "../../redux/userSlice";

const SingleEmployee = () => {
    const { isLoading, users } = useSelector(state => state.users)
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOneUser(id));
    })
    return ( 
        <div>
            { isLoading && <div> Loading....</div> }
        <div className= "card" style={{ width: "18rem" }}>
            <div className= "card-header">
                Employee ID: { users.id }
            </div>
            <ul className= "list-group list-group-flush">
                <li className= "list-group-item"> Employee First Name: { users.firstname } </li>
                <li className= "list-group-item"> Employee Middle Name: { users.middlename } </li>
                <li className= "list-group-item"> Employee Last Name: { users.lastname } </li>
                <li className= "list-group-item"> Employee Age: { users.age } </li>
                <li className= "list-group-item"> Employee Phone: { users.phone } </li>
                <li className= "list-group-item"> Employee Telephone: { users.telephone } </li>
                <li className= "list-group-item"> Employee Work: { users.work } </li>
                <li className= "list-group-item"> Employee Experience: { users.experience } </li>
                <li className= "list-group-item"> Employee Marital Status: { users.marital } </li>
            </ul>
            <div className= "card-footer">
            <button type="button" className= "btn btn-danger"
            onClick={ () => dispatch(deleteUser(users.id)) }>
                 Delete </button>
            <Link to= { "/editemployee/" + users.id }> 
            <button type="button" className= "btn btn-info">
                 Edit
            </button>
            </Link>
            </div>
        </div>
        </div>
     );
}
 
export default SingleEmployee;