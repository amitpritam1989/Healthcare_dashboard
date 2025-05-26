import styled from 'styled-components'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import EventIcon from '@mui/icons-material/Event'

const SectionContainer = styled.div`
  background-color: #f8faff;
  border-radius: 24px;
  padding: 2rem 2rem 1.5rem 2rem;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.06);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const MonthTitle = styled.h2`
  font-size: 1.35rem;
  color: #2d3748;
  font-weight: 700;
  margin: 0 0.5rem 0 0.5rem;
  letter-spacing: 0.02em;
`;

const NavigationButton = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  color: #7f8c8d;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.06);
  transition: background 0.2s;
  &:hover {
    background-color: #e3f2fd;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.3rem;
  margin-bottom: 2rem;
`;

const WeekdayHeader = styled.div`
  text-align: center;
  font-weight: 600;
  color: #a0aec0;
  padding: 0.4rem 0;
  font-size: 0.95rem;
`;

const DayCell = styled.div<{ isToday?: boolean; hasAppointment?: boolean }>`
  aspect-ratio: 1 / 1;
  min-width: 36px;
  max-width: 44px;
  padding: 0.3rem;
  border-radius: 10px;
  background-color: ${props => props.isToday ? '#e3f2fd' : 'transparent'};
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: ${props => props.isToday ? '2px solid #5e81f4' : 'none'};
  font-weight: ${props => props.isToday ? 700 : 500};
  color: #2d3748;
  &:hover {
    background-color: #f5f6fa;
  }
`;

const DayNumber = styled.span`
  font-size: 1rem;
  color: inherit;
`;

const AppointmentDot = styled.div`
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: #5e81f4;
  border-radius: 50%;
`;

const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AppointmentCard = styled.div`
  background-color: #5e81f4;
  border-radius: 18px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.06);
`;

const AppointmentIcon = styled.div`
  width: 38px;
  height: 38px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5e81f4;
  font-size: 1.5rem;
`;

const AppointmentInfo = styled.div`
  flex: 1;
`;

const AppointmentTitle = styled.h3`
  font-size: 1.05rem;
  margin: 0;
  color: #fff;
  font-weight: 600;
`;

const AppointmentTime = styled.p`
  font-size: 0.95rem;
  color: #e3eafc;
  margin: 0;
`;

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const appointments = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00 - 11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: <EventIcon />,
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00 - 12:00',
    doctor: 'Dr. Kevin Djones',
    icon: <EventIcon />,
  },
];

const CalendarView = () => {
  return (
    <SectionContainer>
      <CalendarHeader>
        <MonthSelector>
          <NavigationButton>
            <ChevronLeftIcon />
          </NavigationButton>
          <MonthTitle>October 2021</MonthTitle>
          <NavigationButton>
            <ChevronRightIcon />
          </NavigationButton>
        </MonthSelector>
      </CalendarHeader>
      <CalendarGrid>
        {weekdays.map(day => (
          <WeekdayHeader key={day}>{day}</WeekdayHeader>
        ))}
        {days.map(day => (
          <DayCell
            key={day}
            isToday={day === 26}
            hasAppointment={[26, 28, 29].includes(day)}
          >
            <DayNumber>{day}</DayNumber>
            {[26, 28, 29].includes(day) && <AppointmentDot />}
          </DayCell>
        ))}
      </CalendarGrid>
      <AppointmentList>
        {appointments.map(appointment => (
          <AppointmentCard key={appointment.id}>
            <AppointmentIcon>{appointment.icon}</AppointmentIcon>
            <AppointmentInfo>
              <AppointmentTitle>{appointment.title}</AppointmentTitle>
              <AppointmentTime>{appointment.time} <br />{appointment.doctor}</AppointmentTime>
            </AppointmentInfo>
          </AppointmentCard>
        ))}
      </AppointmentList>
    </SectionContainer>
  );
};

export default CalendarView; 