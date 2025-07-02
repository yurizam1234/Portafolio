import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

// Importamos iconos para las habilidades
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGitAlt, FaFigma, FaUsers, FaLightbulb,
  FaClock, FaComments, FaChartLine, FaBrain
} from 'react-icons/fa'

const SkillsContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`

const SkillsSection = styled.section`
  padding: 5rem 0;
`

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const SkillCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: var(--transition);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.color || 'var(--primary-color)'};
  margin-bottom: 1.5rem;
`

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`

const SkillDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const ProgressSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
  
  @media (prefers-color-scheme: dark) {
    background-color: #161616;
  }
`

const ProgressContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const ProgressItem = styled(motion.div)`
  margin-bottom: 2rem;
`

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`

const ProgressTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-color);
`

const ProgressPercentage = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-color);
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  
  @media (prefers-color-scheme: dark) {
    background-color: #2a2a2a;
  }
`

const ProgressFill = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.color || 'var(--primary-color)'};
  border-radius: 4px;
  width: ${props => props.percentage}%;
`

const Skills = () => {
  // Datos de habilidades técnicas
  const technicalSkills = [
    {
      icon: <FaHtml5 />,
      title: 'HTML5',
      description: 'Dominio de la estructura semántica y las mejores prácticas para crear sitios web accesibles y bien organizados.',
      color: '#E44D26'
    },
    {
      icon: <FaCss3Alt />,
      title: 'CSS3',
      description: 'Conocimiento avanzado de estilos, animaciones, diseño responsivo y frameworks como Bootstrap y Tailwind CSS.',
      color: '#264DE4'
    },
    {
      icon: <FaJs />,
      title: 'JavaScript',
      description: 'Experiencia en programación con JavaScript moderno (ES6+), manipulación del DOM y consumo de APIs.',
      color: '#F7DF1E'
    },
    {
      icon: <FaReact />,
      title: 'React',
      description: 'Desarrollo de aplicaciones web interactivas utilizando React, manejo de estado con hooks y context API.',
      color: '#61DAFB'
    },
    {
      icon: <FaNodeJs />,
      title: 'Node.js',
      description: 'Conocimientos básicos de desarrollo backend con Node.js y Express para crear APIs y servicios web.',
      color: '#339933'
    },
    {
      icon: <FaDatabase />,
      title: 'Bases de Datos',
      description: 'Experiencia con bases de datos relacionales (MySQL) y no relacionales (MongoDB) para almacenamiento de datos.',
      color: '#4479A1'
    },
    {
      icon: <FaGitAlt />,
      title: 'Control de Versiones',
      description: 'Uso de Git y GitHub para el control de versiones, colaboración en equipo y gestión de proyectos.',
      color: '#F05032'
    },
    {
      icon: <FaFigma />,
      title: 'Diseño UI/UX',
      description: 'Conocimientos de diseño de interfaces y experiencia de usuario utilizando herramientas como Figma.',
      color: '#F24E1E'
    }
  ]
  
  // Datos de habilidades blandas
  const softSkills = [
    {
      icon: <FaUsers />,
      title: 'Trabajo en Equipo',
      description: 'Capacidad para colaborar eficazmente en equipos multidisciplinarios, aportando ideas y respetando las opiniones de los demás.',
      color: '#6C63FF'
    },
    {
      icon: <FaLightbulb />,
      title: 'Resolución de Problemas',
      description: 'Habilidad para analizar situaciones complejas y encontrar soluciones creativas y eficientes.',
      color: '#FFD700'
    },
    {
      icon: <FaClock />,
      title: 'Gestión del Tiempo',
      description: 'Organización efectiva de tareas y proyectos, estableciendo prioridades y cumpliendo con los plazos establecidos.',
      color: '#00BFA6'
    },
    {
      icon: <FaComments />,
      title: 'Comunicación',
      description: 'Excelentes habilidades de comunicación verbal y escrita, capacidad para explicar conceptos técnicos de manera clara.',
      color: '#F50057'
    },
    {
      icon: <FaChartLine />,
      title: 'Adaptabilidad',
      description: 'Flexibilidad para adaptarse a nuevos entornos, tecnologías y metodologías de trabajo en un campo en constante evolución.',
      color: '#FF6B6B'
    },
    {
      icon: <FaBrain />,
      title: 'Aprendizaje Continuo',
      description: 'Pasión por el aprendizaje constante y la actualización de conocimientos en nuevas tecnologías y tendencias.',
      color: '#9C27B0'
    }
  ]
  
  // Datos de progreso de habilidades
  const progressSkills = [
    { name: 'HTML5', percentage: 90, color: '#E44D26' },
    { name: 'CSS3', percentage: 85, color: '#264DE4' },
    { name: 'JavaScript', percentage: 75, color: '#F7DF1E' },
    { name: 'React', percentage: 70, color: '#61DAFB' },
    { name: 'Node.js', percentage: 60, color: '#339933' },
    { name: 'SQL', percentage: 65, color: '#4479A1' },
    { name: 'Git', percentage: 80, color: '#F05032' },
    { name: 'UI/UX Design', percentage: 75, color: '#F24E1E' }
  ]
  
  return (
    <PageTransition>
      <SkillsContainer>
        <SkillsSection>
          <SectionTitle 
            title="Habilidades Técnicas" 
            subtitle="Conocimientos y tecnologías que domino en el desarrollo web"
          />
          
          <SkillsContent>
            <SkillsGrid>
              {technicalSkills.map((skill, index) => {
                const [ref, inView] = useInView({
                  threshold: 0.1,
                  triggerOnce: true
                })
                
                return (
                  <SkillCard
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillIcon color={skill.color}>
                      {skill.icon}
                    </SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillDescription>{skill.description}</SkillDescription>
                  </SkillCard>
                )
              })}
            </SkillsGrid>
          </SkillsContent>
        </SkillsSection>
        
        <ProgressSection>
          <SectionTitle 
            title="Nivel de Experiencia" 
            subtitle="Mi nivel de dominio en diferentes tecnologías y herramientas"
          />
          
          <ProgressContent>
            <ProgressGrid>
              {progressSkills.map((skill, index) => {
                const [ref, inView] = useInView({
                  threshold: 0.1,
                  triggerOnce: true
                })
                
                return (
                  <ProgressItem
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProgressHeader>
                      <ProgressTitle>{skill.name}</ProgressTitle>
                      <ProgressPercentage>{skill.percentage}%</ProgressPercentage>
                    </ProgressHeader>
                    <ProgressBar>
                      <ProgressFill 
                        color={skill.color}
                        percentage={0}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </ProgressBar>
                  </ProgressItem>
                )
              })}
            </ProgressGrid>
          </ProgressContent>
        </ProgressSection>
        
        <SkillsSection>
          <SectionTitle 
            title="Habilidades Blandas" 
            subtitle="Competencias personales que complementan mis conocimientos técnicos"
          />
          
          <SkillsContent>
            <SkillsGrid>
              {softSkills.map((skill, index) => {
                const [ref, inView] = useInView({
                  threshold: 0.1,
                  triggerOnce: true
                })
                
                return (
                  <SkillCard
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillIcon color={skill.color}>
                      {skill.icon}
                    </SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillDescription>{skill.description}</SkillDescription>
                  </SkillCard>
                )
              })}
            </SkillsGrid>
          </SkillsContent>
        </SkillsSection>
      </SkillsContainer>
    </PageTransition>
  )
}

export default Skills