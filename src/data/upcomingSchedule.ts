export interface ScheduleItem {
  id: number;
  title: string;
  time: string;
  type: 'appointment' | 'consultation' | 'checkup';
  doctor: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export const upcomingSchedule: ScheduleItem[] = [
  {
    id: 1,
    title: 'Annual Checkup',
    time: '10:00 AM',
    type: 'checkup',
    doctor: 'Dr. Sarah Johnson',
    status: 'scheduled'
  },
  {
    id: 2,
    title: 'Follow-up Consultation',
    time: '2:30 PM',
    type: 'consultation',
    doctor: 'Dr. Michael Chen',
    status: 'scheduled'
  },
  {
    id: 3,
    title: 'Dental Cleaning',
    time: '11:15 AM',
    type: 'appointment',
    doctor: 'Dr. Emily Brown',
    status: 'scheduled'
  }
]; 