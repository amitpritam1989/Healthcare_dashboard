import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

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

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const Card = styled.div<{ status: 'healthy' | 'warning' | 'checkup' }>`
  background-color: ${props => 
    props.status === 'healthy' ? '#e8f5e9' :
    props.status === 'warning' ? '#ffebee' :
    '#e3f2fd'
  };
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.color};
  }
`

const CardTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #2c3e50;
`

const CardDate = styled.p`
  font-size: 0.875rem;
  color: #7f8c8d;
  margin: 0;
`

const healthCards = [
  {
    id: 1,
    title: 'Lungs',
    date: 'Last check: 2 days ago',
    status: 'warning',
    icon: <WarningIcon />,
    color: '#e74c3c'
  },
  {
    id: 2,
    title: 'Teeth',
    date: 'Last check: 1 week ago',
    status: 'healthy',
    icon: <FavoriteIcon />,
    color: '#2ecc71'
  },
  {
    id: 3,
    title: 'Bone',
    date: 'Last check: 2 weeks ago',
    status: 'checkup',
    icon: <CheckCircleIcon />,
    color: '#3498db'
  }
]

const HealthStatusCards = () => {
  return (
    <SectionContainer>
      <Title>Health Status</Title>
      <CardsContainer>
        {healthCards.map(card => (
          <Card key={card.id} status={card.status}>
            <CardHeader color={card.color}>
              {card.icon}
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardDate>{card.date}</CardDate>
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  )
}

export default HealthStatusCards 