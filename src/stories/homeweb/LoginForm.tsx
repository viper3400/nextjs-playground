import { useState } from 'react'
import { LoginCredentials } from '@/lib/types'
import { TextInput } from './elements/TextInput'
import { JaxxButton } from './elements/JaxxButton'

interface LoginFormProps {
  /**
   * Title that will be displayed at the top of the dialog
   */
  dialogTitle: string
  /**
   * Caption for username field
   */
  usernameLabel: string
  /**
   * Caption for password field
   */
  passwordLabel: string
  /**
   * Caption for log in button
   */
  logInButtonLabel: string,
  /**
  * onSubmit handler
  */
  onSubmit: (formData: LoginCredentials) => void;
}

export const LoginForm = ({
  dialogTitle = 'Welcome, please log in',
  usernameLabel = 'Username',
  passwordLabel = 'Password',
  logInButtonLabel = 'Log In',
  onSubmit,
  ...props
}: LoginFormProps) => {

  const [formData, setFormData] = useState<LoginCredentials>({
    username: '',
    password: '',
    group: 'VG_Default'
  })

  const handleInputChange = (inputName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputName]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Perform login logic using formData
    // Raise the onSubmit event with the form data
    onSubmit(formData)
  }

  return (
    <>
      <div className="rounded-lg md:border md:m-4 p-4">
        <form onSubmit={ handleSubmit }>
          <div className="text-2xl text-slate-700 pb-8 pl-2">{dialogTitle}</div>
          <TextInput
            classNames='p-4'
            setFocus
            label={ usernameLabel }
            content={ formData.username }
            onChange={ handleInputChange }
            inputName="username"
            data-test="username-input" />
          <TextInput
            classNames='p-4'
            label={ passwordLabel }
            password
            content={ formData.password }
            onChange={ handleInputChange }
            inputName="password"
            data-test="password-input" />
          <div className="flex flex-row-reverse pt-8 pr-2 gap-2">
            <JaxxButton
              noUpperCaseLabel={ false }
              label={ logInButtonLabel }
              primary { ...props }
              type="submit"
              data-test="sign-in-button" />
          </div>
        </form>
      </div>
    </>
  )
}