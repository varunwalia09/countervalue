import{Link} from 'react-router-dom'

function Page404(){
    return(
        <div>
            <h1>this server is not working page 404</h1>
            <Link to="/Home">Go to Home page</Link>
        </div>
    )
}
export default Page404;