import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaLaptopCode, FaBriefcase, FaEnvelope } from 'react-icons/fa'

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: var(--transition);
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.scrolled ? 'rgba(18, 18, 18, 0.95)' : 'transparent'};
  }
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  
  span {
    color: var(--secondary-color);
  }
`

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.li)`
  position: relative;
  
  a {
    color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
    font-weight: ${props => props.active ? '600' : '500'};
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: var(--primary-color);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover::after {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: var(--background-color);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  z-index: 200;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark-background);
  }
`

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`

const MobileNavLink = styled(motion.li)`
  a {
    color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
    font-weight: ${props => props.active ? '600' : '500'};
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.1rem;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
  backdrop-filter: blur(3px);
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Cerrar el menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location])
  
  const navItems = [
    { path: '/', name: 'Inicio', icon: <FaHome /> },
    { path: '/about', name: 'Sobre Mí', icon: <FaUser /> },
    { path: '/skills', name: 'Habilidades', icon: <FaCode /> },
    { path: '/projects', name: 'Proyectos', icon: <FaLaptopCode /> },
    { path: '/experience', name: 'Experiencia', icon: <FaBriefcase /> },
    { path: '/contact', name: 'Contacto', icon: <FaEnvelope /> },
  ]
  
  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Susana<span>R</span>
        </Logo>
        
        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink 
              key={item.path}
              active={location.pathname === item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link to={item.path}>
                {item.name}
              </Link>
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsOpen(true)}>
          <FaBars />
        </MobileMenuButton>
        
        <AnimatePresence>
          {isOpen && (
            <>
              <Overlay 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              
              <MobileMenu
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <CloseButton onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </CloseButton>
                
                <MobileNavLinks>
                  {navItems.map((item, index) => (
                    <MobileNavLink 
                      key={item.path}
                      active={location.pathname === item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={item.path}>
                        {item.icon}
                        {item.name}
                      </Link>
                    </MobileNavLink>
                  ))}
                </MobileNavLinks>
              </MobileMenu>
            </>
          )}
        </AnimatePresence>
      </NavContent>
    </NavContainer>
  )
}

export default Navbar