import styles from './RenderOutput.module.css';

export default function RenderOutput(props) {

    return (
        <div className={styles.output}>
            <input placeholder='for eg. 3+3=, 225+25%, ...' value={props.expression} id={styles.expression} type='text' readOnly></input>
            <input placeholder='0' value={props.result} id={styles.result} type='text' readOnly></input>
        </div>
    )
}