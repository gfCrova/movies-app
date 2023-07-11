import { ImSpinner2 } from "react-icons/im";
import styles from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.containerSpinner}>
      <ImSpinner2 className={styles.spinner} size={60}/>
    </div>
  );
};
