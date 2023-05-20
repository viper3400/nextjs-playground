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
   * Optional click handler
   */
   onClick?: () => void;
}

export const LoginForm = ({
  dialogTitle = 'Welcome, please log in',
  usernameLabel = 'Username',
  passwordLabel = 'Password',
  logInButtonLabel = 'Log In',
  ...props
}: LoginFormProps) => {

  return (
    <>
      <div className="rounded-lg md:w-3/5 md:border md:m-4 p-4">
        <div className="text-2xl text-slate-700 pb-8 pl-2">{dialogTitle}</div>
        <TextInput setFocus label={ usernameLabel } data-test="username-input" />
        <TextInput label={ passwordLabel } password data-test="password-input" />
        <div className="flex flex-row-reverse pt-8 pr-2 gap-2">
          <JaxxButton noUpperCaseLabel= { false } label={ logInButtonLabel } primary { ...props } data-test="sign-in-button" />
        </div>
      </div>
    </>
  )
}