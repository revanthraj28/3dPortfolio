import { meta, shopify, starbucks, tesla, hero, Nestle, Code} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    swift,
    java
} from "../assets/icons";

export const skills = [
    {
        imageUrl: swift,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Nestle",
        icon: Nestle,
        iconBg: "#accbe1",
        date: "June 2023 - August 2023",
        points: [
            "Integrated the CMDB with Azure DevOps to automate the deployment pipeline and ensure that CI information is up-to-date.Developing and maintaining web applications using React.js and other related technologies.",
            "Implemented FinOps (Financial Operations) to monitor, manage, and optimize cloud spending.",
            "Integrated cost management tools to provide visibility into cloud expenditures, enabling better budget forecasts and cost-saving strategies.",
            "Regularly analyzed spending patterns and optimized resource allocation to reduce waste and improve financial efficiency.",
            "Deployed a robust CMDB system to track all IT assets and map out dependencies and impacts between different configuration items (CIs).",
        ],
    },
    {
        title: "Junior IOS developer",
        company_name: "Code hive soultions pvt lt",
        icon: Code,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developed multiple iOS applications using Swift and Objective-C, demonstrating a strong command of these programming languages and their application in building robust mobile solutions.",
            "Implemented Model-View-ViewModel (MVVM) and Model-View-Controller (MVC) architectures in various projects, ensuring scalable and maintainable code structures that enhance application performance and readability.",
            "Integrated complex APIs and services, including JSON API and Google Maps, using tools like Postman for testing and CocoaPods for dependency management, facilitating seamless functionality within applications.",
            "Utilized Google Firebase to implement push notifications and deep linking, improving user engagement and enhancing the overall user experience by providing timely and relevant updates within the app.",
            "Worked with design tools such as Figma and Avocado to create intuitive user interfaces, and communicated effectively with clients to understand requirements and deliver customized solutions, exemplifying strong teamwork and client interaction skills.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/revanthraj28',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/revanth-raj-66b864224/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Netflix-Clone',
        description: 'Developed a Netflix Clone application in IOS Using Swift5 and used MVVM architecture',
        link: 'https://github.com/revanthraj28/Netflix-clone-',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full stack chat application',
        description: 'Full stack Chat Web application using Nodejs and ChatEngine.io',
        link: 'https://github.com/revanthraj28/nodejs-reactjs-chat',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Hill Climb(Game)',
        description: 'Using Unity, I developed "Hill Climb", a 2D game that combines physics and animation for enhanced aesthetics and engaging gameplay.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Doorcast',
        description: 'I developed an iOS application utilizing MVVM architecture to monitor employees and field workers, at work and track their live locations.',
        link: 'https://github.com/revanthraj28/doorcast-iOS-',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Voting system using solidity',
        description: 'Demonstrated hands-on experience and developing a secure and transparent voting application on the blockchain utilizing smart contracts. Languages used React, Solidity. Tools used Remix,VScode, MetaMask.',
        link: 'https://github.com/revanthraj28/Voting-solidity',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];