import './Loader.css'
import Spinner from 'react-bootstrap/Spinner';

const Loader = ({ loading }) => {

    if (loading)
        return <></>
        
    return(
        <div className="loader-container">
            <h2 className='loading'>Cargando</h2>
            <Spinner animation="border" variant="info" />
        </div>
    )
}

export default Loader