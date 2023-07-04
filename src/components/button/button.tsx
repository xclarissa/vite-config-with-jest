import React from 'react'

interface ButtonCurrentProps {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrentProps) => {
  return <button style={{ margin: '5px' }} {...props}>Clique</button>;
};

export default Button