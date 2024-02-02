import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CompanyInformation = ({ title, icon, num ,plus }) => {
  const icon5 = <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#fe7f0c" }} />;
  const [incre, setincre] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // Trigger when 50% of the component is visible
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && incre < num) {
               setTimeout(() => {
                  setincre((prevIncre) => prevIncre + plus);
              }, 10);
        }
      }, options);

      
    if (componentRef.current) {
        observer.observe(componentRef.current);
        
    }
  
    return () => {
        observer.disconnect();
    };
  }, [incre,num ,plus]);
  

  return (
    <div ref={componentRef}>
      <div className='flex flex-row md:justify-center justify-start space-x-4 mr-2'>
        <div>
          <div>{icon}</div>
        </div>
        <div className='flex flex-col font-barlow'>
          <div className='flex space-x-2'>
            <h1 className='font-bold text-3xl'>{incre}</h1>
            {icon5}
          </div>
          <p className='font-medium'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
