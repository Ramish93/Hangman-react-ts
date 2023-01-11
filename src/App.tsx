import { useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import HangmanWord from "./components/HangmanWord";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>lose win</div>
      <HangmanDrawing numberOfGussess={incorrectLetters.length} />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
