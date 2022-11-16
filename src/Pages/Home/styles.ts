import styled from 'styled-components';
import backgroundImage from '../../assetsBackground.png';

export const HomeContainer = styled.main`
    background-image: ${() => `url(${backgroundImage})`};
    width: 100%;
    height: 34rem;
`;