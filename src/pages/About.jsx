import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaLaptopCode, FaUsers, FaFileDownload } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

// Importamos una imagen de perfil (deberás reemplazarla con una imagen real)
const aboutImageUrl = '/src/assets/about.svg'

const AboutContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`

const AboutSection = styled.section`
  padding: 5rem 0;
`

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutImage = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: -1;
    display: flex;
    justify-content: center;
  }
`

const Image = styled(motion.img)`
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const StatItem = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const StatIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`

const StatTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`

const StatText = styled.p`
  font-size: 0.9rem;
  color: #666;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: var(--transition);
  align-self: flex-start;
  margin-top: 1rem;
  
  &:hover {
    background-color: #5a52e0;
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
`

const EducationSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
  
  @media (prefers-color-scheme: dark) {
    background-color: #161616;
  }
`

const EducationContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: var(--primary-color);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:nth-child(odd) {
    padding-right: calc(50% + 30px);
    text-align: right;
    
    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 60px;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: calc(50% + 30px);
    
    @media (max-width: 768px) {
      padding-left: 60px;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    width: 16px;
    height: 16px;
    background-color: var(--primary-color);
    border-radius: 50%;
    
    ${props => props.side === 'left' ? 'right: calc(50% - 8px);' : 'left: calc(50% - 8px);'}
    
    @media (max-width: 768px) {
      left: 13px;
      right: auto;
    }
  }
`

const TimelineContent = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const TimelineDate = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-weight: 500;
`

const TimelineText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const About = () => {
  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [textRef, textInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [statsRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [buttonRef, buttonInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const educationItems = [
    {
      date: '2021 - Presente',
      title: 'Sistemas Informáticos',
      subtitle: 'Instituto TECBA',
      description: 'Estudiante de la carrera de Sistemas Informáticos, enfocada en el desarrollo de aplicaciones web y móviles, bases de datos y programación orientada a objetos.',
      side: 'left'
    },
    {
      date: '2020 - 2021',
      title: 'Curso de Desarrollo Web',
      subtitle: 'Plataforma Online',
      description: 'Curso intensivo de desarrollo web frontend con HTML, CSS y JavaScript. Aprendizaje de frameworks como React y herramientas de desarrollo modernas.',
      side: 'right'
    },
    {
      date: '2019 - 2020',
      title: 'Bachillerato en Ciencias',
      subtitle: 'Colegio Nacional',
      description: 'Graduada con honores del bachillerato en ciencias, con especialización en matemáticas y tecnología.',
      side: 'left'
    }
  ]
  
  return (
    <PageTransition>
      <AboutContainer>
        <AboutSection>
          <SectionTitle 
            title="Sobre Mí" 
            subtitle="Conoce un poco más sobre mi trayectoria y mis intereses profesionales"
          />
          
          <AboutContent>
            <AboutInfo>
              <AboutText
                ref={textRef}
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                Soy Susana Rodriguez, estudiante de Sistemas Informáticos en el Instituto TECBA. 
                Me apasiona el desarrollo web y la creación de experiencias digitales que combinen 
                diseño atractivo con funcionalidad intuitiva.
              </AboutText>
              
              <AboutText
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Mi objetivo es convertirme en una desarrolladora web fullstack, especializada en 
                tecnologías modernas como React, Node.js y bases de datos. Me encanta aprender 
                constantemente y enfrentar nuevos desafíos que me permitan crecer profesionalmente.
              </AboutText>
              
              <AboutStats ref={statsRef}>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  <StatIcon>
                    <FaGraduationCap />
                  </StatIcon>
                  <StatTitle>2+</StatTitle>
                  <StatText>Años de Estudio</StatText>
                </StatItem>
                
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <StatIcon>
                    <FaLaptopCode />
                  </StatIcon>
                  <StatTitle>10+</StatTitle>
                  <StatText>Proyectos Realizados</StatText>
                </StatItem>
                
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <StatIcon>
                    <FaUsers />
                  </StatIcon>
                  <StatTitle>5+</StatTitle>
                  <StatText>Colaboraciones</StatText>
                </StatItem>
              </AboutStats>
              
              <DownloadButton 
                href="#"
                ref={buttonRef}
                initial={{ opacity: 0, y: 20 }}
                animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload /> Descargar CV
              </DownloadButton>
            </AboutInfo>
            
            <AboutImage ref={imageRef}>
              <Image 
                src={aboutImageUrl} 
                alt="Susana Rodriguez"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              />
            </AboutImage>
          </AboutContent>
        </AboutSection>
        
        <EducationSection>
          <SectionTitle 
            title="Educación" 
            subtitle="Mi formación académica y cursos relevantes"
          />
          
          <EducationContent>
            <Timeline>
              {educationItems.map((item, index) => {
                const [ref, inView] = useInView({
                  threshold: 0.1,
                  triggerOnce: true
                })
                
                return (
                  <TimelineItem 
                    key={index} 
                    side={item.side}
                    ref={ref}
                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <TimelineContent>
                      <TimelineDate>{item.date}</TimelineDate>
                      <TimelineTitle>{item.title}</TimelineTitle>
                      <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                      <TimelineText>{item.description}</TimelineText>
                    </TimelineContent>
                  </TimelineItem>
                )
              })}
            </Timeline>
          </EducationContent>
        </EducationSection>
      </AboutContainer>
    </PageTransition>
  )
}

export default About