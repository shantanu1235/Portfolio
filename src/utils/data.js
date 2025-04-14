import backend from '../assets/images/backend-icon.png';
import frontend from '../assets/images/frontend-icon.png';
import tools from '../assets/images/tools-icon.png';
import softskills from '../assets/images/soft-skills.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontend, // Remove curly braces
        skills: [
            { skills: 'HTML5', percentage: '70%' },
            { skills: 'CSS3', percentage: '80%' },
            { skills: 'JavaScript', percentage: '60%' },
            { skills: 'Reactjs', percentage: '90%' },
        ]
    },
    {
        title: "Backend",
        icon: backend, // Remove curly braces
        skills: [
            { skills: 'Nodejs', percentage: '70%' },
            { skills: 'Expressjs', percentage: '90%' },
            { skills: 'MongoDB', percentage: '80%' },
        ]
    },
    {
        title: "Tools",
        icon: tools, // Remove curly braces
        skills: [
            { skills: 'Git&GitHub', percentage: '80%' },
            { skills: 'webpack', percentage: '70%' },
            { skills: 'Visual Studio Code', percentage: '90%' },
            { skills: 'Responsive Design', percentage: '60%' },
        ]
    },
    {
        title: 'SoftSkills',
        icon: softskills, // Remove curly braces
        skills: [
            { skills: 'Problem Solving', percentage: '80%' },
            { skills: 'Team Work', percentage: '90%' },
            { skills: 'Creativity', percentage: '100%' },
        ]
    }
];

export const PROJECTS=[
    {
        title:'Portfolio Website',
        date:"january 2023",
        description:'A personal portfolio website to showcase my projects and skills.',
        responsiblities:[
            'Designed and developed the website using React.js and CSS.',
            'Implemented responsive design for mobile and desktop views.',
            'Deployed the website using GitHub Pages.',
            'Optimized website performance for faster loading times.',
            'Integrated contact form for user inquiries.',
            'Used React Router for navigation between different sections.',
]
    },
    {
        title:'E-commerce Website',
        date:"March 2023",
        description:'An e-commerce website for online shopping.',
        responsiblities:[
            'Developed the frontend using React.js and Bootstrap.',
            'Integrated payment gateway for secure transactions.',
            'Implemented user authentication and authorization.',
            'Used Redux for state management.',
            'Created RESTful APIs using Node.js and Express.js.',
            'Implemented responsive design for mobile and desktop views.',
            'Optimized website performance for faster loading times.'
 ]
    },
    {
        title:'Weather App',
        date:"April 2023",
        description:'A weather application to display current weather information.',
        responsiblities:[
            'Used OpenWeatherMap API to fetch weather data.',
            'Implemented search functionality for different cities.',
            'Designed user-friendly interface using CSS.',
            'Used React Hooks for state management.',
            'Implemented responsive design for mobile and desktop views.',
            'Optimized website performance for faster loading times.',
            'Deployed the application using Netlify.',
        ]
    }
]