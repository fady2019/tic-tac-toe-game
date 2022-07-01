import Home from './components/tic-tac-toe/home/Home';

import Container from './components/UI/Container';
import styles from './App.module.css';
import Footer from './components/UI/Footer';
import Game from './components/tic-tac-toe/game/Game';
import { useState } from 'react';

function App() {
  const [gameMetadata, setGameMetadata] = useState(null);

  const startingNewGameHandler = (metadata) => {
    setGameMetadata(metadata);
  };

  return (
    <div className={styles.App}>
      <main className={styles.main}>
        <Container>
          {!gameMetadata && <Home onStartingNewGame={startingNewGameHandler} />}

          {!!gameMetadata && (
            <Game
              gameMetadata={gameMetadata}
              onQuitGame={() => setGameMetadata(null)}
            />
          )}
        </Container>
      </main>

      <Footer className={styles.footer}>
        <span className="footer-text">
          Made with &#10084;&#65039; by Fady Emad
        </span>
      </Footer>
    </div>
  );
}

export default App;
