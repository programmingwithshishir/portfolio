import ProjectCard from "./ProjectCard";
import projectA1 from "../../assets/projects/project1/1.png";
import projectA2 from "../../assets/projects/project1/2.png";
import projectA3 from "../../assets/projects/project1/3.png";
import projectA4 from "../../assets/projects/project1/4.png";
import projectA5 from "../../assets/projects/project1/5.png";
import projectA6 from "../../assets/projects/project1/6.png";
import projectA7 from "../../assets/projects/project1/7.png";
import projectA8 from "../../assets/projects/project1/8.png";
import projectA9 from "../../assets/projects/project1/9.png";
import projectA10 from "../../assets/projects/project1/10.png";
import projectB1 from "../../assets/projects/project2/1.png";
import projectB2 from "../../assets/projects/project2/2.png";
import projectB3 from "../../assets/projects/project2/3.png";
import projectB4 from "../../assets/projects/project2/4.png";
import projectB5 from "../../assets/projects/project2/5.png";
import projectB6 from "../../assets/projects/project2/6.png";
import projectB7 from "../../assets/projects/project2/7.png";
import projectB8 from "../../assets/projects/project2/8.png";
import projectB9 from "../../assets/projects/project2/9.png";
import projectB10 from "../../assets/projects/project2/10.png";

const ProjectsPage = () => {
    const sampleProjects = [
        {
            title: "Venue Verse",
            images: [projectA1,projectA2,projectA3,projectA4,projectA5,projectA6,projectA7,projectA8,projectA9,projectA10],
            tags: ["React", "Node.js", "Tailwind CSS", "Firebase", "HTML", "JavaScript"],
            description: "A full-stack Venue Renting Application",
            longDescription: "Venue Verse is your one-stop platform to rent and list venues for marriage receptions, parties, and special events. Find the perfect space or rent out yours — all in just a few clicks!",
            githubUrl: "https://github.com/programmingwithshishir/venue-verse"
        },
        {
            title: "Insights",
            images: [projectB1,projectB2,projectB3,projectB4,projectB5,projectB6,projectB7,projectB8,projectB9,projectB10],
            tags: ["React", "Node.js", "Tailwind CSS", "Firebase", "NeonDB", "HTML", "JavaScript", "PostgreSQL"],
            description: "A full-stack Student Management System",
            longDescription: "Insights is a virtual classroom platform designed to enhance the online learning experience. Students can interact with peers and teachers, while teachers can manage assignments, tests, and classroom activities — all in one place.",
            githubUrl: "https://github.com/programmingwithshishir/insights"
        }
    ];

    return ( 
        <div className="min-h-screen bg-highlight p-8">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-dominant text-center mb-12">My Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </div>
        </div>
        </div>
    );
}
 
export default ProjectsPage;