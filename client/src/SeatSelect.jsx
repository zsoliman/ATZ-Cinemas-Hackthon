const SeatSelect = ({ purchaseData, setPurchaseData, seatData }) => {
   const seats = sliceIntoChunks(seatData, 5);

   // console.log(seatData)

   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
      return res;
   }

   const handleClick = (seatId, trigger) => {

      trigger.classList.toggle('clicked-seat')
      if (!purchaseData.includes(seatId)) {
         setPurchaseData([...purchaseData, seatId])
      } else {
         const filteredPurchases = purchaseData.filter((purchase) => purchase !== seatId)
         setPurchaseData(filteredPurchases)
      }
      // setPurchaseData(inCart)
      // fetch(`http://localhost:3000/seat/${seatId}`, {
      //    method: 'PATCH',
      //    headers: {
      //       'Content-type': 'application/json',
      //    },
      //    body: JSON.stringify({ 'is_available': false }),
      // });
      // .then(res => res.json())
      // .then(jsonres => console.log(jsonres))
   };

   console.log(seats);
   return (
      <div className='seat-page-container'>
         <div className='screen'> SCREEN </div>
         <div className='seat-list'>
            {seats.map((row) => {
               return (
                  <div className='seat-row'>
                     {row.map((seat) => {
                        return (
                           <div
                              className='seat'
                              onClick={(e) => handleClick(seat.id, e.target)}
                           >
                              {' '}
                              {seat.seat_num}{' '}
                           </div>
                        );
                     })}
                  </div>
               );
            })}
         </div>
      </div>
   );
};
export default SeatSelect;
