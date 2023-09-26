import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuest } from "../../redux/guestSlice";
import { Link } from "react-router-dom";

const AllGuest = () => {
    const dispatch = useDispatch();
    const { isLoading, guests } = useSelector(state => state.guests);

    useEffect(()=>{
        dispatch(getGuest());
    })
    return ( 
        <div>
            { isLoading && <div> Loading.... </div> }
            <table className= "table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Guest FirstName</th>
                    <th scope="col"> Guest LastName</th>
                    <th scope="col"> Guest Phone </th>
                    <th scope="col"> Guest ID </th>
                    <th scope="col"> Nationality </th>
                    <th scope="col"> Guest Age </th>
                    <th scope="col"> Health Status </th>
                    <th scope="col"> Operations </th>
                    </tr>
                </thead>
                <tbody>
                    { guests && guests.length> 0 ? guests.map((guest) => (
                        <tr>
                            <th scope="row"> { guest.id } </th>
                            <th scope="row"> { guest.firstname } </th>
                            <th scope="row"> { guest.lastname } </th>
                            <th scope="row"> { guest.phone } </th>
                            <th scope="row"> { guest.nationid } </th>
                            <th scope="row"> { guest.nationality } </th>
                            <th scope="row"> { guest.age } </th>
                            <th scope="row"> { guest.health } </th>
                            <th> 
                            <Link to= { "/oneguest/" + guest.id }> 
                            <button type="button" className= "btn btn-primary">
                                Read
                            </button>
                            </Link> 
                        </th>
                        </tr>
                    )): "Oooooops there's no data" }
                </tbody>
                </table>
        </div>
     );
}
 
export default AllGuest;