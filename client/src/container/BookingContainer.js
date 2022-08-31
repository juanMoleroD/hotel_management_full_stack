import React, {useEffect, useState} from "react";
import BookingList from "../component/BookingList";

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState( {name: ""} );
    
    const getBookings = () => {
        fetch("http://localhost:9000/api/bookings")
            .then(response => response.json())
            .then(result => setBookings(result));
    }

    useEffect(() => {
        getBookings()
    }, []);


    return (
        <>
            <header>
                <h1>Booking management system</h1>
            </header>
            <main>
                <section>
                    <h2>Add Booking</h2>
                    <form>
                        <label>Booking number</label>
                        <input type="text"/>
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