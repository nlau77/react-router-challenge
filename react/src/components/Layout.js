import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const Layout = (props) => {

 return(
   <div>
    <BackButton />
     <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
     <Link to='/'> About </Link>
     <Link to='/resume'> Resume </Link>
     <Link to='/projects'> Projects </Link>
      { props.children }
   </div>
 )
}

export default Layout;
