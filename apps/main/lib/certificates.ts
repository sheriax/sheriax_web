export interface Certificate {
  id: string;
  name: string;
  program: string;
  year: string;
  issueDate: string;
  url: string;
}

const certificates: Record<string, Certificate> = {
  'SHX-RD-2026-0015': {
    id: 'SHX-RD-2026-0015',
    name: 'Ayah Mohsen Mohammed Hefny Saad',
    program: 'Software Engineering Research & Technical Documentation',
    year: '2026',
    issueDate: 'January 20, 2026',
    url: 'https://d9ie8wa5vc.ufs.sh/f/bHj7CdyYDyPGD5md0uVcY6CaJPM7dbr1g4Z9kWsEmQBlhOUq',
  },
  'SHX-SE-2025-0047': {
    id: 'SHX-SE-2025-0047',
    name: 'Ayah Mohsen Mohammed Hefny Saad',
    program: 'Applied Software Engineering & System Design',
    year: '2025',
    issueDate: 'August 30, 2025',
    url: 'https://d9ie8wa5vc.ufs.sh/f/bHj7CdyYDyPGIi8LggzA4USjiFJl0VfCMa9dQ7gIWZrRGq5p',
  },
  'SHX-MAD-2025-0032': {
    id: 'SHX-MAD-2025-0032',
    name: 'Ayah Mohsen Mohammed Hefny Saad',
    program: 'Mobile Application Development & Deployment',
    year: '2025',
    issueDate: 'April 30, 2025',
    url: 'https://d9ie8wa5vc.ufs.sh/f/bHj7CdyYDyPGbqYJ7YyYDyPGRnN2kQSE0zojfL5KZ6eXW91I',
  },
};

export function getCertificate(id: string): Certificate | undefined {
  return certificates[id.toUpperCase()] ?? certificates[id];
}
