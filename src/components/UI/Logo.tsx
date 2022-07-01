import O from './O';
import X from './X';

import styles from './Logo.module.css';

const Logo = (props) => {
  return (
    <div
      className={`${props.className} ${styles.logo} ${
        props.centerLogo && styles.center
      }`}
    >
      <X size={props.size || 15} />
      <O size={props.size || 15} />
    </div>
  );
};
export default Logo;
