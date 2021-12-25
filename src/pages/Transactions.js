import { useParams } from "react-router-dom"
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments"
const Transactions = () =>{
    const params = useParams();
    return(
        <div>
        <h1>Quote Details</h1>
        <p>{params.quoteId}</p>
        <Route path = {`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
        </Route>
        </div>
    )
}


export default Transactions