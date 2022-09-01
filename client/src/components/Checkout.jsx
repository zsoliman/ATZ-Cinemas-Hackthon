const Checkout = ({ purchaseData, currentTicket }) => {
  console.log('purchasedata', purchaseData)
  console.log('currentTickets:', currentTicket)

  const handleTicketPurchase = () => {
    for(let i = 0; i < purchaseData.length; i++){
      fetch(`http://localhost:3000/seat/${purchaseData[i]}`, {
       method: 'PATCH',
       headers: {
         'Content-type': 'application/json',
       },
       body: JSON.stringify({ 'is_available': false }),

       
     });
     fetch(`http://localhost:3000/tickets/${currentTicket[i]}`, {
       method: 'PATCH',
       headers: {
         'Content-type': 'application/json',
       },
       body: JSON.stringify({ 'seat_id': purchaseData[i] }),
     });
    }
  }
    // fetch(`http://localhost:3000/seat/${seatId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ 'seat_id': false }),
    // });

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2>Review your cart:</h2>
        <h3>Number of Tickets:</h3>
        <p>{purchaseData.length}</p>
        <h3>Total Price:</h3>
        <p>{purchaseData.length * 20}</p>
        <button onClick={handleTicketPurchase}> Confirm </button>
      </div>
    </div>
  )
}

export default Checkout;