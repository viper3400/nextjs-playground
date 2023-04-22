'use client'

import { MouseEventHandler } from 'react';

interface ButtonProperties {
    label: string,
    disabled: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const JaxxButton = ({ label, disabled, onClick } : ButtonProperties) => {

    return (
        <button 
          className=
          "border rounded-lg shadow-lg enabled:text-gray-50 enabled:bg-sky-500 text-gray-400 px-8 py-4 text-lg bg-slate-200"
          onClick={onClick}
          disabled={disabled}
          >
            {label}
        </button>
    )
}