'use strict';
import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
    render(){
        return(
            <div>
            <h1>Animals</h1>
            <HornedBeasts elements={
                <div>
                    <h1>UniWhal</h1>
               <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal"  title="UniWhal"></img>
               <h3>A unicorn and a narwhal nuzzling their horns</h3>
               </div>
            }/>
            <HornedBeasts elements={ <div>
                    <h1>Rhino Family</h1>
               <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" alt="Rhino Family"  title="Rhino Family"></img>
               <h3>Mother (or father) rhino with two babies</h3>
               </div>}/>
            <HornedBeasts elements={<div>
                    <h1>Unicorn Head</h1>
               <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" alt="Unicorn Head"  title="Unicorn Head"></img>
               <h3>Someone wearing a creepy unicorn head mask</h3>
               </div>}/>
            </div>
        )
    }
}
export default Main;