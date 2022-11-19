import styled from 'styled-components';
import img from '../../assets/Background.png';

export const HomeContainer = styled.main`
    width: 100%;
`;

export const MainSession = styled.div`
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const MainContent = styled.div`
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

export const CoffeeSession = styled.main`
    max-width: 1144px;
    padding: 0px 0.75rem;
    margin: 0 auto;

    h1 {
        margin: 3.375rem 0;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        color: ${props => props.theme['gray-800']};
    }
`;

export const CoffeeContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    gap: 2rem;
`

export const CoffeeCard = styled.div`
    width: 16rem;
    height: 19.375rem;
    background: ${props => props.theme['gray-200']};
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    padding: 0rem 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;

    img {
        position: relative;
        top: -0.8rem;
    }

    .contentTags {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 0.25rem;
    }

    .tags {
        background: ${props => props.theme['yellow-300']};
        color: ${props => props.theme['yellow-800']};
        font-size: 0.625rem;
        font-weight: 700;
        padding: 0.25rem 0.5rem;
        border-radius: 2rem;
    }

    h2 {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.25rem;
        padding: 1rem 0rem;
        color: ${props => props.theme['gray-800']};
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme['gray-400']};
        text-align: center;
    }
`

export const CoffeeBuy = styled.div`
    width: 100%;
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;

    p {
        font-size: 1.5rem;
        font-family: 'Baloo 2';
        font-weight: 800;
        color: ${props => props.theme['gray-500']};

        span {
            font-size: 0.8rem;
            font-weight: normal;
            font-family: 'Roboto';
            padding: 0 0.063rem 0 0;
        }
    }

    div {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;

        .contentAmount {
            width: 4.5rem;
            height: 2.375rem;
            background:  ${props => props.theme['gray-300']};
            border-radius: 0.375rem;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                width: 0.8rem;
                height: 1.313rem;
                padding: 0 0.1rem;
                background: transparent;
                border: 0;
            }

            input[type=number]::-webkit-inner-spin-button { 
                -webkit-appearance: none;
            }  
            
            button {
                background: transparent;
                border: 0; 
            }
        }

        button {
            width: 2.375rem;
            height: 2.375rem;
            background-color: ${props => props.theme['purple-800']};
            color: ${props => props.theme.white};
            border-radius: 0.375rem;
            border: 0; 
            padding: 0.5px;

            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`

