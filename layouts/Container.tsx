import React from 'react';
import css from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ContainerFluid: React.FC<ContainerProps> = ({ children, className, style }) => {
  return (
    <div className={`${className} ${css.containerFluid}`} style={style}>
      {children}
    </div>
  );
};

const BoundedContainer: React.FC<ContainerProps> = ({ children, className, style }) => {
  return (
    <div className={`${className} ${css.boundedContainer}`} style={style}>
      {children}
    </div>
  );
};

const Container: React.FC<ContainerProps> = ({ children, className, style }) => {
  return (
    <div className={`${className} ${css.container}`} style={style}>
      {children}
    </div>
  );
};

export { ContainerFluid, BoundedContainer, Container };
