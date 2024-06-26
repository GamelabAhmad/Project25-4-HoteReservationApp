import styled from 'styled-components';

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  position: ${(props) => (props.isSticky ? 'fixed' : 'relative')};
  top: 0;
  width: 100%;
  box-shadow: ${(props) => (props.isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const LogoStyle = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

export const UlStyle = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    background-color: #333;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const LiStyle = styled.li`
  padding: 10px 15px;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin: 10px 0;
  }
`;

export const AStyle = styled.a`
  color: black;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: #0D99FF;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: auto;
    order: ${(props) => (props.isBig ? '-1' : '2')}; /* Menentukan posisi pada tampilan besar */
  }
`;

export const LoginRegisterStyle = styled.div`
  display: flex;
  font-size: 20px;

  a {
    margin-left: 10px;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-left: 10px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    order: ${(props) => (props.isBig ? '1' : '-1')};
    margin-right: ${(props) => (props.isBig ? '0' : '10px')};
    a,
    button {
      color: white;
    }
  }
`;

export const ToggleMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: #333;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 200px;
  padding: 10px 0;
  margin: 0;
  list-style: none;

  &:hover {
    color: #0D99FF;
  }

  ${LiStyle} {
    padding: 10px 20px;
    width: 100%;

    &:hover {
      background-color: silver;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    width: 150px; /* Misalnya, atur lebar submenu untuk tampilan mobile */
  }
`;