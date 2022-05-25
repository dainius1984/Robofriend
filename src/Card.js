import React from "react";

const Card = ({name, id, email}) => {
    return (
        <div className='bg-light-green dib br3 ma2'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2 className='tc'>{name}</h2>
                <p className='tc'>{email}</p>
            </div>
        </div>
    );
}

export default Card;