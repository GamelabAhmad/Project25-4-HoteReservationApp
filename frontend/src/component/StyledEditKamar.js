import styled from 'styled-components';

export const StyledAdmin = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .navbar {
    background-color: #343a40;

    &:hover {
        color: #0D99FF;
    }
  }

  .nav-link {
    color: black;
    
    &:hover {
        color: #0D99FF;
    }
  }

  .navbar-brand {
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    
    &:hover {
        color: #0D99FF;
    }
  }

  .navbar-nav .nav-link {
    color: #ffffff;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      color: #0D99FF;
    }
  }

  .admin-body {
    display: flex;
    flex: 1;
  }

  .sidebar-wrapper {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f8f9fa;
    border-right: 1px solid #dee2e6;
  }

  .sidebar-heading {
    padding: 10px 15px;
    text-align: center;
    font-weight: bold;
    color: #495057;
    font-size: 1.2rem;
  }

  .container-fluid {
    flex: 1;
    margin-left: 250px;
    padding: 20px;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
`;

export const FileInput = styled.input`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;