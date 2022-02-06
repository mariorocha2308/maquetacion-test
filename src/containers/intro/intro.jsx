import React, { useEffect, useState } from "react";
import ShellChair from '../../recursos/Silla negra.png'
import DunesBlack from '../../recursos/Mesa negra.png'
import { IntroStyle } from "./intro-style";
import { motion, useAnimation } from 'framer-motion/dist/es/index'
import { Link } from 'react-scroll'
import { useInView } from "react-intersection-observer";


const Intro = () => {

  const [active, setActive] = useState(true);
  const shellAnimation = useAnimation()
  const dunesAnimation = useAnimation()
  const [ shellRef, shellInView ] = useInView({ threshold: 1})
  const [dunesRef, dunesInView] = useInView({ threshold: 1})

  useEffect(() => {

    if (shellInView) {
      shellAnimation.start({opacity: 1, y: 0, transition: { duration: 1, }})
    }
    if (!shellInView) {
      shellAnimation.start({ opacity: 0, y: -40 })
    }

    if (dunesInView) {
      dunesAnimation.start({opacity: 1, y: 0, transition: { duration: 1, } })
    }
    if (!dunesInView) {
      dunesAnimation.start({ opacity: 0, y: 40 })
    }

  }, [shellInView, dunesInView]);
  
  return (
    <IntroStyle>

      <div className={`header ${active ? "active" : ""}`}>
        <label>mater</label>
        <div className="header-menu" onClick={() => setActive(!active)}>
          X
        </div>
      </div>

      {/* SE PUEDE REFACTORIZAR POR TERMINOS DE PRACTICIDAD NO LO QUISE IMPLEMENTAR*/}
      <div className='product-detail' id="shellChair" ref={shellRef}>
        <div>
          <motion.div className='detail-info' animate={shellAnimation}>
            <label className='detail-author'>
              Michael W.Dreeben
            </label>

            <h1 className='detail-title'>
              Shell Dining Chair
            </h1>

            <p className='detail-description'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aperian quos totam blanditis sapiente sit quasi non excepturi architecto dolorem?
            </p>
          </motion.div>

          <div>
            <button className='detail-button--send'>
              Product Details
            </button>
          </div>
        </div>

        <motion.div animate={shellAnimation}>
            <img src={ShellChair} alt="Shell Dining Chair" className='detail-img'/>
        </motion.div>
      </div>

      {/* SE PUEDE REFACTORIZAR POR TERMINOS DE PRACTICIDAD NO LO QUISE IMPLEMENTAR*/}
      <div className='product-detail' id='dunesBlack' ref={dunesRef}>
        <div>
          <motion.div className='detail-info' animate={dunesAnimation}>
            <label className='detail-author'>
              Jeaper K.Thomas
            </label>

            <h1 className='detail-title'>
              Dunes Anthrazine Black
            </h1>

            <p className='detail-description'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aperian quos totam blanditis sapiente sit quasi non excepturi architecto dolorem?
            </p>
          </motion.div>

          <div>
            <button className='detail-button--send'>
              Product Details
            </button>
          </div>
        </div> 

        <motion.div animate={dunesAnimation}>
            <img src={DunesBlack} alt="Shell Dining Chair" className='detail-img'/>
        </motion.div>
      </div>

      <nav className='navigation'>
        <Link activeClass='active' to="shellChair" smooth={true} className='navigation-ref' spy={true}>
          <label>01</label>
          <label>
            Shell Dining Chair
          </label>
        </Link>
        <Link activeClass='active' to="dunesBlack"  smooth={true} className='navigation-ref' spy={true}>
          <label>02</label>
          <label>
            Dunes Anthrazine Black
          </label>
        </Link>
      </nav>

    </IntroStyle>
  );
};

export default Intro;
