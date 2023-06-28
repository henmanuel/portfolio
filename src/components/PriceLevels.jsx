import React from 'react';

const PriceLevels = ({ priceLevels }) => {
  return (
    <div className="pricing-levels" style={{ display: 'flex', justifyContent: 'space-around', color: 'white'}}>
      {priceLevels.plans.map((level, i) => (
        <div key={i} className="pricing-level" style={{ backgroundColor: '#004AAD', padding: '20px', borderRadius: '10px', width: '30%', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '24px' }}>{level.title}</h3>
          <h4 style={{ fontSize: '20px' }}>${level.description}</h4>
          <ul style={{ listStyle: 'none' }}>
            {level.features.map((feature, j) => (
              <li key={j} style={{ marginBottom: '10px' }}>{feature}</li>
            ))}
          </ul>
          <h4 style={{ fontSize: '20px' }}>{level.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default PriceLevels;
