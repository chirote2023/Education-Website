import React from "react"
import Heading from "../../common/heading/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SmarTech Education' title='Best Online Education Expertise' />
            <p>Looking to master the most in-demand tech skills? Join our upcoming offline course in Bhopal and gain expertise in C, C++, R, Java + DSA, Python, Web Development, App Development, and Data Science.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero