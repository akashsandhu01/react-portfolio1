/* eslint-disable no-unused-vars */
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const[LetterClass, setLetterClass] = useState('text-animate');
    const myName = ("I am Akash,").split('');
    const myName2 = ("Your Next Web Dev").split('');
    const skill=("Front-End Developer | React JS | Next JS | Tailwind | SCSS").split('');

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      },3000)
    })

  return (
    <div className='home-page'>
        <div className='home-content'>
                <AnimatedLetters letterClass={LetterClass} idx ={1} strArray={myName} /><br />
                <AnimatedLetters letterClass={LetterClass} idx ={myName.length} strArray={myName2} />

                <div className='my-info'>
                  <AnimatedLetters letterClass={LetterClass} idx={parseInt(myName.length)+parseInt(myName2.length)} strArray={skill} />
                </div>
                <Link to="/contact" className='contact-btn' >Contact</Link>
        </div>
    </div>
  )
}
