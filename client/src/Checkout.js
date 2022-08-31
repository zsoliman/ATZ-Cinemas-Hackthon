const Checkout = ({ purchaseData }) => {
    return (
        <div>
            <h2>Review your cart:</h2>
            <h3>Number of Tickets:</h3>
            <p>{purchaseData.length}</p>
            <h3>Total Price:</h3>
            <p>{purchaseData.length * 20}</p>
        </div>
    )
}

export default Checkout;