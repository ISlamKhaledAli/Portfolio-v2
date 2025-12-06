import { motion } from 'framer-motion';
import worldwiseImg from '../assets/projects/worldwise-hero.png';
import usepopcorn from '../assets/projects/usepopcorn-hero.png';

const projects = [
    {
        id: 1,
        title: "WorldWise",
        description: "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.",
        tags: ["React", "Leaflet", "CSS Modules", "Vite"],
        image: worldwiseImg,
        github: "https://github.com/ISlamKhaledAli/worldwise"
    },
    {
        id: 2,
        title: "usePopcorn",
        description: "Search for movies, view details, and rate your favorites. A reactive web app for movie enthusiasts to track their watchlist.",
        tags: ["React", "Hooks", "OMDb API"],
        image: usepopcorn,
        github: "https://github.com/ISlamKhaledAli/usepopcorn"
    },
    
];

const Projects = () => {
    return (
        <section id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="gradient-text"
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Featured Projects
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <motion.a
                        key={project.id}
                        href={project.github}
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security best practice
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass"
                        style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            background: 'rgba(20, 20, 20, 0.6)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            display: 'block', // Ensure anchor behaves like block
                            textDecoration: 'none' // Remove default underline
                        }}
                    >
                        <div style={{ height: '220px', overflow: 'hidden' }}>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#fff' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '20px',
                                        background: 'rgba(var(--primary-rgb), 0.1)', // Use theme var
                                        color: 'var(--primary)',
                                        border: '1px solid rgba(var(--primary-rgb), 0.2)' // Use theme var
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
