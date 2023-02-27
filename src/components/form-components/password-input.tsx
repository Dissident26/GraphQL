import { useCallback, useState } from 'react';

import { Input, InputProps } from './input';

const show_pass_title = 'Show Password';
const hide_pass_title = 'Hide Password';

export const PasswordInput = (props: InputProps) => {
  const [isPasswordVisisble, setIsPasswordvisible] = useState(false);
  const togglePassword = useCallback(() => setIsPasswordvisible((prev) => !prev), []);

  return (
    <>
      <Input {...props} type={isPasswordVisisble ? 'text' : 'password'} />
      {/* <button onClick={togglePassword}>{isPasswordVisisble ? hide_pass_title : show_pass_title}</button> */}
    </>
  ); //check why onsubmit fires on toggle
};
