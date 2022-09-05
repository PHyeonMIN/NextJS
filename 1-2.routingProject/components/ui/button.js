import Link from "next/link";

import classes from './button.module.css';

const Button = (props) => {

    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={classes.btn}>{props.children}</a>
            </Link>
        );
    }

    return (
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;

// <Link>에 css를 적용해주기 위해서는 <a>에 적용할 것
// link 컴포넌트가 내부에 있는 앵커 태그를 감지하고
// 자체적으로 앵커태그를 렌더링하는 대신 추가된 앵커 태그를 렌더링