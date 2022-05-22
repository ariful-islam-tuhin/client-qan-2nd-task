import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{marginTop:'-200px'}} src="https://i.stack.imgur.com/6M513.png" alt="" />
            <Link to ='/login'> <Button>Go to Homepage</Button></Link>
           
        </div>
       
    );
};

export default NotFound;