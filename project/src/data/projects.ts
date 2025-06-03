import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'To-Do-List',
    description: 'A simple tool that helps users organize and manage tasks that needs to be completed',
    longDescription:'Created a basic to-do list application using React for the frontend, featuring core functionalities such as adding and deleting tasks. Designed a clean and responsive user interface to manage daily tasks efficiently with real-time updates to the task list.',
    tags: ['React','Tailwind CSS','Typescript'],
    image: '/todo.jpg',
    demoUrl: 'https://todolist-cx1u.onrender.com',
    githubUrl: 'https://github.com/kalyani-Lottipally/To-Do-List',
    featured: true,
  },
   {
    id: '2',
    title: 'Step-Sync',
    description: 'A simple app that counts and displays user steps using device sensors',
    longDescription: 'Created a basic step counter application that uses device sensors to track the number of steps taken by the user. Displayed the step count in real-time through a clean and minimal interface.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    image: '/step.jpg',
    demoUrl: 'https://step-sync-gvhw.onrender.com',
    githubUrl: 'https://github.com/kalyani-Lottipally/Step-Sync',
    featured: true,
  },
];
