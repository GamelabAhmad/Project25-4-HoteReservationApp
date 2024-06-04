import styled from 'styled-components';

export const NavStyle = styled.nav`
    position: sticky;
    top: ${(props) => (props.isSticky ? '0' : '0px')};
    z-index: 2000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 1); /* Efek timbul */
    transition: top 0.3s; /* Smooth transition for the sticky effect */
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoStyle = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px; /* Add space between the logo and the navigation */
    
    img {
        height: 70px;
        width: 70px;
        margin: 0; /* Remove any default margins */
    }
`;

export const UlStyle = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const LiStyle = styled.li`
    margin-left: 20px;
`;

export const AStyle = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    transition: color 0.3s ease;

    &:hover {
        color: #ffcc00;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LoginRegisterStyle = styled.div`
    display: flex;
    align-items: center;

    a {
        margin-left: 20px;
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        transition: color 0.3s ease;

        &:hover {
            color: #ffcc00;
        }
    }
`;
