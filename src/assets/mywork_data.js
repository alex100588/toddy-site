import shopping from '../assets/shopping.png';
import weather from '../assets/weather.png';
import photoappjs from '../assets/photoappjs.png';
import photoappreact from '../assets/photoappreact.png'; 
import ecommerce from '../assets/ecommerce.png'; 
import game2 from '../assets/game2.png'; 
import crud from '../assets/crud.png'; 
import chat from '../assets/chat.png'; 


const mywork_data = [
    {
        w_no:1,
        w_name: "Shopping list",
        w_img: shopping,
        adress: "https://alex-shopping-list.netlify.app/",
        description: "This project is built using HTML, CSS, and JavaScript, with Local Storage for data persistence. To dynamically add and manage items, I utilized the DOM (Document Object Model), allowing for real-time updates and interaction.",
        git:"https://github.com/alex100588/shopping-list-app"
    },
    {
        w_no:2,
        w_name: "Weather App",
        w_img: weather,
        adress:"https://weatherappalexionasc.netlify.app/",
        description: "This project is developed using HTML, CSS, JavaScript, and Bootstrap for responsive design. To fetch weather information for different cities, I integrated a weather API, allowing real-time data updates and city-specific forecasts.",
        git: "https://github.com/alex100588/Weather"
    },
    {
        w_no:3,
        w_name: "Photo App",
        w_img: photoappjs,
        adress:"https://photoappjs.netlify.app/",
        description: "This project is built using HTML, CSS, and JavaScript, leveraging Local Storage for persistent data. I utilized Object-Oriented Programming (OOP) principles to structure the code efficiently, and implemented routing to navigate between different pages. For asynchronous data fetching, I incorporated async/await to ensure smooth, non-blocking operations.",
        git:'https://github.com/alex100588/photoapp'
    },
    {
        w_no:4,
        w_name: "Photo app React.js",
        w_img: photoappreact,
        adress:"https://photo-app-react-js-iota.vercel.app/",
        description: " Built a responsive single-page application using React and JavaScript, with Bootstrap for layout and UI components. Implemented smooth client-side navigation using React Router and ensured mobile-first responsiveness across various screen sizes. Focused on clean component structure, interactive functionality, and a user-friendly interface.",
        git: 'https://github.com/alex100588/photo-app-react-js'
    },
    {
        w_no:5,
        w_name: "E-commerce app React.js",
        w_img: ecommerce,
        adress:"https://ecommerce-react-alex.vercel.app/",
        description: "Developed a dynamic web application using React.js, with Bootstrap, CSS, and JavaScript for responsive design and interactive UI components. Implemented Context API for efficient state management, React Router for seamless navigation, and Axios for handling API requests. Integrated JSON Server as a mock backend to simulate RESTful operations and used localStorage to persist user data across sessions. Leveraged JavaScript’s built-in methods to optimize performance and enhance interactivity.",
        git: 'https://github.com/alex100588/ecommerce-react/tree/master'
    },
    {
        w_no:6,
        w_name: "Game platform app React.ts",
        w_img: game2,
        adress:"https://game-platform-react-ts.vercel.app/",
        description: "Built a responsive web application using React and TypeScript, leveraging JavaScript’s built-in methods to enhance functionality and performance. Designed a clean, modern user interface with Chakra UI, ensuring accessibility and responsiveness across devices. Integrated Axios for efficient API communication and data fetching. Focused on component reusability, type safety, and maintainable code architecture.",
        git: 'https://github.com/alex100588/game-platform-react-ts'
    },
    {
        w_no:6,
        w_name: "CRUD Full stack app with MERN",
        w_img: crud,
        adress:"https://crud-full-stack-app-ye16.vercel.app/",
        description: " A full stack CRUD web application using the MERN stack. Built the frontend with React.js and CSS, implementing a clean, responsive UI and dynamic routing with React Router. Used Axios to handle API requests between the frontend and backend. The backend was developed with Node.js and Express, with MongoDB as the database for storing and managing data. Implemented RESTful API endpoints for Create, Read, Update, and Delete operations. Focused on clean architecture, modular code, and seamless user experience.",
        git: 'https://github.com/alex100588/CRUD-full-stack-app'
    },
    {
        w_no:7,
        w_name: "Full-Stack Chat App with MERN",
        w_img: chat,
        adress:"https://crud-full-stack-app-ye16.vercel.app/",
        description: "  A full-stack MERN application featuring full CRUD functionality, JWT-based authentication/authorization, and real-time messaging with Socket.io, including online user presence tracking. The UI is built with React, TailwindCSS, and daisyUI, with global state managed via Zustand for efficient data handling across components.",
        git: 'https://github.com/alex100588/CRUD-full-stack-app'
    },
]

export default mywork_data;