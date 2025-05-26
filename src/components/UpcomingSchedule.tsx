import React from 'react';
import styled from 'styled-components';
import { Event, LocalHospital, Visibility } from '@mui/icons-material';
import { ScheduleItem } from '../data/upcomingSchedule';

const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #2d3436;
  margin: 0 0 1.5rem 0;
`;

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ScheduleItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const IconContainer = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-size: 1rem;
  color: #2d3436;
  margin: 0 0 0.25rem 0;
`;

const ItemDetails = styled.p`
  font-size: 0.875rem;
  color: #636e72;
  margin: 0;
`;

const TimeBadge = styled.span`
  background-color: #e3f2fd;
  color: #0984e3;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
`;

interface UpcomingScheduleProps {
  schedule: ScheduleItem[];
}

const UpcomingSchedule: React.FC<UpcomingScheduleProps> = ({ schedule }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <Event />;
      case 'consultation':
        return <Visibility />;
      case 'checkup':
        return <LocalHospital />;
      default:
        return <Event />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'appointment':
        return '#0984e3';
      case 'consultation':
        return '#00b894';
      case 'checkup':
        return '#e17055';
      default:
        return '#0984e3';
    }
  };

  return (
    <Container>
      <Title>Upcoming Schedule</Title>
      <ScheduleList>
        {schedule.map((item) => (
          <ScheduleItemContainer key={item.id}>
            <IconContainer color={getIconColor(item.type)}>
              {getIcon(item.type)}
            </IconContainer>
            <InfoContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDetails>{item.doctor}</ItemDetails>
            </InfoContainer>
            <TimeBadge>{item.time}</TimeBadge>
          </ScheduleItemContainer>
        ))}
      </ScheduleList>
    </Container>
  );
};

export default UpcomingSchedule; 