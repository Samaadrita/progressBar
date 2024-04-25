import React, { useState, useEffect } from 'react';

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyle = {
    height: 18,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: '50',
  };

  const fillerStyle = {
    height: 18,
    width: `${completed}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        <span style={labelStyles}>{completed}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
