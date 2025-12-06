import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "ITI 9-Month Open Source Program",
        company: "Information Technology Institute (ITI)",
        period: "Recently Completed",
        description: "Intensive training program gaining hands-on experience in Linux, Docker, CI/CD, backend development, and full-stack architectures."
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="gradient-text"
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Qualification & Experience
            </motion.h2>

            <div className="timeline-container">
                {/* Vertical Line */}
                <div className="timeline-line"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="timeline-item"
                    >
                        {/* Dot */}
                        <div className="timeline-dot"></div>

                        <div className="glass timeline-content">
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{exp.company}</h4>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>{exp.period}</span>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
