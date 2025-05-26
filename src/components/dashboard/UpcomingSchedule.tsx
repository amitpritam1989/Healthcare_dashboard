import styled from 'styled-components'
import EventIcon from '@mui/icons-material/Event'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteIcon from '@mui/icons-material/Favorite'

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

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const DaySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const DayTitle = styled.h3`
  font-size: 1rem;
  color: #7f8c8d;
  margin: 0;
`

const AppointmentCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const AppointmentIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const AppointmentInfo = styled.div`
  flex: 1;
`

const AppointmentTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
  color: #2c3e50;
`

const AppointmentTime = styled.p`
  font-size: 0.875rem;
  color: #7f8c8d;
  margin: 0;
`

const appointments = [
  {
    day: 'Thursday',
    items: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '09:00 AM',
        icon: <EventIcon />,
        color: '#3498db'
      },
      {
        id: 2,
        title: 'Ophthalmologist',
        time: '11:00 AM',
        icon: <VisibilityIcon />,
        color: '#2ecc71'
      }
    ]
  },
  {
    day: 'Saturday',
    items: [
      {
        id: 3,
        title: 'Cardiologist',
        time: '10:00 AM',
        icon: <FavoriteIcon />,
        color: '#e74c3c'
      },
      {
        id: 4,
        title: 'Neurologist',
        time: '02:00 PM',
        icon: <LocalHospitalIcon />,
        color: '#9b59b6'
      }
    ]
  }
]

const UpcomingSchedule = () => {
  return (
    <SectionContainer>
      <Title>The Upcoming Schedule</Title>
      <ScheduleContainer>
        {appointments.map(daySchedule => (
          <DaySection key={daySchedule.day}>
            <DayTitle>On {daySchedule.day}</DayTitle>
            {daySchedule.items.map(appointment => (
              <AppointmentCard key={appointment.id}>
                <AppointmentIcon color={appointment.color}>
                  {appointment.icon}
                </AppointmentIcon>
                <AppointmentInfo>
                  <AppointmentTitle>{appointment.title}</AppointmentTitle>
                  <AppointmentTime>{appointment.time}</AppointmentTime>
                </AppointmentInfo>
              </AppointmentCard>
            ))}
          </DaySection>
        ))}
      </ScheduleContainer>
    </SectionContainer>
  )
}

export default UpcomingSchedule 