use hotel;

db.dropdatabase();

db.bookings.insertMany([
    {
        guestName: "Juan Molero",
        guestEmail: "juanmolero@email.com",
        guestStatus: true
    },
    {
        guestName: "Diego Molero",
        guestEmail: "diegomolero@email.com",
        guestStatus: true
    },
    {
        guestName: "Maria Molero",
        guestEmail: "mariamolero@email.com",
        guestStatus: false
    },
    {
        guestName: "Delia Paternina",
        guestEmail: "deliapaterninao@email.com",
        guestStatus: true
    }
]);