import React from 'react';
import blancoPng from '../assets/blanco png.png';
import negroPng from '../assets/negro png.png';
import moradoPng from '../assets/morado png.png';
import moradoPng2 from '../assets/morado png.png';

interface LogoProps {
  variant?: 'white' | 'black' | 'purple' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ variant = 'auto', size = 'md', className = '' }: LogoProps) {
  const getLogoSource = () => {
    switch (variant) {
      case 'white':
        return blancoPng;
      case 'black':
        return negroPng;
      case 'purple':
        return moradoPng2;
      case 'auto':
      default:
        return moradoPng; // Por defecto usamos el morado
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'lg':
        return 'w-16 h-16';
      case 'xl':
        return 'w-20 h-20';
      case 'md':
      default:
        return 'w-12 h-12';
    }
  };

  return (
    <img
      src={getLogoSource()}
      alt="Levelpro Logo"
      className={`${getSizeClasses()} object-contain transition-all duration-300 ${className}`}
    />
  );
}

// Componente de logo inteligente que detecta el fondo
interface SmartLogoProps {
  backgroundColor?: 'light' | 'dark' | 'purple' | 'transparent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function SmartLogo({ backgroundColor = 'light', size = 'md', className = '' }: SmartLogoProps) {
  const getVariant = () => {
    switch (backgroundColor) {
      case 'dark':
        return 'white';
      case 'purple':
        return 'white';
      case 'transparent':
        return 'white';
      case 'light':
      default:
        return 'purple';
    }
  };

  return (
    <Logo
      variant={getVariant()}
      size={size}
      className={className}
    />
  );
}
