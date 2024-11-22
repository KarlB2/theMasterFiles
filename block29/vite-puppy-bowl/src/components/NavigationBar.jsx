import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div id='navbar'>
            <h3>Puppy Bowl!</h3>
            <Link to="/">Home</Link> |
            <Link to="/AllPuppies">Puppies</Link> |
            <Link to="/AddPuppy">Enlist Puppy</Link>
        </div>
    );
}
