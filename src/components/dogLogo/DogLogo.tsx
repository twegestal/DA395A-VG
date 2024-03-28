import { Image } from '@chakra-ui/react';
import { useState } from 'react';
import logo from '../../assets/dog.webp';
import './dogLogo.style.css';

export const DogLogo = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div className={`logo-container ${isSpinning ? 'spinning' : ''}`} onClick={handleSpin}>
      <Image src={logo} blockSize={20} />
    </div>
  );
};
