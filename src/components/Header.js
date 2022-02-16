import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Header =() =>{
    return (
        <div className="header">
            <h1>Messaging</h1>
            <div id='button'>
            <Link to = {{pathname : "/buckets"}}>
            <Button variant="contained" color="primary" >Highlight Groups</Button>
            </Link>
            </div>
        </div>
    )
};

export default Header;