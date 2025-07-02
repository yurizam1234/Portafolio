import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Card = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--text-color);
`

const CardDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
  
  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

const CardButton = styled.a`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    background-color: #5a52e0;
    transform: translateY(-2px);
  }
`

const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const CardTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  
  @media (prefers-color-scheme: dark) {
    background-color: rgba(108, 99, 255, 0.2);
  }
`

const AnimatedCard = ({ image, title, description, link, tags, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <Card
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: delay * 0.2, ease: "easeOut" }}
    >
      {image && (
        <CardImage>
          <img src={image} alt={title} />
        </CardImage>
      )}
      
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        <CardFooter>
          {link && (
            <CardButton href={link} target="_blank" rel="noopener noreferrer">
              Ver más
            </CardButton>
          )}
          
          {tags && tags.length > 0 && (
            <CardTags>
              {tags.map((tag, index) => (
                <CardTag key={index}>{tag}</CardTag>
              ))}
            </CardTags>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default AnimatedCard