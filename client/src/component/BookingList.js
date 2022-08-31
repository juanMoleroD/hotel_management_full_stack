import React from "react";
import Booking from "./Booking";

const BookingList = ({bookings, deleteByIndex}) => {
    
    const bookingNodes = bookings.map( (booking, index) => {
        return <Booking key={index} booking={booking} index={index} deleteByIndex={deleteByIndex} />
    })

    return (
        <>
            <h3>Bookings</h3>
            {bookingNodes}
        </>
    )
}

export default BookingList;