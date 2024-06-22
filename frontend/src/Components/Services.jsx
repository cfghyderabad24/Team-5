import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import avatarAnisha from '../assets/images/sc1.png';
import avatarAli from '../assets/images/sc2.png';
import avatarRichard from '../assets/images/sc3.png';
import newAvatar from '../assets/images/sc4.png';

const Testimonial = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  const handleGetStartedClick = () => {
    // Redirect to WhatsApp with the specified phone number and message
    window.open('https://wa.me/+919115911500?text=Hello CRY!', '_blank');
  };

  return (
    <section id='services' className="bg-gray-100 py-20">
      <div className='max-w-6xl px-5 mx-auto text-center'>
        <h2 className='text-4xl uppercase font-bold mb-12'>
          <span className='text-brightRed'>SERVICES WE PROVIDE</span> AT CRY
        </h2>
        <div className='flex flex-col md:flex-row md:space-x-6'>
          {/* Service 1 */}
          <div className={`service-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 0 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={avatarAnisha} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>Child Protection Services</h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 0 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Prevention of Child Labor
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Protection from Child Abuse
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Prevention of Child Trafficking
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 0 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(0)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(0)}>
                  Read More
                </button>
              )}
            </div>
          </div>

          {/* Service 2 */}
          <div className={`service-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 1 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={avatarAli} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>Education Support And Services</h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 1 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> School Enrollment Assistance</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Educational Materials Provision</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Extracurricular Activities</li>
              </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 1 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(1)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(1)}>
                  Read More
                </button>
              )}
            </div>
          </div>

          {/* Service 3 */}
          <div className={`service-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 2 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={avatarRichard} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>Healthcare Initiatives </h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 2 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Immunization Programs</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Health Check-ups</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Nutritional Support</li>
              </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 2 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(2)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(2)}>
                  Read More
                </button>
              )}
            </div>
          </div>

          {/* Service 4 */}
          <div className={`service-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 3 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={newAvatar} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>Community Development</h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 3 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Livelihood Training</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Women Empowerment</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> Disaster Preparedness</li>
              </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 3 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(3)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(3)}>
                  Read More
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link
            to="/GetInvolved"
            className="bg-brightRed text-black font-semibold py-2 px-4 rounded hover:bg-brightRedLight transition duration-300 ease-in-out"
          >
            Get Involved
          </Link>
          <button
            onClick={handleGetStartedClick}
            className="ml-4 bg-brightRed text-black font-semibold py-2 px-4 rounded hover:bg-brightRedLight transition duration-300 ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
