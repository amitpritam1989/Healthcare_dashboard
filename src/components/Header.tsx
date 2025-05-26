import React from 'react';
import styled from 'styled-components';
import { Search, Notifications, Add } from '@mui/icons-material';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f6fa;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  width: 300px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  margin-left: 0.5rem;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
  color: #2d3436;

  &::placeholder {
    color: #a4b0be;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2d3436;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f6fa;
  }
`;

const AddButton = styled(IconButton)`
  background-color: #0984e3;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #0873c4;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dfe6e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #2d3436;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <Search style={{ color: '#a4b0be' }} />
        <SearchInput placeholder="Search..." />
      </SearchContainer>
      <RightSection>
        <IconButton>
          <Notifications />
        </IconButton>
        <AddButton>
          <Add />
          <span>New</span>
        </AddButton>
        <UserProfile>
          <UserAvatar>JD</UserAvatar>
        </UserProfile>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header; 