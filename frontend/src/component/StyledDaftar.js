// StyledDaftar.js
import styled from 'styled-components';

export const DaftarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
  padding: 40px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;

export const GoogleDaftarButton = styled.button`
background-color: #EEEEEE;
color: black;
padding: 10px 20px;
margin-bottom: 20px;
border: none;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 100%;

&:hover {
  background-color: rgb(179, 175, 175);
}
`;

export const Divider = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ddd;
  line-height: 0.1em;
  margin: 20px 0;

  &:before {
    content: '';
    display: inline-block;
    width: 100px;
    height: 1px;
    background: #ddd;
    vertical-align: middle;
    margin: 0 10px;
  }

  &:after {
    content: '';
    display: inline-block;
    width: 100px;
    height: 1px;
    background: #ddd;
    vertical-align: middle;
    margin: 0 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px 
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #000;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0D99FF;
  }
`;

export const Link = styled.a`
  color: #4285F4;
  text-decoration: none;
  font-size: 14px;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const PolicyText = styled.p`
  font-size: 12px;
  color: #aaa;
  text-align: center;
  margin-top: 20px;

  a {
    color: #4285F4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
