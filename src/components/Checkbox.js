import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import styles from './Checkbox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Checkbox ({ checked, children, ...rest }) {
    return (
        <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div class={styles.icon}>{checked ? <MdCheckBox className={styles.checked}/> : <MdCheckBoxOutlineBlank/>}</div>
            </label>
            <span>
                {children}
            </span>
        </div>
    );
};

export default Checkbox;