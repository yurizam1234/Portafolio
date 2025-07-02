import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'

// Importamos una imagen de perfil (deberás reemplazarla con una imagen real)
const profileImageUrl = '/src/assets/profile.svg'

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 992px) {
    padding-top: 5rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`

const HeroText = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
    margin-right: 1rem;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`

const Role = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
  
  @media (max-width: 992px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 600px;
  color: #666;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: #5a52e0;
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
  
  @media (max-width: 576px) {
    justify-content: center;
  }
`

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: var(--text-color);
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
  
  @media (max-width: 576px) {
    justify-content: center;
  }
`

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
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
  background-color: #f0f0f0;
  color: var(--text-color);
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #2a2a2a;
    color: #f8f9fa;
  }
`

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const ProfileImage = styled(motion.img)`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--primary-color);
  box-shadow: 0 10px 30px rgba(108, 99, 255, 0.3);
  
  @media (max-width: 992px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
  @media (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`

const BackgroundCircle = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  opacity: 0.1;
  z-index: -1;
  
  @media (max-width: 992px) {
    width: 350px;
    height: 350px;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 576px) {
    width: 250px;
    height: 250px;
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const ScrollLine = styled(motion.div)`
  width: 2px;
  height: 50px;
  background-color: var(--primary-color);
  border-radius: 2px;
`

const Home = () => {
  return (
    <PageTransition>
      <HomeContainer>
        <HeroSection>
          <HeroContent>
            <HeroText>
              <Greeting
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hola, soy
              </Greeting>
              
              <Name
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Susana <span>Rodriguez</span>
              </Name>
              
              <Role
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Estudiante de Sistemas Informáticos
              </Role>
              
              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Apasionada por el desarrollo web y las nuevas tecnologías. 
                Actualmente estudiando en el Instituto TECBA y desarrollando 
                proyectos que combinan creatividad y funcionalidad.
              </Description>
              
              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <PrimaryButton to="/projects">
                  Ver Proyectos <FaArrowRight />
                </PrimaryButton>
                
                <SecondaryButton to="/contact">
                  Contacto
                </SecondaryButton>
              </ButtonGroup>
              
              <SocialLinks
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <SocialIcon 
                  href="https://github.com/" 
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
              </SocialLinks>
            </HeroText>
            
            <HeroImage>
              <BackgroundCircle
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <ProfileImage
                src={profileImageUrl}
                alt="Susana Rodriguez"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </HeroImage>
          </HeroContent>
          
          <ScrollIndicator
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <p>Scroll</p>
            <ScrollLine
              animate={{ height: [50, 30, 50] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </ScrollIndicator>
        </HeroSection>
      </HomeContainer>
    </PageTransition>
  )
}

export default Home