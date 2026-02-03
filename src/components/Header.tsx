import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export default function Header() {
    return (
        <header>
            <h1 className="header-name">AZIZUR RAHAMAN</h1>
            <div className="header-contact">
                <span className="contact-item">
                    <MapPin size={14} />
                    Dhaka District, Bangladesh
                </span>
                <span className="contact-separator">|</span>
                <a href="mailto:frazizur.rahaman@gmail.com" className="contact-item">
                    <Mail size={14} />
                    frazizur.rahaman@gmail.com
                </a>
                <span className="contact-separator">|</span>
                <a href="tel:+8801862900625" className="contact-item">
                    <Phone size={14} />
                    +880-186-290-0625
                </a>
                <span className="contact-separator">|</span>
                <a
                    href="https://linkedin.com/in/azizur_rahaman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                >
                    <Linkedin size={14} />
                    in/azizur_rahaman
                </a>
                <span className="contact-separator">|</span>
                <a
                    href="https://github.com/azizur-rahaman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                >
                    <Github size={14} />
                    github.com/azizur-rahaman
                </a>
                <span className="contact-separator">|</span>
                <a
                    href="https://azizurrahaman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                >
                    <Globe size={14} />
                    azizurrahaman.com
                </a>
            </div>
        </header>
    );
}
