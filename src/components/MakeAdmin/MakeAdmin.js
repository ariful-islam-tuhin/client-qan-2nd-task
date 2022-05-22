import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
        <h2>Make an Admin is not for General user</h2>
        <form >
            <TextField
                sx={{ width: '50%' }}
                label="Email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
            <Button type="submit" variant="contained">Make Admin</Button>
        </form>
       
    </div>
    );
};

export default MakeAdmin;