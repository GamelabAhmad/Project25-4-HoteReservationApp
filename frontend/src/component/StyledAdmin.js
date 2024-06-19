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