import { useState } from "react"
import Profile from "./Auth0/Profile"

const Checkout = ({ purchaseData, currentTicket }) => {
  const [confirmed, setConfirmed] = useState(false)

  console.log('purchasedata', purchaseData)
  console.log('currentTickets:', currentTicket)

  const handleTicketPurchase = () => {
    for (let i = 0; i < purchaseData.length; i++) {
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

      setConfirmed(true)
    }
  }

  const handleConfirmClick = () => {
    // prompt('Please enter an email address')
  }

  return (
    <div className="checkout-container">
      <Profile />
      <div className="checkout-card">

        {confirmed ?
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h2>Order confirmation has been sent to your email</h2>
          </div>
          :
          <div>
            <h2>Review your cart:</h2>
            <h3>Number of Tickets:</h3>
            <p>{purchaseData.length}</p>
            <h3>Total Price:</h3>
            <p>{purchaseData.length * 20}</p>
            <button onClick={handleTicketPurchase}> Checkout </button>
          </div>}

      </div>
    </div>
  )
}

export default Checkout;