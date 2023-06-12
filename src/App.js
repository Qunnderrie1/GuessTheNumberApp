
import { useEffect, useState } from 'react';
import './App.css';
import correctAudio from './Audio/winsound.mp3'
import patrick from './Images/patrick.gif'
function App() {

  const [guessNumber , setGuessNumber] = useState();
  const [userChances , setUserChances] = useState(5);
  const [userScore , setUserScore] = useState(50)
  const [rand , setRand] = useState(Math.floor(Math.random() * 10))
  const [gameText , setGameText] = useState("")
  const [emolji , setEmoji] = useState(['']);
  const [closeModal , setCloseModal ] = useState(true)


 




  const handleGuesNumber = () => {

    const emojis = [`\u{1F44D}`, `\u{1F44E}`, '\u{1F60E}', '\u{1F631}' , '\u{1F61E}'];


    const audio = document.querySelector(".myAudio");

    if(guessNumber == rand){

       // Check for winnwer
      setGameText("Correct!")
      setRand(Math.floor(Math.random() * 10))
      setUserScore(userScore + 5)
      setUserChances(userChances + 1)
      setGuessNumber('')
      setEmoji(emojis[2])
      audio.play()


    }else if(guessNumber < rand){


      setGameText("Go Higher!")
      setUserChances(userChances - 1)
      setUserScore(userScore - 1)
      setGuessNumber('')
      setEmoji(emojis[0])
    } 
    
    else if(guessNumber > rand){


      setGameText("Go Lower!")
      setUserChances(userChances - 1)
      setUserScore(userScore - 1)
      setGuessNumber('')
      setEmoji(emojis[1])
    }
    
    else{
      setGameText("Try Again!")
      setUserChances(userChances - 1)
      setUserScore(userScore - 1)
      setGuessNumber('')
      setEmoji(emojis[3])
    }


    // Check user input is greater than 10
    if(guessNumber > 10){
      alert("Only Choose number 1 - 10.")
      setGuessNumber(0)
      setGameText('')
      setEmoji(emojis[''])
      setUserChances(userChances)
    }

    if(guessNumber == undefined || guessNumber == '' || guessNumber == null){
      setGameText("Please enter a number")
      setGuessNumber()
      setUserScore(userScore)
      setUserChances(userChances)
      setEmoji(emojis[''])
    }



    // Check to see if user is out of chances
    if(userChances <= 0){
      setUserChances(5)
      alert("GAME OVER!")
      setGameText("")
      setEmoji(emojis[''])
    }


    

  }


  const handleModal = () => {
    setCloseModal(false)
  }


  return (



    <div className="App">
      <div className='box'></div>
      <div className={ closeModal ? 'instructionsContainer' : 'instructionsContainer active'}>

        <div className='gameInstructionsContainer container'>
          <h3>Guess The Number</h3>
          <hr />
          <p>Instructions: You will start the game with 50 points. Input your number and click the 'GUESS' button. You have 5 chances to get the number right. Once you 
            run out of chances, or you fall below 0 points the game will be over. If you guess correctly, your score and number of chances will increase.   </p>



            <button onClick={handleModal} className='startBtn'>Start Game</button>
        </div>
        

      </div>
      <h1>GUESS THE NUMBER</h1>

      <div className='gameContainer container'>
        <div className='playerScorceContainer'>
          <p>Points: {userScore} </p>
        </div>
        <div className='gameBoard'>
          <div className='gameHeaderContainer'>
          <p>Guess a number from 1 - 10</p>
          <div className='emojiContainer'>
          <p className='gameText'>{gameText}</p>
          <audio className='myAudio'>
            <source  src={correctAudio}  type="audio/ogg" />
            <source  src={correctAudio}  type="audio/mpeg" />

          </audio>

          <p>{emolji} </p>
          </div>
          </div>
          <div className='userContainer'>
          <input onChange={(e) => setGuessNumber(e.target.value)} value={guessNumber} max='2' type='number' placeholder='10' />
          <button  onClick={handleGuesNumber}>GUESS</button>
          </div>
          <p>You have  <span className='chancesText'>{userChances}</span> chances remaining.</p>
        </div>

      </div>

      <footer>Version 1.0</footer>
    </div>
  );
}

export default App;
