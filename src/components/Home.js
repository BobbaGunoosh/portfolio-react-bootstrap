import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../App'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
import Projects from './Projects'

function Home() {
const [visibleComponent, setVisibleComponent] = useState(<About />)
    return (
        <section className='hero'>
           <Navigation setVisibleComponent />
           <h1 className="hero-title">Hi. I'm <span>Joey</span></h1> 
            <p className="hero_sub text-muted">This is where I will give a brief description about myself. Try to keep it to two sentences.</p>
            <About />
            <Projects />
            <Contact />
            <Container>{setVisibleComponent}</Container>
        </section>
    )
}

export default Home
