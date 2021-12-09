import React from 'react';
import './DateTime.css'

const DateTime = () => {


    const showdate = new Date();
    const displayDate =  (showdate.getMonth() + 1) + '-' + showdate.getDate() + '-' + showdate.getFullYear();
    console.log(displayDate)


    return (
        <div className="date">
            <h1>{displayDate}</h1>
        </div>
    );
}

export default DateTime;
