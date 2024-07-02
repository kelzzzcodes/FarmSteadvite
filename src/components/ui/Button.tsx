import React, { ReactNode } from 'react'

const Button = ({
  children,
  href,
  className,
  spanClassName,
}: {
  className?: string
  spanClassName?: string
  children: ReactNode
  href?: string
}) => {
  const classes = `relative flex items-center ${className || ''}`
  const spanClasses = ` relative flex items-center ${spanClassName || ''}`

  const renderButton = () => (
    <button>
      <span>{children}</span>
    </button>
  )
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  )
  return href ? renderLink() : renderButton()
}

export default Button
