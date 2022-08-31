import React from "react";

const BookingList = ({bookings}) => {
    
    const bookingNodes = bookings.map( (booking, index) => {
        return <p key={index}>{booking.name}</p>
    })

    return (
        <>
            <h3>Bookings</h3>
            {bookingNodes}
        </>
    )
}

export default BookingList;