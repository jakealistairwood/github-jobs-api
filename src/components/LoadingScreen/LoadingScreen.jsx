import React, { useState } from 'react';
import styles from './LoadingScreen.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/react';

const loaderCSS = css`
    display: block;
    margin: 0 auto;
    border-color: #4F54D4;
    color: #4F54D4;
`

const LoadingScreen = () => {
    const [ color, setColor ] = useState('#4F54D4')

    return (
        <div className={styles.loading}>
            <h3>Loading API data</h3>
            <p>Please wait while we load the data, this should only take a few seconds!</p>
            <PuffLoader color={color} css={loaderCSS} />
        </div>
    )
}

export default LoadingScreen;
