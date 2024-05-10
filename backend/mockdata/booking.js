listBooking = [];

bookingAction = {}

bookingAction.create = (booking) => 
{
    listBooking.push(booking)
}

bookingAction.delete = (id) => 
{
    const index = listBooking.findIndex((e) => e.id == id);
    console.log(index);
    if (index >=0 && index < listBooking.length) listBooking.splice(index, 1);
}

bookingAction.getAll = () => listBooking;

module.exports = bookingAction;