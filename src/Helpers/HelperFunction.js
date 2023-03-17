export function evaluateInput(value,result) {
    try {
        if (/=$/g.test(value)) {
            return +eval(value.slice(0, -1)).toFixed(2);
        }

        if(/%$/g.test(value)) {
            const [q,...arr] = value.match(/^[\d\.]*/);
            const [r,...arr2] = value.slice(0,-1).match(/\d*$/);
            const [operator,...arr3] = value.slice(0,-1).match(/[^\d\.]/)
            let res = eval((r/100) * q);
            if(/[+-]/.test(operator)) res = +eval(`${q} ${operator} ${res}`).toFixed(2);
            return res;
        }

        return result;
    } catch(err) {
            return('Invalid input 🤨')
    }
}

export function validateInput(prevExp,value) {
     // When click AC all field is cleared

    if (/\u2190/.test(value)) return prevExp.slice(0, -1);  //For backspace <--
    else if(/%/.test(prevExp) && value !== '=') return value;
    else if (/=$/.test(prevExp) && /\d/.test(value)) return prevExp;                                 // If last character of prvious exp is '=' and value is digit then return previous exp as it is
    else if (/\D$/.test(prevExp) && value === '.') return prevExp;                                 // If last character of prvious exp is not a number and value is '.' then return previous exp as it is
    else if (/=$/.test(prevExp) && /[^\d%]/.test(value)) return prevExp.replace(/=/, '').concat(value);  // If last character of prvious exp is '=' and value is operator then replace it with empty space 
    else if (/\D$/.test(prevExp) && /[^\d%=]/.test(value)) return prevExp.replace(/.$/,value);           // If last character of previous exp is operator and value is also operator, replace last character of previous exp with value
    else if (/\d*\.\d*$/g.test(prevExp) && value === '.') return prevExp;                           // If prevExp is for eg. 12.221 and value is '.', then return prevExp as it was.
    else if (/\.$/.test(prevExp) && value === '=') return prevExp;
    // Check if operator is '%'
    else if(value === '%' && /[\d\.]*[^\d\.][\d\.]*\d$/g.test(prevExp)) return prevExp.concat(value);
    else if(value === '%' && /[\d\.]*/.test(prevExp)) return prevExp;
    else return prevExp.concat(value);
}