import React from 'react'
import { FaUtensils } from 'react-icons/fa'
import Container from '../Container'
import Link from 'next/link'

const Footer = () => {
    return (

        <div className='bg-base-200'>
            <Container>
                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                    <aside>
                        <Link href="/" className="w-12 h-12 rounded-lg bg-primary text-primary-content flex items-center justify-center hover:opacity-90 transition-opacity">
                            <FaUtensils size={22} />
                        </Link>
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
                        <Link href="/story" className="link link-hover">About us</Link>
                        <Link href="/contact" className="link link-hover">Contact</Link>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link href="/terms" className="link link-hover">Terms of use</Link>
                        <Link href="/privacy" className="link link-hover">Privacy policy</Link>
                        <Link href="/cookies" className="link link-hover">Cookie policy</Link>
                    </nav>
                </footer>
            </Container>
        </div>
    )
}

export default Footer