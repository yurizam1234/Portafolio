import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

// Importamos iconos
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const ExperienceContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`

const ExperienceSection = styled.section`
  padding: 5rem 0;
`

const ExperienceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid #e0e0e0;
  
  @media (prefers-color-scheme: dark) {
    border-bottom-color: #333;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-bottom: none;
  }
`

const Tab = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: var(--transition);
  }
  
  &:hover {
    color: var(--primary-color);
  }
  
  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem;
    border-bottom: 2px solid ${props => props.active ? 'var(--primary-color)' : '#e0e0e0'};
    
    &::after {
      display: none;
    }
    
    @media (prefers-color-scheme: dark) {
      border-bottom-color: ${props => props.active ? 'var(--primary-color)' : '#333'};
    }
  }
`

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    width: 2px;
    height: 100%;
    background-color: var(--primary-color);
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    width: 50%;
    margin-left: ${props => props.position === 'right' ? '50%' : '0'};
    padding-left: ${props => props.position === 'right' ? '3rem' : '0'};
    padding-right: ${props => props.position === 'left' ? '3rem' : '0'};
    text-align: ${props => props.position === 'left' ? 'right' : 'left'};
  }
  
  @media (max-width: 767px) {
    padding-left: 3rem;
  }
`

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--primary-color);
  border-radius: 50%;
  top: 15px;
  
  @media (min-width: 768px) {
    left: ${props => props.position === 'right' ? '-10px' : 'auto'};
    right: ${props => props.position === 'left' ? '-10px' : 'auto'};
  }
  
  @media (max-width: 767px) {
    left: 11px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    
    @media (prefers-color-scheme: dark) {
      background-color: #121212;
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

const TimelineHeader = styled.div`
  display: flex;
  justify-content: ${props => props.position === 'left' ? 'flex-end' : 'flex-start'};
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`

const TimelineIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  font-size: 1.2rem;
  margin-right: ${props => props.position === 'left' ? '0' : '1rem'};
  margin-left: ${props => props.position === 'left' ? '1rem' : '0'};
  
  @media (max-width: 767px) {
    margin-right: 1rem;
    margin-left: 0;
  }
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

const TimelineMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  svg {
    color: var(--primary-color);
  }
`

const TimelineText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const TimelineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: ${props => props.position === 'left' ? 'flex-end' : 'flex-start'};
  
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`

const TimelineTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  
  @media (prefers-color-scheme: dark) {
    background-color: rgba(108, 99, 255, 0.2);
  }
`

const CertificatesSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
  
  @media (prefers-color-scheme: dark) {
    background-color: #161616;
  }
`

const CertificatesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const CertificateCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const CertificateIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`

const CertificateTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`

const CertificateIssuer = styled.h4`
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-weight: 500;
`

const CertificateDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
  
  svg {
    color: var(--primary-color);
  }
`

const CertificateButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: #5a52e0;
    transform: translateY(-2px);
  }
`

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState('work')
  
  // Datos de experiencia laboral
  const workExperience = [
    {
      id: 1,
      title: 'Desarrolladora Web Frontend',
      company: 'TechSolutions',
      location: 'Ciudad de México',
      date: 'Enero 2023 - Presente',
      description: 'Desarrollo de interfaces de usuario con React y Styled Components. Implementación de animaciones con Framer Motion y optimización del rendimiento de aplicaciones web.',
      tags: ['React', 'CSS', 'JavaScript'],
      position: 'right',
      icon: <FaBriefcase />
    },
    {
      id: 2,
      title: 'Pasante de Desarrollo',
      company: 'InnovateTech',
      location: 'Remoto',
      date: 'Junio 2022 - Diciembre 2022',
      description: 'Colaboración en el desarrollo de aplicaciones web utilizando HTML, CSS y JavaScript. Participación en reuniones de equipo y aprendizaje de metodologías ágiles.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      position: 'left',
      icon: <FaBriefcase />
    },
    {
      id: 3,
      title: 'Asistente de Diseño Web',
      company: 'CreativeDesign',
      location: 'Ciudad de México',
      date: 'Enero 2022 - Mayo 2022',
      description: 'Asistencia en el diseño de interfaces de usuario y maquetación de sitios web. Creación de prototipos y colaboración con el equipo de desarrollo.',
      tags: ['UI/UX', 'Figma', 'Adobe XD'],
      position: 'right',
      icon: <FaBriefcase />
    }
  ]
  
  // Datos de educación
  const education = [
    {
      id: 1,
      title: 'Sistemas Informáticos',
      institution: 'Instituto TECBA',
      location: 'Ciudad de México',
      date: '2021 - Presente',
      description: 'Estudiante de la carrera de Sistemas Informáticos, enfocada en el desarrollo de aplicaciones web y móviles, bases de datos y programación orientada a objetos.',
      tags: ['Programación', 'Bases de Datos', 'Desarrollo Web'],
      position: 'right',
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      title: 'Curso de Desarrollo Web',
      institution: 'Plataforma Online',
      location: 'Remoto',
      date: '2020 - 2021',
      description: 'Curso intensivo de desarrollo web frontend con HTML, CSS y JavaScript. Aprendizaje de frameworks como React y herramientas de desarrollo modernas.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      position: 'left',
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      title: 'Bachillerato en Ciencias',
      institution: 'Colegio Nacional',
      location: 'Ciudad de México',
      date: '2018 - 2020',
      description: 'Graduada con honores del bachillerato en ciencias, con especialización en matemáticas y tecnología.',
      tags: ['Matemáticas', 'Tecnología', 'Ciencias'],
      position: 'right',
      icon: <FaGraduationCap />
    }
  ]
  
  // Datos de certificaciones
  const certificates = [
    {
      id: 1,
      title: 'Desarrollo Web Frontend',
      issuer: 'FreeCodeCamp',
      date: 'Diciembre 2022',
      link: '#'
    },
    {
      id: 2,
      title: 'JavaScript Moderno',
      issuer: 'Udemy',
      date: 'Octubre 2022',
      link: '#'
    },
    {
      id: 3,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'Marzo 2023',
      link: '#'
    },
    {
      id: 4,
      title: 'Diseño UI/UX Fundamentals',
      issuer: 'Coursera',
      date: 'Enero 2023',
      link: '#'
    },
    {
      id: 5,
      title: 'Git y GitHub',
      issuer: 'Platzi',
      date: 'Septiembre 2022',
      link: '#'
    },
    {
      id: 6,
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: 'Agosto 2022',
      link: '#'
    }
  ]
  
  return (
    <PageTransition>
      <ExperienceContainer>
        <ExperienceSection>
          <SectionTitle 
            title="Experiencia" 
            subtitle="Mi trayectoria profesional y formación académica"
          />
          
          <ExperienceContent>
            <TabsContainer>
              <Tab 
                active={activeTab === 'work'}
                onClick={() => setActiveTab('work')}
              >
                <FaBriefcase /> Experiencia Laboral
              </Tab>
              
              <Tab 
                active={activeTab === 'education'}
                onClick={() => setActiveTab('education')}
              >
                <FaGraduationCap /> Educación
              </Tab>
            </TabsContainer>
            
            <Timeline>
              {activeTab === 'work' ? (
                workExperience.map((item) => {
                  const [ref, inView] = useInView({
                    threshold: 0.1,
                    triggerOnce: true
                  })
                  
                  return (
                    <TimelineItem 
                      key={item.id} 
                      position={item.position}
                      ref={ref}
                      initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                      transition={{ duration: 0.6 }}
                    >
                      <TimelineDot position={item.position} />
                      <TimelineContent>
                        <TimelineHeader position={item.position}>
                          <TimelineIcon position={item.position}>
                            {item.icon}
                          </TimelineIcon>
                        </TimelineHeader>
                        
                        <TimelineTitle>{item.title}</TimelineTitle>
                        <TimelineSubtitle>{item.company}</TimelineSubtitle>
                        
                        <TimelineMeta>
                          <div>
                            <FaCalendarAlt />
                            <span>{item.date}</span>
                          </div>
                          
                          <div>
                            <FaMapMarkerAlt />
                            <span>{item.location}</span>
                          </div>
                        </TimelineMeta>
                        
                        <TimelineText>{item.description}</TimelineText>
                        
                        <TimelineTags position={item.position}>
                          {item.tags.map((tag, index) => (
                            <TimelineTag key={index}>{tag}</TimelineTag>
                          ))}
                        </TimelineTags>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })
              ) : (
                education.map((item) => {
                  const [ref, inView] = useInView({
                    threshold: 0.1,
                    triggerOnce: true
                  })
                  
                  return (
                    <TimelineItem 
                      key={item.id} 
                      position={item.position}
                      ref={ref}
                      initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                      transition={{ duration: 0.6 }}
                    >
                      <TimelineDot position={item.position} />
                      <TimelineContent>
                        <TimelineHeader position={item.position}>
                          <TimelineIcon position={item.position}>
                            {item.icon}
                          </TimelineIcon>
                        </TimelineHeader>
                        
                        <TimelineTitle>{item.title}</TimelineTitle>
                        <TimelineSubtitle>{item.institution}</TimelineSubtitle>
                        
                        <TimelineMeta>
                          <div>
                            <FaCalendarAlt />
                            <span>{item.date}</span>
                          </div>
                          
                          <div>
                            <FaMapMarkerAlt />
                            <span>{item.location}</span>
                          </div>
                        </TimelineMeta>
                        
                        <TimelineText>{item.description}</TimelineText>
                        
                        <TimelineTags position={item.position}>
                          {item.tags.map((tag, index) => (
                            <TimelineTag key={index}>{tag}</TimelineTag>
                          ))}
                        </TimelineTags>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })
              )}
            </Timeline>
          </ExperienceContent>
        </ExperienceSection>
        
        <CertificatesSection>
          <SectionTitle 
            title="Certificaciones" 
            subtitle="Cursos y certificaciones que he completado para mejorar mis habilidades"
          />
          
          <CertificatesContent>
            <CertificatesGrid>
              {certificates.map((cert, index) => {
                const [ref, inView] = useInView({
                  threshold: 0.1,
                  triggerOnce: true
                })
                
                return (
                  <CertificateCard
                    key={cert.id}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CertificateIcon>
                      <FaCertificate />
                    </CertificateIcon>
                    
                    <CertificateTitle>{cert.title}</CertificateTitle>
                    <CertificateIssuer>{cert.issuer}</CertificateIssuer>
                    
                    <CertificateDate>
                      <FaCalendarAlt />
                      <span>{cert.date}</span>
                    </CertificateDate>
                    
                    <CertificateButton href={cert.link} target="_blank" rel="noopener noreferrer">
                      Ver Certificado
                    </CertificateButton>
                  </CertificateCard>
                )
              })}
            </CertificatesGrid>
          </CertificatesContent>
        </CertificatesSection>
      </ExperienceContainer>
    </PageTransition>
  )
}

export default Experience