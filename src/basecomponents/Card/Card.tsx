import React, { FC } from 'react'

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string
}

const Card: FC<React.ComponentPropsWithRef<'div'> & CardProps> = (props) => {
  const { children, className } = props
  return (
    <div
      className={[
        'relative block w-full px-5 py-6 border border-solid border-neutral-light rounded-lg bg-essencial-white',
        className
      ].join(' ')}
      {...props}>
      {children}
    </div>
  )
}

export default Card
