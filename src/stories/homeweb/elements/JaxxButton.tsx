import React from 'react'
import { PrimaryColor, SecondaryColor } from '../DefaultClasses'

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
   * Disable upper case label
   */
  noUpperCaseLabel: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button type
   */
  type: 'button' | 'submit' | 'reset' | undefined;
}

/**
 * Primary UI component for user interaction
 */
export const JaxxButton = ({
  primary = false,
  type = 'button',
  label,
  noUpperCaseLabel,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? PrimaryColor : SecondaryColor
  return (
    <button
      type={ type }
      className={ `${mode} p-2 px-8` }
      { ...props }
    >
      {noUpperCaseLabel ? label : label.toLocaleUpperCase()}
    </button>
  )
}
