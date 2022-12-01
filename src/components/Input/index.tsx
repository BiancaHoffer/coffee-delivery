import { InputHTMLAttributes, forwardRef } from 'react'
import { InputBase, InputContent } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({error, className, ...props}, ref) => {
  return (
    <InputContent className={className}>
      <InputBase {...props} ref={ref} hasError={!!error} />
      {error && <p>{error}</p> }
    </InputContent>
  )
})