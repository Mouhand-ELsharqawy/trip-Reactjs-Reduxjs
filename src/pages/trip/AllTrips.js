import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrip } from "../../redux/tripSlice";
import { Link } from "react-router-dom";

const AllTrip = () => {
    const dispatch = useDispatch();
    const { isLoading, trips } = useSelector(state => state.trips)
    useEffect(() => {
        dispatch(getTrip());
    })
    return ( 
        <div>
            { isLoading && <div> Loading.... </div> }

            <table className= "table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Start </th>
                    <th scope="col"> End </th>
                    <th scope="col"> destination </th>
                    <th scope="col"> Location </th>
                    <th scope="col"> Type </th>
                    <th scope="col"> Price </th>
                    <th scope="col"> Description </th>
                    </tr>
                </thead>
                <tbody>
                     
                    { trips && trips.length>0 ? trips.map((trip) => (
                        <tr>
                            <th scope="row"> { trip.id } </th>
                            <td> { trip.start } </td>
                            <td> { trip.end } </td>
                            <td> { trip.destination } </td>
                            <td> { trip.location } </td>
                            <td> { trip.type } </td>
                            <td> { trip.price } </td>
                            <td> { trip.description } </td>
                            <td>
                            <Link to= {"/onetrip/" + trip.id}> 
                                <button type="button" className= "btn btn-primary">
                                    Read
                                </button>
                            </Link> 
                            </td>
                        </tr>
                    )): "Ooooops there's no data"  }
                    
                </tbody>
            </table>
        </div>
     );
}
 
export default AllTrip;