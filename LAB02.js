const prompt = require('prompt');

// Function to generate computer's selection
function generateComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.34) {
        return 'PAPER';
    } else if (randomNumber <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return {
            outcome: "It's a tie",
            art: `
            ██████████████████████                                
            ██                      ██                              
          ██                          ██                            
          ██                          ██                            
          ██████                  ██████                            
            ████████          ████████                              
              ████████      ████████                                
                ████  ██████  ████                                  
                    ██████████                                      
                      ██████                                        
                                                                    
                      ██████                                        
                      ██████                                        
                      ██████                                        
                      ██████                                        
                      ██████                                        
                    ██████████                                      
                    ██████████                                      
                    ██████████                                      
                    ██████████                                      
                    ██████████                                      
                    ██████████                                      
                  ██████████████                                    
                  ██████████████                                    
                  ██████████████                                    
                    ██████████                                      
                    ██████████                                      
                      ██████                                        
                        ██      
               ITS A TIE ! 
            `,
            selection: userSelection
        };
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return {
            outcome: 'CONGRATULATIONS! you Win!! ',
            art: `
            ⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠠⢿⣿⠇⠀⠀⠀⣴⣦⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠀⠸⠿⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠁⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣼⣯⣅⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⢀⣤⡀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⣠⠞⠋⣿⡇⢀⣽⠇⠀⠀⠀⠀
            ⠀⠀⠀⠀⠘⠛⠃⠀⢤⣤⣤⣿⣦⠀⠀⠀⠀⣰⣏⣀⡀⠘⠛⠛⠉⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡄⠀⠀⠀⢀⣴⢾⣿⠉⠉⣿⠀⠀⠀⠐⣾⣷⠄⠀⠀
            ⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⣾⠃⠀⠻⣶⠾⠋⠀⠀⠀⠈⠈⠁⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣶⣄⠀⠸⠏⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⢀⡀⠀
            ⠀⠀⠀⠀⠀⣦⠈⢿⣿⣿⣿⣿⣷⣄⠀⠀⠀⣤⡀⢠⡿⠻⣦⣀⣠⣴⠾⠛⠁⠀ 
            ⠀⠀⠀⠀⠸⣿⣷⣄⠻⣿⣿⣿⣿⣿⣷⡄⠀⠈⠻⠟⠁⠀⠈⠉⠁⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⣄⠙⠻⣿⣷⣌⠻⣿⣿⣿⣿⣿⡄⠀⠀⠀⢠⣶⡄⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠸⣿⣿⣦⣈⠙⠿⣷⣄⠙⠻⠿⣿⠇⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⢠⣦⣈⠙⠿⣿⣷⣦⡄⠉⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⣼⠿⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        
            YOU WIN !
            `,
            selection: userSelection
        };
    } else {
        return {
            outcome: 'aw, try again !',
            art: `


            X       X
            X     X 
             X   X  
              X X   
               X    
              X X   
             X   X  
            X     X 
           X       X
           

        You lose ! 
            `,
            selection: userSelection
        };
    }
}

// Prompt user to choose ROCK, PAPER, or SCISSORS
prompt.start();
console.log('Please choose ROCK, PAPER, or SCISSORS.');
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    const userSelection = (result.userSelection || '').toUpperCase();
    if (userSelection !== 'ROCK' && userSelection !== 'PAPER' && userSelection !== 'SCISSORS') {
        console.log('Invalid input. Please choose ROCK, PAPER, or SCISSORS.');
        return;
    }
    const computerSelection = generateComputerSelection();

    console.log('Your Selection: ' + userSelection);
    console.log(getArt(userSelection));
    console.log('Computer Selection: ' + computerSelection);
    console.log(getArt(computerSelection));

    const { outcome, art, selection } = determineWinner(userSelection, computerSelection);
    console.log('Outcome:', outcome);
    console.log(art);
});

function onErr(err) {
    console.error(err);
    return 1;
}

function getArt(selection) {
    switch (selection) {
        case 'ROCK':
            return `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;
        case 'PAPER':
            return `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`;
        case 'SCISSORS':
            return `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;
        default:
            return '';
    }
}
