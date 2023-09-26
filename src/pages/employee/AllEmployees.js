import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/userSlice";
import { Link } from "react-router-dom";

const AllEmployee = () => {
    const dispatch = useDispatch();
    const { isLoading, users } = useSelector( state => state.users )
    useEffect(() => {
        dispatch(getUser());
    })
    return ( 
        <div>
            { isLoading && <div> Loading.... </div> }
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col"> FirstName </th>
                <th scope="col"> MiddleName </th>
                <th scope="col"> LastName </th>
                <th scope="col"> Age </th>
                <th scope="col"> Phone </th>
                <th scope="col"> Telephone </th>
                <th scope="col"> Work on </th>
                <th scope="col"> experience </th>
                <th scope="col"> Marital Status </th>
                <th scope="col"> Operation </th>
                </tr>
            </thead>
            <tbody>
                
                { users && users.length>0 ? users.map((user) => (
                    <tr key={user.id} >
                        <th> { user.id } </th>
                        <th> { user.firstname } </th>
                        <th> { user.middlename } </th>
                        <th> { user.lastname } </th>
                        <th> { user.age } </th>
                        <th> { user.phone } </th>
                        <th> { user.telephone } </th>
                        <th> { user.work } </th>
                        <th> { user.experience } </th>
                        <th> { user.marital } </th>
                        <td> 
                            <Link to= {"/oneemployee/"+user.id}> 
                            <button type="button" className= "btn btn-primary">
                                Read
                            </button>
                            </Link> 
                        </td>
                    </tr>
                )): "Oooooooops there's no data" }
            </tbody>
            </table>
        </div>
     );
}
 
export default AllEmployee;