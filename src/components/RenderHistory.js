import styles from './RenderHistory.module.css'
import Button from '../UI/Button'
import { useEffect,useState } from 'react';

export default function RenderHistory(props) {

    const [historyArr, setHistoryArr] = useState(new Array);
    const [visible, setVisible] = useState('');

    useEffect(() => {
        if(props.className) setVisible(styles.visible);
        else setVisible('');
    },[props.className]);

    useEffect(() => {
        if(props.history) setHistoryArr(prev => {

            if(prev.length === 15) prev.shift();
            return [...prev, props.history]
        })
    },[props.history])

    return (
        <div className={`${styles['history-modal']} ${visible}`}>
            {historyArr.length === 0 && <h2 className={styles.message}>No history found!</h2>}
            <h3 className={styles.heading}>History</h3>
            <Button onClick={props.clickedClose} className={styles.close}>❌</Button>
            {historyArr.length > 0 && historyArr.map((hist,i) => <p key={i}>{hist}</p>)}
        </div>
    )
}