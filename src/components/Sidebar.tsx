import React from 'react';
import styled from 'styled-components';
import {
  Dashboard,
  History,
  CalendarMonth,
  EventNote,
  BarChart,
  Science,
  Chat,
  Support,
  Settings
} from '@mui/icons-material';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: white;
  padding: 2rem 1rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #0984e3;
  margin: 0;
  padding: 0 1rem;
`;

const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  color: ${props => props.active ? '#0984e3' : '#2d3436'};
  text-decoration: none;
  border-radius: 8px;
  background-color: ${props => props.active ? '#e3f2fd' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#e3f2fd' : '#f5f6fa'};
  }
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>Healthcare.</Logo>
      <NavSection>
        <NavItem active>
          <NavIcon><Dashboard /></NavIcon>
          Dashboard
        </NavItem>
        <NavItem>
          <NavIcon><History /></NavIcon>
          History
        </NavItem>
        <NavItem>
          <NavIcon><CalendarMonth /></NavIcon>
          Calendar
        </NavItem>
        <NavItem>
          <NavIcon><EventNote /></NavIcon>
          Appointments
        </NavItem>
        <NavItem>
          <NavIcon><BarChart /></NavIcon>
          Reports
        </NavItem>
        <NavItem>
          <NavIcon><Science /></NavIcon>
          Lab Results
        </NavItem>
        <NavItem>
          <NavIcon><Chat /></NavIcon>
          Messages
        </NavItem>
        <NavItem>
          <NavIcon><Support /></NavIcon>
          Support
        </NavItem>
        <NavItem>
          <NavIcon><Settings /></NavIcon>
          Settings
        </NavItem>
      </NavSection>
    </SidebarContainer>
  );
};

export default Sidebar; 