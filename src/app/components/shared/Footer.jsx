import React from 'react'
import { FaUtensils } from 'react-icons/fa'
import Container from '../Container'

const Footer = () => {
    return (

        <div className='bg-base-200'>
            <Container>
                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                    <aside>
                        <div className="w-12 h-12 rounded-lg bg-primary text-primary-content flex items-center justify-center">
                            <FaUtensils size={22} />
                        </div>
                        <p>
                            The Golden Apron
                            <br />
                            Excellence in every bite
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </Container>
        </div>
    )
}

export default Footer