import styled from 'styled-components';

export const BookingForm = styled.form`
  background-color: #F9F9F9;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    height: 100px;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #FFA500;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #000000;
  }
`;

export const BackButton = styled.button`
  display: block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
