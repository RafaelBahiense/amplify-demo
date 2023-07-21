//import { FieldProps } from 'formik'
import React, { FC } from 'react'
import styles from './Select.module.scss'

export interface SelectProps {
  options: Array<SelectOption>
  dataTest?: string
}

export interface SelectOption {
  text: string
  value: any
}

const Select: FC<
  React.ComponentPropsWithRef<'select'> & SelectProps// & FieldProps<'select'>
> = (props:any) => {
  const { title, options, name, meta } = props
  return (
    <div className="form-group">
      {title ? (
        <label
          htmlFor={name}
          className="block text-sm text-neutral-darkest font-normal">
          {title}
        </label>
      ) : null}
      <select
        className={`block w-full px-3 py-2 mb-1 border border-neutral-light rounded bg-white hover:border-neutral-dark focus:ring-brand-secondary-medium focus:border-brand-secondary-medium transition-colors mt-2 text-sm ${styles.select}`}
        {...props}
        data-test={props.dataTest}>
        {options.map((option: any, index: number) => {
          return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          )
        })}
      </select>
      {meta?.error && meta?.touched ? (
        <small className="text-feedback-danger-dark">{meta?.error}</small>
      ) : null}
    </div>
  )
}

export default Select
