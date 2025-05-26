export interface ActivityItem {
  id: number;
  type: 'appointment' | 'test' | 'prescription' | 'message';
  title: string;
  description: string;
  time: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export const activityFeed: ActivityItem[] = [
  {
    id: 1,
    type: 'appointment',
    title: 'Annual Physical',
    description: 'Completed annual health checkup',
    time: '2 hours ago',
    status: 'completed'
  },
  {
    id: 2,
    type: 'test',
    title: 'Blood Test Results',
    description: 'New test results available',
    time: '1 day ago',
    status: 'completed'
  },
  {
    id: 3,
    type: 'prescription',
    title: 'New Prescription',
    description: 'Dr. Johnson prescribed new medication',
    time: '2 days ago',
    status: 'pending'
  },
  {
    id: 4,
    type: 'message',
    title: 'Message from Dr. Chen',
    description: 'Follow-up appointment scheduled',
    time: '3 days ago',
    status: 'completed'
  }
]; 