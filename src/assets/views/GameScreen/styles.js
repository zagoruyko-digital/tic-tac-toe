import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #D54B1A;
`;

export const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #F0ECC9;

    @media (max-width: 575.98px) {
        font-size: 2rem;
    }
`;

export const Button = styled.button`
    margin: 5px 0;
    padding: 0 16px;
    min-width: 200px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .9rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    color: #F0ECC9;

    border: 1px solid;
    border-radius: 3px;
    background-color: transparent;

    transition: all .2s linear;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;

export const Grid = styled.div`
    margin-bottom: 40px;
    width: 300px;
    height: 300px;

    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(3, 33%);

    perspective: 5000;
`;

export const Grid__Item = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: 700;
    color: #058789;

    border-radius: 3px;
    background-color: #F0ECC9;

    cursor: pointer;

    transition: all .1s linear;

    &:hover {
        transform: translateZ(100px);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;