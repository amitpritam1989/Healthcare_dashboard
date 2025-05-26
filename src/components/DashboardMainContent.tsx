import React from 'react';
import styled from 'styled-components';
import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import ActivityFeed from './dashboard/ActivityFeed';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';

const Container = styled.main`
  flex: 1;
  padding: 2.5rem 2rem 2rem 2rem;
  background: #f4f8fc;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr 370px;
  gap: 2.5rem;
  width: 100%;
  max-width: 1500px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DashboardTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.5rem;
`;

const DashboardMainContent: React.FC = () => {
  return (
    <Container>
      <Grid>
        <LeftCol>
          <AnatomySection />
          <HealthStatusCards />
          <ActivityFeed />
        </LeftCol>
        <CenterCol>
          <DashboardTitle>Dashboard</DashboardTitle>
          {/* You can add more center content here if needed */}
        </CenterCol>
        <RightCol>
          <CalendarView />
          <UpcomingSchedule />
        </RightCol>
      </Grid>
    </Container>
  );
};

export default DashboardMainContent; 