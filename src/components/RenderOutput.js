import styles from './RenderOutput.module.css';

export default function RenderOutput(props) {

    return (
        <div className={styles.output}>
            <input value={props.expression} id={styles.expression} type='text' readOnly></input>
            <input value={props.result} id={styles.result} type='text' readOnly></input>
        </div>
    )
}