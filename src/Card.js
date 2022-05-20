import React from "react";

const Card = () => {
    return (
        <div className='bg-light-green dib br3 ma2'>
            <img alt='robots' src='https://robohash.org/test?200x200'/>
            <div>
                <h2 className='tc'>Name</h2>
                <p className='tc'>email</p>
            </div>
        </div>
    );
}

export default Card;