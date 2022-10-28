import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function Sidebar()
{
    const { isSidebarOpen, setIsSidebarOpen} = useGlobalContext();
    //console.log(isSidebarOpen);
    return(
        <aside className={`${isSidebarOpen === true ? 'sidebar__overlay':'sidebar__basic '}`}>
             <div className="sidebar__container">
                <Link to='/' onClick={() => setIsSidebarOpen(false)}>home</Link>
                <Link to='/shop' onClick={() => setIsSidebarOpen(false)}>shop</Link>
                <Link to='/sustainabilty' onClick={() => setIsSidebarOpen(false)}>Sustainabilty</Link>
                <Link to='/swatches' onClick={() => setIsSidebarOpen(false)}>swatches</Link>
                <Link to='/about' onClick={() => setIsSidebarOpen(false)}>about</Link>
                <Link to='/login' onClick={() => setIsSidebarOpen(false)}>login</Link>

             </div>
        </aside>
    )
}