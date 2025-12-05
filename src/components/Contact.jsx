import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactCard = ({ icon: Icon, title, value, href, color = "var(--primary)" }) => {
  const Container = href ? motion.a : motion.div;
  
  return (
    <Container
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { scale: 1, x: 0, backgroundColor: "transparent", borderColor: "transparent", boxShadow: "none" },
        hover: { 
          scale: 1.02, 
          x: 5, 
          backgroundColor: "rgba(255,255,255,0.03)", 
          borderColor: `rgba(var(--primary-rgb), 0.3)`, 
          boxShadow: `0 4px 20px rgba(var(--primary-rgb), 0.1)`, 
          borderRadius: "12px"
        }
      }}
      style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "1rem", 
        cursor: "pointer", 
        padding: "1rem", 
        border: "1px solid transparent",
        transition: "border-color 0.3s",
        textDecoration: "none",
        color: "inherit",
        width: "100%",
        maxWidth: "100%"
      }}
    >
      <motion.div
        style={{
          padding: "1rem",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          color: color,
          flexShrink: 0
        }}
        variants={{
          hover: { rotate: 360, scale: 1.2, backgroundColor: color, color: "#000" }
        }}
        transition={{ duration: 0.5 }}
      >
        <Icon size={20} />
      </motion.div>
      <div style={{ overflow: "hidden" }}>
        {title && <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", display: "block" }}>{title}</span>}
        {value && <p style={{ margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</p>} 
      </div>
    </Container>
  );
};

const Contact = () => {
  return (
    <section id="contact" style={{ paddingBottom: "4rem" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gradient-text"
        style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Get In Touch
      </motion.h2>
      <p
        style={{
          textAlign: "center",
          color: "var(--text-muted)",
          marginBottom: "3rem",
        }}
      >
        Open for new opportunities and collaborations.
      </p>

      <div
        style={{
          display: "flex",
          gap: "4rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}
        >
          <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Contact Info
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <ContactCard 
              icon={FaEnvelope} 
              title="Email" 
              value="khaledislam9003@gmail.com" 
            />
            <ContactCard 
              icon={FaPhone} 
              title="Phone" 
              value="+20 109 778 2965" 
            />
            <ContactCard 
              icon={FaMapMarkerAlt} 
              title="Location" 
              value="Egypt" 
            />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h4 style={{ marginBottom: "1rem" }}>Social Profiles</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <ContactCard
                icon={FaGithub}
                value="GitHub Profile"
                href="https://github.com/ISlamKhaledAli"
              />
              <ContactCard
                icon={FaLinkedin}
                value="LinkedIn Profile"
                href="https://linkedin.com/in/islam-khaled-36985a338/"
                color="#0077b5" 
              />
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "500px",
            padding: "2rem",
            borderRadius: "15px",
          }}
        >
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Send Message
            </h3>
            <div>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  borderColor: "var(--primary)",
                  boxShadow: `0px 0px 8px rgba(var(--primary-rgb), 0.4)`,
                }}
                transition={{ duration: 0.3 }}
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  borderColor: "var(--primary)",
                  boxShadow: `0px 0px 8px rgba(var(--primary-rgb), 0.4)`,
                }}
                transition={{ duration: 0.3 }}
                type="email"
                placeholder="Your Email"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <motion.textarea
                whileFocus={{
                  scale: 1.02,
                  borderColor: "var(--primary)",
                  boxShadow: `0px 0px 8px rgba(var(--primary-rgb), 0.4)`,
                }}
                transition={{ duration: 0.3 }}
                rows="4"
                placeholder="Message"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  outline: "none",
                  resize: "none",
                }}
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, brightness: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              type="button"
              style={{
                padding: "1rem",
                borderRadius: "8px",
                border: "none",
                background:
                  "linear-gradient(to right, var(--primary), var(--secondary))",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <footer
        style={{
          marginTop: "4rem",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Islam Khaled Ali. All rights
          reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
