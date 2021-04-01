import React from 'react';
import styles from './Searchbar.module.scss';
import SearchIcon from '../../img/desktop/icon-search.svg';
import FilterIcon from '../../img/desktop/icon-location.svg';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
    background-color: ${props => props.theme.cardBg}
`

const StyledLabel = styled.label`
    color: ${props => props.theme.fullTimeLabel}
`

const StyledDiv = styled.div`
    border-right: 1px solid ${props => props.theme.borderRight}
`

const Searchbar = () => {
    return (
        <StyledSearchBar className={styles.search}>
            <StyledDiv className={styles.search__filterOne}>
                <img src={SearchIcon} alt="magnifying-glass-icon" />
                <label htmlFor="searchByJob"></label>
                <input 
                    type="text" 
                    id="searchByJob" 
                    placeholder="Filter by title, companies, expertise..."
                />
            </StyledDiv>    
            <StyledDiv className={styles.search__filterTwo}>
                <img src={FilterIcon} alt="location-pin-icon"/>
                <label htmlFor="searchByLocation"></label>
                <input 
                    type="text" 
                    id="searchByLocation"
                    placeholder="Filter by location..."
                />
            </StyledDiv>    
            <div className={styles.search__filterThree}>
                <div>
                    <input 
                        type="checkbox" 
                        id="filterFullTimeRoles"
                    />
                    <StyledLabel htmlFor="filterFullTimeRoles">Full Time Only</StyledLabel>
                </div>
                <button type="submit" className={styles.primaryBtn}>Search</button>
            </div>    
        </StyledSearchBar>
    )
}

export default Searchbar;
