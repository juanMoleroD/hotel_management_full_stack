import React from "react";

const Booking = ({booking, deleteByIndex}) => {

    const handleButtonClick = (event) => {
        deleteByIndex(event.target.value);
    }

    return (
        <section className="booking-card">
            <h4>{booking.guestName}</h4>
            <h5>{booking.guestEmail}</h5>
            <h5>Status: {booking.guestStatus ? "Checked in" : "Pending"}</h5>
            <button value={booking._id} onClick={handleButtonClick}>Delete</button>
        </section> 
    )
}

export default Booking;