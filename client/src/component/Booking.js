import React from "react";

const Booking = ({booking}) => {
    return (
        <section className="booking-card">
            <h4>{booking.name}</h4>
            <button>Delete</button>
        </section> 
    )
}

export default Booking;