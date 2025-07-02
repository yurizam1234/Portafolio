import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

// Importamos iconos
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const ContactContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`

const ContactSection = styled.section`
  padding: 5rem 0;
`

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ContactText = styled.div`
  margin-bottom: 2rem;
`

const ContactDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const ContactIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  font-size: 1.5rem;
  flex-shrink: 0;
`

const ContactInfoContent = styled.div`
  flex: 1;
`

const ContactInfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`

const ContactInfoText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
`

const ContactInfoLink = styled.a`
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: white;
  color: var(--text-color);
  border-radius: 50%;
  font-size: 1.2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const ContactForm = styled(motion.form)`
  background-color: white;
  padding: 2.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
`

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  background-color: #f9f9f9;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #2a2a2a;
    border-color: #444;
    color: white;
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  background-color: #f9f9f9;
  transition: var(--transition);
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #2a2a2a;
    border-color: #444;
    color: white;
  }
`

const FormButton = styled(motion.button)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: #5a52e0;
  }
  
  &:disabled {
    background-color: #a8a8a8;
    cursor: not-allowed;
  }
`

const FormMessage = styled.div`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  font-size: 0.95rem;
  background-color: ${props => props.success ? '#e7f9ed' : '#ffebee'};
  color: ${props => props.success ? '#00a550' : '#f44336'};
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.success ? 'rgba(0, 165, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
  }
`

const MapSection = styled.section`
  padding: 5rem 0;
  background-color: #f9f9f9;
  
  @media (prefers-color-scheme: dark) {
    background-color: #161616;
  }
`

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const MapFrame = styled(motion.div)`
  width: 100%;
  height: 450px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: ''
    })
    
    // Simulamos el envío del formulario
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        message: '¡Gracias por tu mensaje! Te contactaré pronto.'
      })
      
      // Limpiamos el formulario
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }
  
  // Animaciones con react-intersection-observer
  const [formRef, formInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [mapRef, mapInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [infoRef1, infoInView1] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [infoRef2, infoInView2] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [infoRef3, infoInView3] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  return (
    <PageTransition>
      <ContactContainer>
        <ContactSection>
          <SectionTitle 
            title="Contacto" 
            subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
          />
          
          <ContactContent>
            <ContactGrid>
              <ContactInfo>
                <ContactText>
                  <ContactDescription>
                    Estoy interesada en oportunidades de trabajo freelance y colaboraciones en proyectos. 
                    Si tienes alguna pregunta o propuesta, no dudes en contactarme utilizando el formulario 
                    o a través de mis datos de contacto.
                  </ContactDescription>
                </ContactText>
                
                <ContactInfoItem
                  ref={infoRef1}
                  initial={{ opacity: 0, y: 30 }}
                  animate={infoInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  <ContactIconWrapper>
                    <FaEnvelope />
                  </ContactIconWrapper>
                  
                  <ContactInfoContent>
                    <ContactInfoTitle>Email</ContactInfoTitle>
                    <ContactInfoText>
                      <ContactInfoLink href="mailto:susana.rodriguez@example.com">
                        susana.rodriguez@example.com
                      </ContactInfoLink>
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem
                  ref={infoRef2}
                  initial={{ opacity: 0, y: 30 }}
                  animate={infoInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <ContactIconWrapper>
                    <FaPhone />
                  </ContactIconWrapper>
                  
                  <ContactInfoContent>
                    <ContactInfoTitle>Teléfono</ContactInfoTitle>
                    <ContactInfoText>
                      <ContactInfoLink href="tel:+525512345678">
                        +52 55 1234 5678
                      </ContactInfoLink>
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem
                  ref={infoRef3}
                  initial={{ opacity: 0, y: 30 }}
                  animate={infoInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ContactIconWrapper>
                    <FaMapMarkerAlt />
                  </ContactIconWrapper>
                  
                  <ContactInfoContent>
                    <ContactInfoTitle>Ubicación</ContactInfoTitle>
                    <ContactInfoText>
                      Ciudad de México, México
                    </ContactInfoText>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <SocialLinks>
                  <SocialLink 
                    href="https://linkedin.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                  </SocialLink>
                  
                  <SocialLink 
                    href="https://github.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </SocialLink>
                  
                  <SocialLink 
                    href="https://twitter.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter />
                  </SocialLink>
                </SocialLinks>
              </ContactInfo>
              
              <ContactForm 
                ref={formRef}
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
              >
                <FormGroup>
                  <FormLabel htmlFor="name">Nombre</FormLabel>
                  <FormInput 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formState.email}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="subject">Asunto</FormLabel>
                  <FormInput 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formState.subject}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="message">Mensaje</FormLabel>
                  <FormTextarea 
                    id="message" 
                    name="message" 
                    value={formState.message}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormButton 
                  type="submit" 
                  disabled={formStatus.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formStatus.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                </FormButton>
                
                {formStatus.submitted && (
                  <FormMessage success={formStatus.success}>
                    {formStatus.message}
                  </FormMessage>
                )}
              </ContactForm>
            </ContactGrid>
          </ContactContent>
        </ContactSection>
        
        <MapSection>
          <MapContainer>
            <MapFrame
              ref={mapRef}
              initial={{ opacity: 0, y: 50 }}
              animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661913905089!2d-99.16869708509426!3d19.427023546029434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1651000000000!5m2!1ses-419!2smx" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              />
            </MapFrame>
          </MapContainer>
        </MapSection>
      </ContactContainer>
    </PageTransition>
  )
}

export default Contact