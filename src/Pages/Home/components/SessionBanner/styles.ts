import styled from 'styled-components';
import img from '../../../../assets/Background.png';

export const BannerSession = styled.div`
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const BannerContent = styled.div`
    max-width: 1144px;
    height: 34rem;
    padding: 0px 0.75rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .contentText {
       h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        color: ${props => props.theme['grey-900']};
        line-height: 4rem;
        margin-bottom: 1rem;
       }

       p {
        font-size: 1.25rem;
        color: ${props => props.theme['grey-900']}; 
        margin-bottom: 4.125rem;
       }
    }

    .contentImage {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        img {
            max-width: 100%;
        }
    }
`;