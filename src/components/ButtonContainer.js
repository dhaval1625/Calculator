import styles from './ButtonContainer.module.css';
import Button from '../UI/Button';
import { BUTTONS } from '../Helpers/Config';
import historyIcon from '../Icons/history.svg';

export default function ButtonContainer(props) {

    function renderExpressionHandler(e) {
        const value = e.target.value.replace(/\u00F7/, '/').replace(/\u00D7/, '*'); //Replacing division unicode with division operator and multiply unicode with multiply operator
        props.clickedButton(value);
    }

    function renderHistoryHandler() {
        props.clickedHistory();
    }

    return (
        <div className={styles['button-container']}>
            <Button onClick={renderHistoryHandler} className={styles['history-button']}>
                <img className={styles.history} src={historyIcon} />
            </Button>
            {BUTTONS.map(button => <Button onClick={renderExpressionHandler} value={button.value} className={button.className} key={button.id}>{button.value}</Button>)}
        </div>
    )
}