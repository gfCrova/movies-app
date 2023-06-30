import { ImSpinner3 } from "react-icons/im";
import styles from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.containerSpinner}>
      <ImSpinner3 className={styles.spinner} size={60}/>
    </div>
  );
};
