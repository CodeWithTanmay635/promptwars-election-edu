const TOPICS = [
  {
    id: 'overview',
    title: 'Election Overview',
    icon: '🏛️',
    description: 'A general overview of how the world\'s largest democratic exercise is conducted.',
    keywords: ['democracy', 'parliament', 'assembly', 'lok sabha', 'vidhan sabha', 'eci']
  },
  {
    id: 'registration',
    title: 'Voter Registration',
    icon: '📝',
    description: 'Learn who is eligible to vote, how to register, and what documents are required.',
    keywords: ['epic', 'voter id', 'form 6', 'nvsp', 'eligibility', 'enrollment']
  },
  {
    id: 'voting_day',
    title: 'Voting Day Procedures',
    icon: '🗳️',
    description: 'Step-by-step guide to what happens inside the polling booth on election day.',
    keywords: ['evm', 'vvpat', 'nota', 'polling booth', 'presiding officer', 'ink']
  },
  {
    id: 'counting',
    title: 'Counting Process',
    icon: '📊',
    description: 'Understand how EVMs are secured and votes are counted transparently.',
    keywords: ['strong room', 'counting center', 'returning officer', 'results', 'majority']
  },
  {
    id: 'mcc',
    title: 'Rules & MCC',
    icon: '📜',
    description: 'The Model Code of Conduct and guidelines that political parties and candidates must follow.',
    keywords: ['mcc', 'guidelines', 'campaigning', 'expenditure limit', 'violation']
  },
  {
    id: 'grievances',
    title: 'RTI & Grievances',
    icon: '⚖️',
    description: 'How citizens can report violations, use the cVIGIL app, and access election information.',
    keywords: ['cvigil', 'complaint', 'rti', 'transparency', 'helpline']
  }
];

const TIMELINE = [
  {
    step: 1,
    title: 'Election Announcement',
    description: 'The Election Commission of India (ECI) holds a press conference to announce the election schedule.',
    duration: '1 day',
    phase: 'Pre-Election'
  },
  {
    step: 2,
    title: 'Model Code of Conduct',
    description: 'The MCC comes into immediate effect to ensure a level playing field, restricting the government from announcing new schemes.',
    duration: 'Until Results',
    phase: 'Pre-Election'
  },
  {
    step: 3,
    title: 'Filing Nominations',
    description: 'Candidates file their nomination papers along with an affidavit detailing their assets, liabilities, and criminal records (if any).',
    duration: '7-8 days',
    phase: 'Pre-Election'
  },
  {
    step: 4,
    title: 'Scrutiny & Withdrawal',
    description: 'The Returning Officer scrutinizes nominations for validity. Candidates then have a few days to withdraw their names if they wish.',
    duration: '2-4 days',
    phase: 'Pre-Election'
  },
  {
    step: 5,
    title: 'Campaigning',
    description: 'Political parties and candidates campaign to persuade voters. Campaigning officially ends 48 hours before the conclusion of polling.',
    duration: 'Min 14 days',
    phase: 'Pre-Election'
  },
  {
    step: 6,
    title: 'Voting Day (Polling)',
    description: 'Voters cast their ballots at designated polling stations using Electronic Voting Machines (EVMs). Elections may happen in multiple phases.',
    duration: '1 day per phase',
    phase: 'Election Day'
  },
  {
    step: 7,
    title: 'Counting of Votes',
    description: 'EVMs are brought from strong rooms, and votes are counted in the presence of candidates or their representatives.',
    duration: '1 day',
    phase: 'Post-Election'
  },
  {
    step: 8,
    title: 'Declaration of Result',
    description: 'The Returning Officer declares the final results, and the winning candidate is issued a certificate of election.',
    duration: 'Immediate',
    phase: 'Post-Election'
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: 'What is the minimum voting age for an Indian citizen?',
    options: ['18 years', '21 years', '25 years', '16 years'],
    correct: 0,
    explanation: 'The 61st Amendment Act of 1988 lowered the voting age for elections to the Lok Sabha and State Legislative Assemblies from 21 years to 18 years.',
    topic: 'registration'
  },
  {
    id: 'q2',
    question: 'What does EVM stand for in Indian elections?',
    options: ['Electronic Voting Machine', 'Election Verification Machine', 'Electoral Voting Mechanism', 'Electronic Verification Module'],
    correct: 0,
    explanation: 'EVM stands for Electronic Voting Machine, which has completely replaced ballot paper boxes in India to make voting faster and more secure.',
    topic: 'voting_day'
  },
  {
    id: 'q3',
    question: 'What is the purpose of the VVPAT machine?',
    options: ['To print a paper slip showing who the voter voted for', 'To verify the voter\'s identity via fingerprint', 'To count the votes automatically', 'To transmit voting data to the ECI server'],
    correct: 0,
    explanation: 'Voter Verifiable Paper Audit Trail (VVPAT) prints a slip visible for 7 seconds, allowing voters to verify that their vote was cast correctly before it falls into a sealed box.',
    topic: 'voting_day'
  },
  {
    id: 'q4',
    question: 'If a voter does not want to vote for any candidate, which button can they press on the EVM?',
    options: ['NOTA', 'REJECT', 'NONE', 'CANCEL'],
    correct: 0,
    explanation: 'NOTA stands for "None of the Above". Introduced in 2013, it allows voters to officially register a vote of rejection for all contesting candidates.',
    topic: 'voting_day'
  },
  {
    id: 'q5',
    question: 'When does the Model Code of Conduct (MCC) come into effect?',
    options: ['The moment the ECI announces the election schedule', 'When nominations begin', 'On the day of polling', 'One month before the polling date'],
    correct: 0,
    explanation: 'The MCC comes into force immediately upon the announcement of the election schedule by the Election Commission to ensure the ruling party does not misuse its position.',
    topic: 'mcc'
  },
  {
    id: 'q6',
    question: 'Under Article 324 of the Constitution, who has the power to conduct elections in India?',
    options: ['Election Commission of India (ECI)', 'Supreme Court of India', 'President of India', 'Parliament of India'],
    correct: 0,
    explanation: 'Article 324 vests the superintendence, direction, and control of all elections to Parliament, State Legislatures, and the offices of President and Vice-President in the ECI.',
    topic: 'overview'
  },
  {
    id: 'q7',
    question: 'What is the maximum number of elected members the Lok Sabha can have?',
    options: ['550', '543', '545', '500'],
    correct: 0,
    explanation: 'The maximum strength is 550. Currently, the Lok Sabha has 543 elected members. The provision for 2 nominated Anglo-Indian members was abolished in 2020.',
    topic: 'overview'
  },
  {
    id: 'q8',
    question: 'What is the security deposit amount a candidate must pay to contest a Lok Sabha election (for General category)?',
    options: ['₹25,000', '₹10,000', '₹50,000', '₹5,000'],
    correct: 0,
    explanation: 'For a Lok Sabha constituency, a general category candidate must make a security deposit of ₹25,000 (₹12,500 for SC/ST candidates). They lose this deposit if they fail to get 1/6th of valid votes.',
    topic: 'mcc'
  },
  {
    id: 'q9',
    question: 'Which app was introduced by the ECI for citizens to report Model Code of Conduct violations?',
    options: ['cVIGIL', 'Voter Helpline App', 'Garuda App', 'Suvidha'],
    correct: 0,
    explanation: 'cVIGIL allows citizens to quickly report violations of the Model Code of Conduct with photo/video evidence and location data for fast action.',
    topic: 'grievances'
  },
  {
    id: 'q10',
    question: 'When does public campaigning stop before the polling begins?',
    options: ['48 hours before the polling concludes', '24 hours before polling begins', 'On the morning of polling day', '72 hours before the polling concludes'],
    correct: 0,
    explanation: 'As per the Representation of the People Act, public campaigning and public meetings must stop 48 hours prior to the hour fixed for the conclusion of the poll in that constituency.',
    topic: 'mcc'
  },
  {
    id: 'q11',
    question: 'How long is the term of the Chief Election Commissioner of India?',
    options: ['6 years or until age 65', '5 years or until age 62', '4 years', 'Until the next general election'],
    correct: 0,
    explanation: 'The Chief Election Commissioner and other Election Commissioners hold office for a term of 6 years or until they attain the age of 65 years, whichever is earlier.',
    topic: 'overview'
  },
  {
    id: 'q12',
    question: 'What is the "Indelible Ink" applied on a voter\'s finger made of?',
    options: ['Silver Nitrate', 'Potassium Permanganate', 'Iron Oxide', 'Lead Sulfate'],
    correct: 0,
    explanation: 'The indelible ink contains Silver Nitrate, which reacts with the skin to leave a stain that cannot be washed off with soap or chemicals for several days.',
    topic: 'voting_day'
  },
  {
    id: 'q13',
    question: 'Which of the following is NOT a requirement to be a voter in India?',
    options: ['Educational qualification', 'Citizen of India', 'At least 18 years old', 'Ordinary resident of a constituency'],
    correct: 0,
    explanation: 'India follows Universal Adult Suffrage. There is no educational or property qualification required to be a voter.',
    topic: 'registration'
  },
  {
    id: 'q14',
    question: 'What is a "Voter Slip" issued by the ECI?',
    options: ['An information guide about the booth and serial number', 'A replacement for a Voter ID card', 'A document to prove citizenship', 'A receipt after casting a vote'],
    correct: 0,
    explanation: 'The Voter Information Slip (VIS) is distributed to voters to help them know their polling station, serial number in the roll, and date/time of poll. It is NOT an identity proof by itself.',
    topic: 'registration'
  },
  {
    id: 'q15',
    question: 'How many phases were there in the 2024 Indian General Elections?',
    options: ['7 phases', '5 phases', '9 phases', 'Single phase'],
    correct: 0,
    explanation: 'The 2024 Lok Sabha elections were conducted in 7 phases across the country to ensure security and administrative efficiency.',
    topic: 'overview'
  }
];

module.exports = {
  TOPICS,
  TIMELINE,
  QUIZ_QUESTIONS
};
