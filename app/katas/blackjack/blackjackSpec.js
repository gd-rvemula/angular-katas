describe('Blackjack', function() {
   it('should return the winner', function() {
       expect(blackjack(['2'], [])).toEqual('Player Wins');
       expect(blackjack([], ['2'])).toEqual('Dealer Wins');
   });
   
   it('Numeric cards are scored two to nine', function() {
      expect(sumHand(['2', '3', '4', '5', '6', '7', '8', '9'])).toEqual(44);
   });
   
   it('Jack, Queen, King are scored as ten.', function() {
      expect(sumHand(['J', 'Q', 'K'])).toEqual(30);
   });
   
   it('Ace can be scored as either one or eleven.', function() {
      expect(sumHand(['A'])).toEqual(11);
      expect(sumHand(['10', 'J', 'A'])).toEqual(21);
   });
   
   it('If someone scores over 21 they are disqualified.', function() {
     expect(blackjack(['2', 'K', 'Q'], ['2'])).toEqual('Dealer Wins');
   });
   
   it('If the score is the same between a dealer and a player, then the dealer wins no matter how many cards the dealer uses.', function() {
     expect(blackjack(['2'], ['2'])).toEqual('Dealer Wins');
   });
   
   it('The only exception is if the player has the perfect score (21) and uses only two cards.', function() {
     expect(blackjack(['A', 'Q'], ['K', 'Q', 'A'])).toEqual('Player Wins');
   });
   
   it('Finally if the dealer has the perfect score (21) and uses two cards and the player has the same score (21) and uses two cards, then the dealer wins.', function() {
     expect(blackjack(['A', 'Q'], ['A', 'Q'])).toEqual('Dealer Wins');
   });
   
   it('The person with the nearest score to 21 wins.', function() {
     expect(blackjack(['K', '7'], ['Q', '6'])).toEqual('Player Wins');
     expect(blackjack(['K', '6'], ['Q', '7'])).toEqual('Dealer Wins');
   });
});