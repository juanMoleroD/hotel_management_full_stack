import React from "react";
import Booking from "./Booking";

const BookingList = ({bookings}) => {
    
    const bookingNodes = bookings.map( (booking, index) => {
        return <Booking key={index} booking={booking}/>
    })

    return (
        <>
            <h3>Bookings</h3>
            {bookingNodes}
        </>
    )
}

export default BookingList;