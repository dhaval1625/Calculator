import styles from '../components/ButtonContainer.module.css';

export const BUTTONS = [
    {
        value: 'AC',
        className: styles.clear,
        id: 'clear'
    },
    {
        value: '\u2190',
        className: styles.operator,
        id: 'backspace'
    },
    {
        value: '%',
        className: styles.operator,
        id: 'percentage'
    },
    {
        value: '\u00F7',
        className: styles.operator,
        id: 'division'
    },
    {
        value: '1',
        className: styles.digit,
        id: 'one'
    },
    {
        value: '2',
        className: styles.digit,
        id: 'two'
    },
    {
        value: '3',
        className: styles.digit,
        id: 'three'
    },
    {
        value: '\u00D7',
        className: styles.operator,
        id: 'multiply'
    },
    {
        value: '4',
        className: styles.digit,
        id: 'four'
    },
    {
        value: '5',
        className: styles.digit,
        id: 'five'
    },
    {
        value: '6',
        className: styles.digit,
        id: 'six'
    },
    {
        value: '-',
        className: styles.operator,
        id: 'minus'
    },
    {
        value: '7',
        className: styles.digit,
        id: 'seven'
    },
    {
        value: '8',
        className: styles.digit,
        id: 'eight'
    },
    {
        value: '9',
        className: styles.digit,
        id: 'nine'
    },
    {
        value: '+',
        className: styles.plus,
        id: 'plus'
    },
    {
        value: '.',
        className: styles.digit,
        id: 'dot'
    },
    {
        value: '0',
        className: styles.digit,
        id: 'zero'
    },
    {
        value: '=',
        className: styles.equal,
        id: 'equal'
    }
]