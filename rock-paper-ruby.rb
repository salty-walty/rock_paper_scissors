player_score = 0
computer_score = 0
system 'clear'
puts "Let's play rock paper scissors!"
sleep 1
system 'clear'

until computer_score == 5 || player_score == 5

	puts "Player score: #{player_score} || Computer score: #{computer_score}"
	puts "1: Rock(r), 2: Paper(p), 3: Scissors(s)"

	valid_throws = %w(1 rock r 2 paper p 3 scissors s)
	player_throw = gets.chomp.downcase

	until valid_throws.include? player_throw
		puts "Please enter a valid selection"
		player_throw = gets.chomp.downcase
	end

	convert_input = [["1", "rock", "r"], ["2", "paper", "p"], ["3", "scissors", "s"]]
	convert_input.each_with_index do |set, i|
		if set.include? player_throw
			player_throw = i
		end
	end


	computer_throw = rand(0..2)

	number_to_word = {0 => "Rock", 1 => "Paper", 2 => "Scissors"}

	system 'clear'

	
	puts "YOU threw #{number_to_word[player_throw]}"
	sleep 0.5
	puts "COMPUTER threw #{number_to_word[computer_throw]}"
	sleep 0.5


	if player_throw == computer_throw
		puts "It's a tie!"
	elsif (player_throw - 1) % 3 == computer_throw
		puts "You win a point!"
		player_score += 1
	else
		puts "Computer wins a point!"
		computer_score += 1
	end

	puts
end

sleep 0.5

puts "FINAL SCORE"
puts "Player score: #{player_score} || Computer score: #{computer_score}"
if player_score == 5
	puts "You win the match!"
else
	puts "The computer wins the match!"
end