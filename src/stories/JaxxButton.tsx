import React from 'react';
import { PrimaryColor, SecondaryColor } from './DefaultClasses';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const JaxxButton = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? PrimaryColor : SecondaryColor;
  return (
    <button
      type="button"
      className={`${mode} p-2`}
      {...props}
    >
      {label}
    </button>
  );
};
