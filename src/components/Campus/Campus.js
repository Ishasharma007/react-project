import React from 'react'
import "./Campus.css"

const Campus = () => {
  return (
    <section className='campus'>
        <h1>
            Our Global Campus
        </h1>
        <p>
          Embark on a journey of knowledge across our global campuses.
        </p>
        <div className='row'>
            <div className='campus-col'>
                <img src='/images/landon.png' alt='landon'/>
                <div className='layer'>
                    <h3>LONDON</h3>
                </div>

            </div>
            <div className='campus-col'>
                <img src='/images/washington.png' alt='washington'/>
                  <div className="layer">
                      <h3>WASHINGTON</h3>
                  </div>
            </div>


        </div>

    </section>
  )
}

export default Campus