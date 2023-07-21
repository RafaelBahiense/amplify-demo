import { FC } from 'react'
import style from './Loader.module.scss'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'neutral'
}

const sizeStyle = {
  sm: 32,
  md: 64,
  lg: 128
}

const colorStyle = {
  primary: '#1E3A8A',
  secondary: '#FDB813',
  neutral: '#4B5563'
}

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { size } = props
  const outerSize = size ? sizeStyle[size] : sizeStyle.md
  return (
    <>
      <div
        className={[
          'relative flex justify-center items-center bg-neutral-light rounded-full',
          style.loader
        ].join(' ')}
        style={{ width: outerSize, height: outerSize }}>
        <div
          className={`w-2 h-2 rounded-full mr-1 ${
            props.color ? colorStyle[props.color] : colorStyle.primary
          }`}
          style={{ animation: 'pulse 1s ease-in-out infinite' }}></div>
        <div
          className={`w-2 h-2 rounded-full mr-1 ${
            props.color ? colorStyle[props.color] : colorStyle.primary
          }`}
          style={{ animation: 'pulse 1s ease-in-out 0.25s infinite' }}></div>
        <div
          className={`w-2 h-2 rounded-full ${
            props.color ? colorStyle[props.color] : colorStyle.primary
          }`}
          style={{ animation: 'pulse 1s ease-in-out 0.5s infinite' }}></div>
      </div>
    </>
  )
}

export default Loader