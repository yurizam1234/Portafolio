import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const FooterContainer = styled.footer`
  background-color: #121212;
  color: #f8f9fa;
  padding: 3rem 0 1.5rem;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--primary-color);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const FooterText = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.6;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`

const QuickLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const QuickLink = styled.li`
  a {
    color: #aaa;
    transition: var(--transition);
    font-size: 0.9rem;
    
    &:hover {
      color: var(--primary-color);
      padding-left: 5px;
    }
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    color: var(--primary-color);
  }
  
  p {
    font-size: 0.9rem;
    color: #aaa;
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #2a2a2a;
  font-size: 0.9rem;
  color: #aaa;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Susana Rodriguez</FooterTitle>
          <FooterText>
            Estudiante de Sistemas Informáticos en el Instituto TECBA. 
            Apasionada por el desarrollo web y las nuevas tecnologías.
          </FooterText>
          <SocialLinks>
            <SocialIcon 
              href="https://github.com/yurizam1234" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
              href="https://twitter.com/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="mailto:yurizam159@gmail.com" 
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Enlaces Rápidos</FooterTitle>
          <QuickLinks>
            <QuickLink><a href="/">Inicio</a></QuickLink>
            <QuickLink><a href="/about">Sobre Mí</a></QuickLink>
            <QuickLink><a href="/skills">Habilidades</a></QuickLink>
            <QuickLink><a href="/projects">Proyectos</a></QuickLink>
            <QuickLink><a href="/experience">Experiencia</a></QuickLink>
            <QuickLink><a href="/contact">Contacto</a></QuickLink>
          </QuickLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <ContactItem>
            <FaEnvelope />
            <p>susana@gmail.com</p>
          </ContactItem>
          <ContactItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <p>github.com/susana</p>
          </ContactItem>
          <ContactItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            <p>linkedin.com/in/susana</p>
          </ContactItem>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {currentYear} Susana Rodriguez. Todos los derechos reservados.</p>
      </Copyright>
    </FooterContainer>
  )
}

export default Footer