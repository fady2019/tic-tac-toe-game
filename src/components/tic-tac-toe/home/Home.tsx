import styles from './Home.module.css';

import Card from '../../UI/Card';
import Logo from '../../UI/Logo';
import Button from '../../UI/Button';

import PickMark from './PickMark';

const Home = (props) => {
  let player1Mark: string;

  const pickMarkHandler = (mark) => {
    player1Mark = mark;
  };

  const startNewGameHandler = (enemy: string) => {
    props.onStartingNewGame({ player1Mark: player1Mark, enemy });
  };

  return (
    <section className={styles.home}>
      <Logo className={styles.logo} centerLogo={true} size={20} />

      <Card className={styles['pick-mark-container']}>
        <h6>pick player 1's mark</h6>
        <PickMark onPickMark={pickMarkHandler} />
        <p>remember : x goes first</p>
      </Card>

      <Button className="btn1" onClick={startNewGameHandler.bind(null, 'PC')}>
        new game (vs cpu)
      </Button>
      <Button
        className="btn2"
        onClick={startNewGameHandler.bind(null, 'PLAYER')}
      >
        new game (vs player)
      </Button>
    </section>
  );
};

export default Home;
