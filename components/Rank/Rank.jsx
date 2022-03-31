import { Square } from "../Square";
import styles from './Rank.module.css'

const Rank = (props) => {

  return (
    <div className={styles.rank}>
      <Square preta={props.color} />
      <Square preta={!props.color} />
      <Square preta={props.color} />
      <Square preta={!props.color} />
      <Square preta={props.color} />
      <Square preta={!props.color} />
      <Square preta={props.color} />
      <Square preta={!props.color} />
    </div>
  )
};

export default Rank;
