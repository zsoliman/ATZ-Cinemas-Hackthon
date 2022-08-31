rowLetters = ['A', 'B', 'C', 'D']
currRow = 0
currSeat = 0
20.times do |index|
  if index % 5 == 0 && index != 0
    currRow += 1
    currSeat = 0
  end
  currSeat += 1
  puts "Seat: #{rowLetters[currRow]}#{currSeat}"
end
