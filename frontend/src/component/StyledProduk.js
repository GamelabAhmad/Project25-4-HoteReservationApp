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
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
`;

export const Message = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  vertical-align: middle;
`;

export const ProductImage = styled.img`
  max-width: 100px;
  height: auto;
`;

export const ActionButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${(props) => (props.delete ? '#dc3545' : '#ffc107')};
  color: white;
  border: none;

  &:hover {
    background-color: ${(props) => (props.delete ? '#c82333' : '#e0a800')};
  }
`;
