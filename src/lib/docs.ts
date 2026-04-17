export interface Document {
  id: string;
  title: string;
  contributor: string;
  institution: string;
  subject: string;
  type: "Notes" | "Assignment" | "Questions" | "Guide";
  isPremium: boolean;
  points: number;
  date: string;
}

export const mockDocs: Document[] = [
  {
    id: "1",
    title: "Data Structures & Algorithms - Complete Notes",
    contributor: "Rahat Khan",
    institution: "BUET",
    subject: "Computer Science",
    type: "Notes",
    isPremium: true,
    points: 20,
    date: "2024-03-15",
  },
  {
    id: "2",
    title: "Physics II - Mid Term Questions (2023)",
    contributor: "Samiul Islam",
    institution: "DU",
    subject: "Physics",
    type: "Questions",
    isPremium: false,
    points: 0,
    date: "2024-04-01",
  },
  {
    id: "3",
    title: "Principles of Marketing - Case Study",
    contributor: "Afsana Mimi",
    institution: "NSU",
    subject: "Business",
    type: "Assignment",
    isPremium: true,
    points: 20,
    date: "2024-02-10",
  },
  {
    id: "4",
    title: "Organic Chemistry - Lab Reports",
    contributor: "Farhan Ahmed",
    institution: "JU",
    subject: "Chemistry",
    type: "Guide",
    isPremium: false,
    points: 0,
    date: "2024-03-20",
  },
  {
    id: "5",
    title: "Differential Equations - Handwritten Notes",
    contributor: "Tanvir Hossain",
    institution: "CUET",
    subject: "Mathematics",
    type: "Notes",
    isPremium: false,
    points: 0,
    date: "2024-04-10",
  },
  {
    id: "6",
    title: "Microeconomics - Final Review Guide",
    contributor: "Sumaiya Akter",
    institution: "RU",
    subject: "Economics",
    type: "Guide",
    isPremium: true,
    points: 20,
    date: "2024-01-25",
  },
  {
    id: "7",
    title: "Medical Admission - Biology Short Tricks",
    contributor: "Dr. Arif",
    institution: "DMC",
    subject: "Biology",
    type: "Guide",
    isPremium: true,
    points: 20,
    date: "2024-04-12",
  },
  {
    id: "8",
    title: "HSC 2024 - English 2nd Paper Suggestion",
    contributor: "Tanvir Sir",
    institution: "Ideal College",
    subject: "English",
    type: "Guide",
    isPremium: false,
    points: 0,
    date: "2024-04-15",
  },
  {
    id: "9",
    title: "Civil Engineering - Surveying Lab Report",
    contributor: "Mustafa Kamal",
    institution: "KUET",
    subject: "Engineering",
    type: "Assignment",
    isPremium: true,
    points: 20,
    date: "2024-03-05",
  },
  {
    id: "10",
    title: "Constitutional Law of Bangladesh - Lecture Notes",
    contributor: "Adv. Shamim",
    institution: "DU",
    subject: "Law",
    type: "Notes",
    isPremium: false,
    points: 0,
    date: "2024-02-28",
  },
];

export const searchDocs = (query: string) => {
  if (!query) return [];
  const lowQuery = query.toLowerCase();
  return mockDocs.filter(
    (doc) =>
      doc.title.toLowerCase().includes(lowQuery) ||
      doc.institution.toLowerCase().includes(lowQuery) ||
      doc.contributor.toLowerCase().includes(lowQuery) ||
      doc.subject.toLowerCase().includes(lowQuery)
  );
};
