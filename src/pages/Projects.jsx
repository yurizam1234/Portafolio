import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'

// Importamos iconos
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa'

// Imágenes de proyectos (deberás reemplazarlas con imágenes reales)
const projectImages = {
  project1: '/src/assets/projects/project1.svg',
  project2: '/src/assets/projects/project2.svg',
  project3: '/src/assets/projects/project3.svg',
  project4: '/src/assets/projects/project4.svg',
  project5: '/src/assets/projects/project5.svg',
  project6: '/src/assets/projects/project6.svg',
}

const ProjectsContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`

const ProjectsSection = styled.section`
  padding: 5rem 0;
`

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`

const FilterButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(108, 99, 255, 0.1)'};
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition);
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  color: var(--primary-color);
  border-radius: 50%;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--text-color);
`

const ProjectDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
`

const ProjectTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  
  @media (prefers-color-scheme: dark) {
    background-color: rgba(108, 99, 255, 0.2);
  }
`

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`

const SearchInput = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  
  input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 3rem;
    border: 2px solid #e0e0e0;
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      background-color: #2a2a2a;
      border-color: #444;
      color: #f8f9fa;
    }
  }
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Datos de proyectos
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Tienda en línea completa con carrito de compras, sistema de pagos y panel de administración. Desarrollada con React, Node.js y MongoDB.',
      image: projectImages.project1,
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 2,
      title: 'App de Gestión de Tareas',
      description: 'Aplicación para organizar tareas y proyectos con funcionalidades de arrastrar y soltar, notificaciones y colaboración en equipo.',
      image: projectImages.project2,
      category: 'app',
      tags: ['React', 'Firebase', 'Redux'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 3,
      title: 'Dashboard Analítico',
      description: 'Panel de control con gráficos interactivos y visualización de datos en tiempo real para monitoreo de métricas empresariales.',
      image: projectImages.project3,
      category: 'web',
      tags: ['JavaScript', 'Chart.js', 'API'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 4,
      title: 'Aplicación de Clima',
      description: 'App que muestra el pronóstico del tiempo actual y de los próximos días utilizando la API de OpenWeatherMap.',
      image: projectImages.project4,
      category: 'app',
      tags: ['React Native', 'API', 'Geolocation'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 5,
      title: 'Portafolio Personal',
      description: 'Sitio web personal para mostrar proyectos y habilidades, con animaciones y diseño responsivo.',
      image: projectImages.project5,
      category: 'web',
      tags: ['React', 'Framer Motion', 'Styled Components'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 6,
      title: 'Blog de Tecnología',
      description: 'Plataforma de blog con sistema de gestión de contenidos, comentarios y autenticación de usuarios.',
      image: projectImages.project6,
      category: 'web',
      tags: ['React', 'Node.js', 'MySQL'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    }
  ]
  
  // Filtrar proyectos según la categoría seleccionada y el término de búsqueda
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesFilter && matchesSearch
  })
  
  return (
    <PageTransition>
      <ProjectsContainer>
        <ProjectsSection>
          <SectionTitle 
            title="Mis Proyectos" 
            subtitle="Una selección de los proyectos más destacados en los que he trabajado"
          />
          
          <ProjectsContent>
            <SearchContainer>
              <SearchInput>
                <FaSearch />
                <input 
                  type="text" 
                  placeholder="Buscar proyectos..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </SearchInput>
            </SearchContainer>
            
            <FilterContainer>
              <FilterButton 
                active={filter === 'all'}
                onClick={() => setFilter('all')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Todos
              </FilterButton>
              
              <FilterButton 
                active={filter === 'web'}
                onClick={() => setFilter('web')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Web
              </FilterButton>
              
              <FilterButton 
                active={filter === 'app'}
                onClick={() => setFilter('app')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Aplicaciones
              </FilterButton>
            </FilterContainer>
            
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                <ProjectsGrid>
                  {filteredProjects.map((project, index) => {
                    const [ref, inView] = useInView({
                      threshold: 0.1,
                      triggerOnce: true
                    })
                    
                    return (
                      <AnimatedCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        delay={index}
                      />
                    )
                  })}
                </ProjectsGrid>
              ) : (
                <NoResults>
                  No se encontraron proyectos que coincidan con tu búsqueda.
                </NoResults>
              )}
            </AnimatePresence>
          </ProjectsContent>
        </ProjectsSection>
      </ProjectsContainer>
    </PageTransition>
  )
}

export default Projects