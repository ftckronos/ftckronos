export type TeamMember = {
  name: string;
  role: string;
};

export const captains: TeamMember[] = [
  { name: 'Sid Srikanth', role: 'Captain' },
  { name: 'Musa Ghaffar', role: 'Captain' },
  { name: 'Navyaa Lalchandani', role: 'Captain' },
];

export const leads: TeamMember[] = [
  { name: 'Kumari Aditi', role: 'Mechanical Lead' },
  { name: 'Prajwal Prashanth', role: 'Programming Lead' },
  { name: 'Saina Singh', role: 'Outreach Lead' },
];

export const subteams = [
  {
    id: 'mechanical',
    name: 'Mechanical',
    overview: [
      'Design and build the robot',
      'Create mechanisms for game tasks',
      'Prototype, test, and iterate on designs',
      'Work with CAD and fabrication',
      'Maintain and repair the robot through the season',
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    overview: [
      'Develop and maintain robot code',
      'Program autonomous routines and driver controls',
      'Integrate sensors and hardware',
      'Test, debug, and document changes',
      'Collaborate with mechanical to improve performance',
    ],
  },
  {
    id: 'outreach',
    name: 'Outreach & Business',
    overview: [
      'Represent FTC Kronos in the community',
      'Introduce younger students to STEM and FIRST',
      'Run workshops, demos, and hands-on activities',
      'Support fundraisers and team events',
      'Connect with schools, sponsors, and other teams',
    ],
  },
];
