import React from 'react';
import styled from 'styled-components';
import { Favorite, Warning, Event, CheckCircle } from '@mui/icons-material';
import { ActivityItem } from '../data/activityFeed';

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

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
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

const ItemDescription = styled.p`
  font-size: 0.875rem;
  color: #636e72;
  margin: 0 0 0.5rem 0;
`;

const TimeStamp = styled.span`
  font-size: 0.75rem;
  color: #a4b0be;
`;

const StatusBadge = styled.span<{ status: string }>`
  background-color: ${props => 
    props.status === 'completed' ? '#e3f2fd' :
    props.status === 'pending' ? '#fff3e0' :
    '#ffebee'
  };
  color: ${props => 
    props.status === 'completed' ? '#0984e3' :
    props.status === 'pending' ? '#e17055' :
    '#d63031'
  };
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
`;

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <Event />;
      case 'test':
        return <Favorite />;
      case 'prescription':
        return <Warning />;
      case 'message':
        return <CheckCircle />;
      default:
        return <Event />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'appointment':
        return '#0984e3';
      case 'test':
        return '#00b894';
      case 'prescription':
        return '#e17055';
      case 'message':
        return '#6c5ce7';
      default:
        return '#0984e3';
    }
  };

  return (
    <Container>
      <Title>Recent Activity</Title>
      <ActivityList>
        {activities.map((item) => (
          <ActivityItemContainer key={item.id}>
            <IconContainer color={getIconColor(item.type)}>
              {getIcon(item.type)}
            </IconContainer>
            <InfoContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
              <TimeStamp>{item.time}</TimeStamp>
            </InfoContainer>
            <StatusBadge status={item.status}>{item.status}</StatusBadge>
          </ActivityItemContainer>
        ))}
      </ActivityList>
    </Container>
  );
};

export default ActivityFeed; 