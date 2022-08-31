import React, {useState} from "react";

const BookingForm = ({getBookings}) => {

    const [newBooking, setNewBooking] = useState({
        guestName: "",
        guestEmail: "",
        guestStatus: "Pending"
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/api/bookings", {
            method: "Post",
            body: JSON.stringify(newBooking),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            getBookings();
            setNewBooking({
                guestName: "",
                guestEmail: "",
                guestStatus: "Pending"
            })
        });
    }

    const handleTextInput = (event) => {
        const newFormInput = Object.assign({}, newBooking);
        newFormInput[event.target.name] = event.target.value;
        setNewBooking(newFormInput);
    }

    return( 
        <section id="booking-form-section">
            <h2>Add Booking</h2>
            <form id="booking-form" onSubmit={handleFormSubmit}>
                <label>Guestname</label>
                <input type="text" name="guestName" value={newBooking.guestName} onChange={handleTextInput}/>
                <label>Guest Email</label>
                <input type="text" name="guestEmail" value={newBooking.guestEmail} onChange={handleTextInput}/>
                <label>Status</label>
                <input type="text" name="guestStatus" value={newBooking.guestStatus} onChange={handleTextInput}/>
                <br/>
                <input type="submit" value="ADD BOOKING"/>
            </form>
        </section>
    )
}

export default BookingForm;