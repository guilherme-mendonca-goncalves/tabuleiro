import styles from './Square.module.css'

const Square = (props) => {

  return (
    <div
      style={{backgroundColor: props.preta ? "#000" : "#fff"}}
      className={styles.square}>

    </div>
  )
};

export default Square;
