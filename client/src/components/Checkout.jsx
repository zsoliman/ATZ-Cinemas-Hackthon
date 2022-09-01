const Checkout = ({ purchaseData }) => {
  console.log('purchasedata', purchaseData)
  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2>Review your cart:</h2>
        <h3>Number of Tickets:</h3>
        <p>{purchaseData.length}</p>
        <h3>Total Price:</h3>
        <p>{purchaseData.length * 20}</p>
        <button> Confirm </button>
      </div>
    </div>
  )
}

export default Checkout;