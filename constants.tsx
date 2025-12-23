
import React from 'react';
import { Department, NewsItem } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: '1',
    name: 'Computer Science',
    description: 'Pioneering the future of technology through artificial intelligence, cybersecurity, and software engineering.',
    icon: '💻',
    courses: ['B.Sc in Computer Science', 'M.Sc in AI', 'PhD in Data Science']
  },
  {
    id: '2',
    name: 'Business & Economics',
    description: 'Empowering future leaders with global perspectives on finance, entrepreneurship, and management.',
    icon: '📊',
    courses: ['MBA', 'B.BA in Marketing', 'B.Sc in Financial Technology']
  },
  {
    id: '3',
    name: 'Engineering',
    description: 'Solving complex global challenges through innovation in civil, mechanical, and electrical engineering.',
    icon: '⚙️',
    courses: ['B.Tech in Civil', 'B.Tech in Mechanical', 'Robotics Specialization']
  },
  {
    id: '4',
    name: 'Arts & Humanities',
    description: 'Exploring human expression, history, and social dynamics through creative and critical lenses.',
    icon: '🎨',
    courses: ['BA in Psychology', 'Fine Arts', 'Modern History']
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Horizon State Wins National Research Grant',
    date: 'Oct 24, 2023',
    category: 'Achievement',
    image: 'https://picsum.photos/seed/grant/800/400',
    summary: 'Our Engineering department has been awarded $5M for sustainable energy research.'
  },
  {
    id: 'n2',
    title: 'Global Alumni Meet 2024 Announced',
    date: 'Nov 10, 2023',
    category: 'Events',
    image: 'https://picsum.photos/seed/alumni/800/400',
    summary: 'Join over 5,000 alumni worldwide for our biggest networking event of the year.'
  },
  {
    id: 'n3',
    title: 'New Student Wellness Center Opens',
    date: 'Dec 01, 2023',
    category: 'Campus Life',
    image: 'https://picsum.photos/seed/gym/800/400',
    summary: 'State-of-the-art facilities for physical and mental health are now available to all students.'
  }
];
