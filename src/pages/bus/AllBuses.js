import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBus } from "../../redux/busSlice";
import { Link } from "react-router-dom";

const AllBus = () => {
    const dispatch = useDispatch();
    const { isLoading, buses } = useSelector( state => state.buses )
    useEffect( () => {
        dispatch(getBus());
    })
    return ( 
        <div>
            { isLoading && <div> Loading....</div> }
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Bus Numbers </th>
                    <th scope="col"> Bus Chars </th>
                    <th scope="col"> Driver FirstName </th>
                    <th scope="col"> Driver LastName </th>
                    <th scope="col"> Driver Phone </th>
                    <th scope="col"> Driver LiscenseType </th>
                    <th scope="col">  Operations </th>
                    </tr>
                </thead>
                <tbody>
                    { buses && buses.length > 0 ? buses.map((bus) => (
                        <tr key={ bus.id }>
                        <th scope="row"> { bus.id } </th>
                        <td> { bus.numbers } </td>
                        <td> { bus.chars } </td>
                        <td> { bus.firstname } </td>
                        <td> { bus.lastname } </td>
                        <td> { bus.phone } </td>
                        <td> { bus.license } </td>
                        <td> 
                            <Link to= { "/onebus/" + bus.id }> 
                            <button type="button" class="btn btn-primary">
                                Read
                            </button>
                            </Link> 
                        </td>
                    </tr>
                    )): "Ooops there is no data" }
                </tbody>
                </table>
                            {/* { error && <div> { error } </div> } */}
        </div>
     );
}
 
export default AllBus;