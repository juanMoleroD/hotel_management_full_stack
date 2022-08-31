import React from "react";

const BookingContainer = () => {
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
                    <p>this is a booking</p>
                    <button>Delete</button>
                    <p>this is a booking</p>
                    <button>Delete</button>
                    <p>this is a booking</p>
                    <button>Delete</button>
                    <p>this is a booking</p>
                    <button>Delete</button>
                </section>
            </main>
        </>
    )
}

export default BookingContainer;