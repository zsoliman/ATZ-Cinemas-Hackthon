const SeatSelect = ({ seatData }) => {
   const seats = sliceIntoChunks(seatData, 5);

   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
      return res;
   }

   const handleClick = (seatId) => {
    console.log(seatId)
    fetch(`http://localhost:3000/seat/${seatId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({"is_available": false})
    })
    // .then(res => res.json())
    // .then(jsonres => console.log(jsonres))
   }

   console.log(seats);
   return (
      <div className='seat-page-container'>
        <div className="screen"> SCREEN </div>
         <div className='seat-list'>
            {seats.map((row) => {
               return (
                  <div className="seat-row">
                     {row.map((seat) => {
                        return <div className='seat' onClick={() => handleClick(seat.id)}> {seat.seat_num} </div>;
                     })}
                  </div>
               );
            })}
         </div>
      </div>
   );
};
export default SeatSelect;
