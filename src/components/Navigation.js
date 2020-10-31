import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../App'

function Navigation() {
    const handleSelect = (eventKey) => alert(`selected${eventKey}`) 

    return (
        <Navbar className='justify-content-around' onSelect={handleSelect} >
            <Nav variant='pills ' defaultActiveKey='/home'>
                <Nav.Item>
                    <Nav.Link eventKey='/home'><strong>Home</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='/projects' ><strong>Projects</strong></Nav.Link></Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='/contact' ><strong>Contact</strong></Nav.Link>
                </Nav.Item>
            </Nav>  
        </Navbar>
    )
}

export default Navigation
