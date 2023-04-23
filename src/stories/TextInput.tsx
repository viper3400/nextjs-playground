import { useEffect, useRef, useState } from "react";

interface TextInputProps {
    label: string;
    password?: boolean;
    setFocus?: boolean
    /**
     * Optional parameter for data-test attribute.
     * Will be the label, if empty. 
     */
    dataTestAttribute?: string;
}
/**
 * Primary UI Component for user to enter text input
 * @returns
 */
export const TextInput = ({
    label,
    password = false,
    dataTestAttribute = label,
    setFocus = false
}: TextInputProps) => {
    const [inputFocused, setInputFocused ] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current && setFocus) {
          inputRef.current.focus();
        }
      }, []);

    return (
        <>
          <div className="flex flex-col space-y-2 p-2">
            <div>
              <div 
                className={`transition duration-700 text-sm ${
                    inputFocused ? 'text-black' : 'text-slate-400'
                  }`}
                data-test={dataTestAttribute + "_label"}
                >
                {label}
              </div>
            </div>
            <div>
              <input 
                type={password ? 'password' : 'text'} 
                className="w-full p-1 border-b-2 outline-none transition duration-700 border-slate-200 focus:border-blue-500"
                data-test={dataTestAttribute + "_input"}
                ref={inputRef}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />    
            </div>
          </div>
        </>
    )
}