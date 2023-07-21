import { ComponentPropsWithRef, FC } from 'react'
import styles from './Button.module.scss'
interface ButtonProps {
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'link'
  kind: 'raised' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const getButtonClassNames = (props: ButtonProps): string => {
  const baseStyle = 'btn'
  const classes = [baseStyle]

  const kinds = {
    raised: '',
    outline: 'Outline'
  }

  const colors = {
    primary: 'Primary',
    secondary: 'Secondary',
    success: 'Success',
    info: 'Info',
    warning: 'Warning',
    danger: 'Danger',
    link: 'Link'
  }

  classes.push(`${baseStyle}${kinds[props.kind]}${colors[props.color]}`)

  const sizes = {
    sm: styles.btnSm,
    md: '',
    lg: styles.btnLg
  }

  classes.push(sizes[props.size ?? 'md'])

  return classes.map((s) => styles[s]).join(' ')
}

const Button: FC<ComponentPropsWithRef<'button'> & ButtonProps> = (props) => {
  const { color, kind } = props
  return (
    <button
      className={[getButtonClassNames({ color, kind }), props.className].join(
        ' '
      )}
      {...props}>
      {props.children}
    </button>
  )
}

export default Button
