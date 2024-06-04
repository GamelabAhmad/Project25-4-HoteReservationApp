import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopUpContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 425px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Column = styled.div`
  flex: 1;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const PopUpAvailability = ({ onClose }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('Standard');

  const handleCheckAvailability = () => {
    // Handle check availability logic here
    console.log({adults, children, roomType });
  };

  return (
    <Overlay onClick={onClose}>
      <PopUpContainer onClick={(e) => e.stopPropagation()}>
        <Title>Check Availability</Title>
        <Row>
          <Column>
            <Label>Check-in Date</Label>
            <Input type="date" />
          </Column>
          <Column>
            <Label>Check-out Date</Label>
            <Input type="date" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Adults</Label>
            <Select value={adults} onChange={(e) => setAdults(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </Select>
          </Column>
          <Column>
            <Label>Children</Label>
            <Select value={children} onChange={(e) => setChildren(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Select>
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Room Type</Label>
            <Select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </Select>
          </Column>
        </Row>
        <Button onClick={handleCheckAvailability}>Check Availability</Button>
      </PopUpContainer>
    </Overlay>
  );
};

export default PopUpAvailability;
