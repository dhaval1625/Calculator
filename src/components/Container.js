import ButtonContainer from './ButtonContainer';
import styles from './Container.module.css';
import RenderOutput from './RenderOutput';
import RenderHistory from './RenderHistory';
import { useState, useEffect } from 'react';
import { evaluateInput, validateInput } from '../Helpers/HelperFunction';

export default function Container() {

    // const [content, setContent] = useState('');
    const [exp, setExp] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState(null);
    const [clickedHistory, setClickedHistory] = useState(false);

    function renderHistory() {
        setClickedHistory(true);
    }

    function hideHistory() {
        setClickedHistory(false);
    }

    // Calculator logic:
    function passExpression(value) {

        setExp(prevExp => {

            if (value === 'AC') {
                setResult('');
                return '';
            }

            return validateInput(prevExp,value);
        });
    }

    useEffect(() => {

        setResult(evaluateInput(exp,result));
    }, [exp]);

    useEffect(() => {
        if(result) setHistory(`${exp.replace('=', ' =').replace('%','% = ')} ${result}`);
    },[result]);

    return (
        <section className={styles.container}>
            <RenderHistory className={clickedHistory} history={history} clickedClose={hideHistory} />
            <RenderOutput result={result} expression={exp} />
            <ButtonContainer clickedButton={passExpression} clickedHistory={renderHistory} />
        </section>
    )
}