import React from "react";

const Booking = ({booking, index, deleteByIndex}) => {

    const handleButtonClick = (event) => {
        deleteByIndex(event.target.value);
    }

    return (
        <section className="booking-card">
            <h4>{booking.name}</h4>
            <button value={index} onClick={handleButtonClick}>Delete</button>
        </section> 
    )
}

export default Booking;