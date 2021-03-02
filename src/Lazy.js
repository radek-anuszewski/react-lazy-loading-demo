import moment from "moment";
import styles from './Lazy.module.css';

const Lazy = () => (
  <p className={styles.lazy}>Text with styles, current date: {moment(new Date()).format()}</p>
);

export default Lazy;
