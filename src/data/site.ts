export const site = {
  name: 'FTC Kronos',
  teamNumber: 20791,
  location: 'San Jose, CA',
  foundedYear: 2021,
  season: '2026–2027',
  tagline:
    'Student-led FIRST Tech Challenge team building robots, skills, and community in San Jose.',
  about: [
    'Founded in 2021, FTC Kronos Team #20791 was started by students dedicated to STEM. What began as a small group has grown into a diverse team of more than twenty members, supported by mentors, parents, and sponsors.',
    'We compete in the FIRST Tech Challenge each season—from kickoff in September through qualifying events in winter—while sharing robotics with our community through outreach.',
  ],
  mission: [
    'We practice Gracious Professionalism: competing hard while treating others with respect and helping our community grow in STEM.',
    'Our mission is to design and build competitive robots, develop real engineering skills across mechanical and software work, and inspire younger students through hands-on outreach.',
  ],

  ftc: {
    intro:
      'FIRST Tech Challenge (FTC) is a robotics competition for students in grades 7–12. Teams design, build, and program robots to complete a new game each season.',
    levels: [
      {
        name: 'FLL',
        label: 'FIRST Lego League',
        description: 'Entry-level robotics with LEGO-based kits for younger students.',
      },
      {
        name: 'FTC',
        label: 'FIRST Tech Challenge',
        description:
          'Teams build smaller robots that compete on a 12×12 ft field, emphasizing design, programming, and teamwork.',
      },
      {
        name: 'FRC',
        label: 'FIRST Robotics Competition',
        description: 'Large-scale robots and the flagship high-school FIRST program.',
      },
    ],
    season:
      'The FTC season runs from September through January, with kickoff revealing the year’s game and qualifying tournaments leading into championships.',
    values:
      'FTC emphasizes Gracious Professionalism, teamwork, and community outreach alongside technical achievement.',
  },
  contact: {
    email: 'ftckronos@gmail.com',
    note:
      'Team communication for members and parents is handled through Discord and WhatsApp. For public inquiries, email is best.',
    links: [] as { label: string; href: string }[],
  },
};
