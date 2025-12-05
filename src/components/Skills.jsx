import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiMysql, SiLinux, SiDocker } from 'react-icons/si';

const skills = [
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Data Structs', icon: <FaDatabase />, color: '#fff' }, // Generic for now
    { name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
];

const Skills = () => {
    return (
        <section id="skills" style={{ textAlign: 'center' }}>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="gradient-text"
                style={{ fontSize: '3rem', marginBottom: '3rem', display: 'inline-block' }}
            >
                My Skills
            </motion.h2>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                gap: '2rem',
                padding: '0 2rem'
            }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { duration: 0.3, delay: index * 0.05 }
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.05, 
                            translateY: -5,
                            transition: { duration: 0.2 }
                        }}
                        className="glass"
                        style={{
                            padding: '1.5rem',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <div style={{ fontSize: '3rem', color: skill.color }}>
                            {skill.icon}
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: '500' }}>{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
