import ButtonContainer from './ButtonContainer';
import styles from './Container.module.css';
import RenderOutput from './RenderOutput';
import RenderHistory from './RenderHistory';
import { useState, useEffect } from 'react';

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

            // When click AC all field is cleared
            if (value === 'AC') {
                setResult('');
                return '';
            }

            if (/\u2190/.test(value)) return prevExp.slice(0, -1);  //For backspace <--
            else if(prevExp === '' && value === '0') return prevExp;
            else if (/=$/.test(prevExp) && /\d/.test(value)) return prevExp;                                 // If last character of prvious exp is '=' and value is digit then return previous exp as it is
            else if (/\D$/.test(prevExp) && value === '.') return prevExp;                                 // If last character of prvious exp is not a number and value is '.' then return previous exp as it is
            else if (/=$/.test(prevExp) && /[^\d\%]/.test(value)) return prevExp.replace(/=/, '').concat(value);  // If last character of prvious exp is '=' and value is operator then replace it with empty space 
            else if (/\D$/.test(prevExp) && /[^\d\%]/.test(value)) return prevExp.replace(/.$/,value);           // If last character of previous exp is operator and value is also operator, replace last character of previous exp with value
            else if (/\d*\.\d*$/g.test(prevExp) && value === '.') return prevExp;                           // If prevExp is for eg. 12.221 and value is '.', then return prevExp as it was.
            else if (/\.$/.test(prevExp) && value === '=') return prevExp;
            // Check if operator is '%'
            else if(value === '%' && /[\d\.]*[^\d\.][\d\.]*\d$/g.test(prevExp)) return prevExp.concat(value);
            else if(value === '%' && /[\d\.]*/.test(prevExp)) return prevExp;
            else return prevExp.concat(value);
        });
    }

    useEffect(() => {
        if (/=$/g.test(exp)) {
            setResult(prev => +eval(exp.slice(0, -1)).toFixed(2));
        }

        if(/%$/g.test(exp)) {
            const [q,...arr] = exp.match(/^[\d\.]*/);
            const [r,...arr2] = exp.slice(0,-1).match(/\d*$/);
            const [operator,...arr3] = exp.slice(0,-1).match(/[^\d\.]/)
            let res = eval((r/100) * q);
            if(/[+-]/.test(operator)) res = +eval(`${q} ${operator} ${res}`).toFixed(2);
            setResult(prev => res);
        }

    }, [exp]);

    useEffect(() => {
        if(result) setHistory(`${exp.replace('=', ' =').replace('%','% = ')} ${result}`);
        if(/%$/g.test(exp)) setExp('');
    },[result]);

    return (
        <section className={styles.container}>
            <RenderHistory className={clickedHistory} history={history} clickedClose={hideHistory} />
            <RenderOutput result={result} expression={exp} />
            <ButtonContainer clickedButton={passExpression} clickedHistory={renderHistory} />
        </section>
    )
}