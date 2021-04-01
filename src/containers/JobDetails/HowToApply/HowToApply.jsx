import React from 'react';
import styles from './HowToApply.module.scss';

const HowToApply = ({ data }) => {
    return (
        <aside className={styles.howToApply}>
            <h3>How To Apply</h3>
            <div dangerouslySetInnerHTML={{__html: data.how_to_apply}}></div>    
        </aside>
    )
}

export default HowToApply;
