import { motion } from 'framer-motion';
import profile from '../assets/projects/profile.jpg';


const About = () => {
    return (
        <section id="about">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                     {/* Placeholder image or abstract shape */}
                    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    style={{
        width: '100%',
        maxWidth: '400px', // Limit width to keep it looking nice
        height: 'auto', // Allow height to adjust based on image
        marginLeft: 'auto', // Center if needed
        marginRight: 'auto',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(45deg, var(--secondary), var(--primary))',
        padding: '5px', 
    }}
>

    {/* Card Container */}
    <div
        style={{
            width: '100%',
            height: '100%',
            background: 'var(--bg-card)',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex', // Ensures no extra space below image
        }}
    >
        <img
            src= {profile}
            alt="Profile"
            style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain', // Ensure whole image is seen
                display: 'block',
            }}
        />
    </div>

</motion.div>

                </div>
                
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="gradient-text"
                        style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}
                    >
                        A dedicated Full-Stack Developer with strong experience in building scalable web applications using React, Node.js, and modern JavaScript tools.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                         style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}
                    >
                        Completed the ITI 9-Month Open Source Program, gaining hands-on experience in Linux, Docker, CI/CD, backend development, and full-stack architectures. Passionate about problem-solving, clean code, and creating practical, user-focused digital solutions.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
