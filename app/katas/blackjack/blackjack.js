function sumHand(hand) {
    return hand.reduce(function (prev, card) {
        if (card === 'J' || card === 'K' || card === 'Q') {
            return prev + 10;
        }
        
        if (card === 'A') { /* TODO: tricky */
            if (prev + 11 >= 21) {
                return prev + 1;
            }
            
            return prev + 11;
        }
        
        return prev + parseInt(card);
    }, 0);    
}

function blackjack (playerHand, dealerHand) {
    var playerSum = sumHand(playerHand);
    var dealerSum = sumHand(dealerHand);
    
    var playerWins = true;
    var dealerWins = false;
    
    if (dealerSum === 21 && playerSum === 21 && playerHand.length === 2 && dealerHand.length === 2) {
        dealerWins = true;
    }
    
    else {
        if (playerSum === 21 && playerHand.length == 2 && dealerHand.length !== 2) {
            playerWins = true;
        }
        
        else if (playerSum > 21 || (dealerSum >= playerSum && dealerSum <= 21)) { /* Vegas is rigged; dealer always win if equal */
           dealerWins = true;
        }
    }
   
   return dealerWins ? 'Dealer Wins' : 'Player Wins';
}