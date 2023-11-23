'use client';

import React, { useState } from 'react';

interface HamburgerButtonProps {
  onClick?: () => void;
  className?: string;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  className,
}) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleButtonClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
    toggleLinks();
  };

  return (
    <div>
      <button onClick={handleButtonClick} className={className}>
        &#9776;
      </button>
    </div>
  );
};

export default HamburgerButton;
