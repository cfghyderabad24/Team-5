import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <section id='contact-us'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-row mb-20'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left uppercase text-brightRed'>
            ABOUT US
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          At CRY (Child Rights and You), we champion the rights of underprivileged children in India. Since 1979, we've been dedicated to ensuring every child has access to education, healthcare, and protection from exploitation. Through advocacy, grassroots efforts, and community engagement, we strive to create a society where every child can thrive. Join us in making a lasting impact on children's lives across the country. Together, we can build a brighter future.

          </p>
          <div className="flex flex-col items-center md:items-start space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-brightRed" />
              <span className="text-darkGrayishBlue">+91 9115 9115 00</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-brightRed" />
              <a href="mailto:sstax9646@gmail.com"><span className="text-darkGrayishBlue">cryinfo.mum@crymail.org</span></a>
            </div>
            <div className="flex items-top space-x-2">
              <FaMapMarkerAlt className="text-brightRed" />
              <span className="text-darkGrayishBlue">189/A Anand Estate,
Diagonally Opposite Arthur Road Jail,
Sane Guruji Marg, Mumbai – 400011</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="md:w-1/2">
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.776937413812!2d72.8313635!3d18.985456199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5efb8dfa07%3A0x4b47ae929befb811!2sChild%20Rights%20and%20You!5e0!3m2!1sen!2sin!4v1719083402672!5m2!1sen!2sin"               
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

/* Add this CSS to your stylesheets */
<style jsx>{`
  .map-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 aspect ratio (height: 9/16 = 0.5625) */
  }

  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`}</style>
