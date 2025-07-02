import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoaderText = styled(motion.h1)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
  font-weight: 600;
`

const LoaderCircle = styled(motion.div)`
  width: 80px;
  height: 80px;
  border: 4px solid rgba(108, 99, 255, 0.2);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
`

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContent>
        <LoaderText
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Susana Rodriguez
        </LoaderText>
        <LoaderCircle
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </LoaderContent>
    </LoaderContainer>
  )
}

export default Loader