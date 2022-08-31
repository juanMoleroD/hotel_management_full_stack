import React, {useEffect, useState} from "react";
import BookingList from "../component/BookingList";
import BookingForm from "./BookingForm";

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);
    
    const getBookings = () => {
        fetch("http://localhost:9000/api/bookings")
            .then(response => response.json())
            .then(result => setBookings(result));
    }

    const deleteByIndex = (index) => {
        fetch("http://localhost:9000/api/bookings/" + index, {method: "Delete"})
            .then(() => getBookings());
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
                <BookingForm getBookings={getBookings}/>
                <h2>All Bookings</h2>
                <section>
                    {bookings ?
                    <BookingList bookings={bookings} deleteByIndex={deleteByIndex}/>:
                    <p>Loading...</p> }
                </section>
            </main>
        </>
    )
}

export default BookingContainer;