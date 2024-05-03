import React from "react"

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: buttonProps) {
  const { className, ...prop } = props

  return (
    <button
      className={`px-2 py-1 border text-xs font-medium rounded-md capitalize ${className}`}
      {...prop}
    />
  )
}
