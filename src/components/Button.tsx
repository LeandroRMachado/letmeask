import { ButtonHTMLAttributes } from "react"

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props }: ButtonProps) {
  // let = let it change 
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''} `} {...props}/>
    //condicional - caso isOutlined exista, eu vou por uma className a mais chamada "outlined", se não eu não vou por className a mais nenhuma
  )
}

//   ...   rest operator, ou seja eu estou pegando o resto - tudo que não for "isOutlined" eu estou jogando dentro de "...props"