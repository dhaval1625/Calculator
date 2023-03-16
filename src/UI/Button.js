import './Button.css'

export default function Button(props) {

    return <button value={props.value} onClick={props.onClick} type='button' className={props.className}>{props.children}</button>
}