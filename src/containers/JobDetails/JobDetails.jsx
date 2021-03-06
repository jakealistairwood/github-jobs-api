import React from 'react';
import styles from './JobDetails.module.scss';
import styled from 'styled-components';
import HowToApply from './HowToApply';

const StyledHeader = styled.header`
    background-color: ${props => props.theme.cardBg}
`

const StyledMain = styled.main`
    background-color: ${props => props.theme.cardBg}
`

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.cardBg}
`

const StyledButton = styled.button`
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};
    border: none;
    width: 147px;
    height: 48px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    border-radius: 6px;

    &:hover {
        background-color: ${props => props.theme.buttonHoverColor};
    }
`

const JobDetails = (props) => {
    console.log(props.location.state.job);

    const data = props.location.state.job;

    return (
        <>
            <div className={styles.jobDetails}>
                <StyledHeader className={styles.jobDetails__header}>
                    <div className={styles.jobDetails__headerImg}>
                        <img src={data.company_logo} alt="company-logo" />
                    </div>
                    <div className={styles.jobDetails__headerBody}>
                        <div>
                            <h3>{data.company}</h3>
                            <p>{data.company_url}</p>
                        </div>
                        <a href={data.company_url}>
                            <StyledButton className={styles.companyBtn}>Company Site</StyledButton>
                        </a>
                    </div>
                </StyledHeader>
                <StyledMain className={styles.jobDetails__content}>
                    <section className={styles.jobDetails__contentHeader}>
                        <div>
                            <p className={styles.jobDetails__jobType}>1w ago . {data.type}</p>
                            <h2>{data.title}</h2>
                            <p className={styles.jobDetails__location}>{data.location}</p>
                        </div>
                        <button className={styles.primaryBtn}>Apply Now</button>
                    </section>
                    <section className={styles.jobDetails__jobDescription}>
                        <div dangerouslySetInnerHTML={{__html: data.description}}></div>
                    </section>
                </StyledMain>
                <HowToApply data={data} />
            </div>
            <StyledFooter className={styles.footer}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__content}>
                        <h3>{data.title}</h3>
                        <p>{data.company}</p>
                    </div>
                    <button className={styles.primaryBtn}>Apply Now</button>
                </div>
            </StyledFooter>
        </>

    )
}

export default JobDetails;
