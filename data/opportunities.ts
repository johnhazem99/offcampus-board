export interface Opportunity {
  id: number;
  title: string;
  company: string;
  category: 'Internship' | 'Student Club' | 'Part-time';
  location: string;
  isPaid: boolean;
  description: string;
}

export const MOCK_DATA: Opportunity[] = [
  { id: 1, title: "Frontend Engineering Intern", company: "Offcampus", category: "Internship", location: "Remote", isPaid: true, description: "Learn Next.js and build real startup features." },
  { id: 2, title: "Marketing & Growth Assistant", company: "Spark Media", category: "Part-time", location: "Hybrid", isPaid: true, description: "Help manage social campaigns and student outreach." },
  { id: 3, title: "Robotics & AI Club Member", company: "Campus Tech Society", category: "Student Club", location: "On-Campus", isPaid: false, description: "Build autonomous rovers and prepare for the national spring competition." },
  { id: 4, title: "UI/UX Design Intern", company: "Creative Labs", category: "Internship", location: "Remote", isPaid: false, description: "Prototype next-generation mobile wireframes for students." },
  { id: 5, title: "University Consulting Group", company: "Apex Consulting Club", category: "Student Club", location: "On-Campus", isPaid: false, description: "Solve real-world business cases for local non-profits and startups." },
  { id: 6, title: "Campus Brand Ambassador", company: "RedBull", category: "Part-time", location: "On-Campus", isPaid: true, description: "Represent the brand, organize events, and sample products on campus." }
];