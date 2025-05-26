import styled from 'styled-components'
import BarChartIcon from '@mui/icons-material/BarChart'

const SectionContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 1.25rem;
  color: #2c3e50;
  margin: 0 0 1.5rem 0;
`

const ActivitySummary = styled.p`
  font-size: 0.875rem;
  color: #7f8c8d;
  margin: 0 0 1.5rem 0;
`

const ChartContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem 0;
`

const Bar = styled.div<{ height: number }>`
  flex: 1;
  background-color: #3498db;
  border-radius: 4px 4px 0 0;
  height: ${props => props.height}%;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #2980b9;
    border-radius: 4px 4px 0 0;
  }
`

const BarLabel = styled.div`
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: #7f8c8d;
  white-space: nowrap;
`

const activityData = [
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 80 },
  { day: 'Wed', value: 40 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 50 },
  { day: 'Sun', value: 30 }
]

const ActivityFeed = () => {
  return (
    <SectionContainer>
      <Title>Activity</Title>
      <ActivitySummary>3 appointments on this week</ActivitySummary>
      <ChartContainer>
        {activityData.map(item => (
          <Bar key={item.day} height={item.value}>
            <BarLabel>{item.day}</BarLabel>
          </Bar>
        ))}
      </ChartContainer>
    </SectionContainer>
  )
}

export default ActivityFeed 