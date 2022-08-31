import React, {useState} from "react";

const BookingForm = ({getBookings}) => {

    const [newBooking, setNewBooking] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: newBooking
        }
        fetch("http://localhost:9000/api/bookings", {
            method: "Post",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => getBookings());
        setNewBooking("");
    }

    const handleTextInput = (event) => {
        setNewBooking(event.target.value);
    }

    return( 
        <section id="booking-form-section">
            <h2>Add Booking</h2>
            <form id="booking-form" onSubmit={handleFormSubmit}>
                <label>Booking name</label>
                <input type="text" value={newBooking} onChange={handleTextInput}/>
                <input type="submit" value="send"/>
            </form>
        </section>
    )
}

export default BookingForm;