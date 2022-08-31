import React, {useEffect, useState} from "react";
import BookingList from "../component/BookingList";

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState("");
    
    const getBookings = () => {
        fetch("http://localhost:9000/api/bookings")
            .then(response => response.json())
            .then(result => setBookings(result));
    }

    useEffect(() => {
        getBookings()
    }, []);


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

    return (
        <>
            <header>
                <h1>Booking management system</h1>
            </header>
            <main>
                <section>
                    <h2>Add Booking</h2>
                    <form id="booking-form" onSubmit={handleFormSubmit}>
                        <label>Booking name</label>
                        <input type="text" value={newBooking} onChange={handleTextInput}/>
                        <input type="submit" value="send"/>
                    </form>
                </section>
                <h2>All Bookings</h2>
                <section>
                    {bookings ?
                    <BookingList bookings={bookings}/>:
                    <p>Loading...</p> }
                    
                </section>
            </main>
        </>
    )
}

export default BookingContainer;