import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  color: var(--text-color);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 1.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const SectionTitle = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <TitleContainer ref={ref}>
      <Title
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </Title>
      
      {subtitle && (
        <Subtitle
          variants={subtitleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {subtitle}
        </Subtitle>
      )}
    </TitleContainer>
  )
}

export default SectionTitle