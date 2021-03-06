import { Button } from '@material-ui/core';
import React, {useState} from 'react'
import './Banner.css'; 
import { useHistory } from "react-router-dom";
import Search from './Search';
function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
            <Button onClick={()=> setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">{showSearch? "Hide": "Show Dates"}</Button>
            </div>
            
            <div className="banner__info">
                <h1>Get out and stretch your imaginaton</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push('/search')} variant="outlined"> Explore Nearby</Button>
            </div>

            
        </div>
    )
}

export default Banner
