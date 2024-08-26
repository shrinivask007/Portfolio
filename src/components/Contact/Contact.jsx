import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';
import styles from './Contact.module.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container fills the viewport height */
  justify-content: space-between; /* Pushes footer to the bottom */
  align-items: center;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 40px 0px; /* Reduced padding at the bottom */
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: var(--color-text);
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: var(--color-text);
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(12, 12, 12, 0.6);
  padding: 24px; /* Reduced padding */
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 8px; /* Reduced gap */
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: var(--color-text);
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px; /* Reduced font size */
  color: var(--color-text);
  border-radius: 8px; /* Reduced border radius */
  padding: 10px 14px; /* Reduced padding */
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px; /* Reduced font size */
  color: var(--color-text);
  border-radius: 8px; /* Reduced border radius */
  padding: 10px 14px; /* Reduced padding */
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: var(--color-primary);
  padding: 12px 16px; /* Reduced padding */
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  background-color: rgba(12, 12, 12, 0.6);
  color: white; /* Set text color to white */
  text-align: center;

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px; /* Space between social media icons */
    margin-bottom: 16px; /* Space between links and copyright */
  }

  a {
    margin: 0 8px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .social-links {
      gap: 5px; /* Reduced gap for smaller screens */
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Contact = () => {
  // State and ref hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  // Submit handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const fromEmail = form.from_email.value;
    // const fromName = form.from_name.value;
    // const subject = form.subject.value;
    // const message = form.message.value;

    // // Constructing the mailto link
    // const mailtoLink = `mailto:shrinivassk18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${fromName}\nEmail: ${fromEmail}\n\nMessage:\n${message}`)}`;

    // // Opening the mailto link
    // window.location.href = mailtoLink;

    // Show Snackbar message
    // setOpen(true);
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton onClick={() => window.location.href = "mailto:shrinivassk18@gmail.com"} type="button" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email action triggered successfully!"
          severity="success"
        />
      </Wrapper>
      {/* Social Media Links */}
      <Footer>
        <div className="social-links">
          <a href="https://github.com/shrinivask007" target="_blank" rel="noopener noreferrer">
            <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="your-github-username" height="25" width="30" />
          </a>
          <a href="https://www.linkedin.com/in/shrinivas-kathare/" target="_blank" rel="noopener noreferrer">
            <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="shrinivas kathare" height="25" width="30" />
          </a>
          <a href="https://instagram.com/iamshree_007" target="_blank" rel="noopener noreferrer">
            <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="iamshree_007" height="25" width="30" />
          </a>
          <a href="https://twitter.com/iamshree_007" target="_blank" rel="noopener noreferrer">
            <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="iamshree_007" height="25" width="30" />
          </a>
          <a href="mailto:shrinivassk18@gmail.com" target="_blank" rel="noopener noreferrer">
            <img align="center" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" height="20" width="30" />
          </a>
          <a href="https://fb.com/shrinivas.kathare.007" target="_blank" rel="noopener noreferrer">
            <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="shrinivas.kathare.5" height="25" width="30" />
          </a>
        </div>
        <p> &copy; 2024 Shrinivas Kathare. All rights reserved.</p>
      </Footer>
    </Container>
  );
};
