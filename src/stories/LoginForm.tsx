import { TextInput } from "./TextInput"
import { Button } from "./Button";

export const LoginForm = () => {

    return (
        <>
          <div className="rounded-lg w-2/5 border m-4 p-4">
            <div className="text-2xl text-slate-700 pb-8 pl-2">Welcome, please log in</div>
            <TextInput setFocus label="Username" data-test="username-input" />
            <TextInput label="Password" password data-test="password-input" />
            <div className="flex flex-row-reverse pt-8 gap-2">
              <Button label="Lost Password" data-test="lost-password-button" />
              <Button label="Log In" primary data-test="sign-in-button" />
            </div>
          </div>
        </>
    )
}