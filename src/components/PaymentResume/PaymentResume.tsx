"use client"

import { FC, useState } from 'react'
import Card from '../../basecomponents/Card'
import styles from './PaymentResume.module.css'
import LinkDePagamentoItem from '../../models/LinkDePagamentoItem'
import SubItens from '../../models/SubItens'

interface PaymentResumeProps {
  customer?: string
  paymentType?: string
  order?: LinkDePagamentoItem[]
  price?: number
  signatureName?: string
  subItens?: SubItens[]
  collapsible?: boolean
  initCollapsed?: boolean
  className?: string
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

const renderOrder = () => {
  return (
    <div className="flex justify-between">
      <div className="text-sm">Item 1</div>
      <div className="text-sm">{currencyFormatter.format(100)}</div>
    </div>
  )
}

const renderSubItens = () => {
  return (
    <div className="flex justify-between mt-2 pl-8">
      <div className="text-xs text-neutral-medium">Subitem 1</div>
      <div className="text-xs text-neutral-medium">1x</div>
    </div>
  )
}

const PaymentResume: FC<any> = (props: any) => {
  const {
    customer,
    paymentType,
    order,
    price,
    signatureName,
    subItens,
    collapsible,
    initCollapsed,
    className
  } = props

  const [collapsed, setCollapsed] = useState(initCollapsed ?? true)

  return (
    <Card
      className={[
        'transition-all relative block w-full px-5 py-6 border border-solid border-neutral-light rounded-lg bg-essencial-white',
        className
      ].join(' ')}>
      <div
        className={[
          'flex justify-between',
          styles.cardHeader,
          collapsed ? 'collapsed' : [styles.opened, 'pb-5'].join(' ')
        ].join(' ')}
        onClick={() => setCollapsed(!collapsed)}>
        <h3
          className={[
            'text-sm font-semibold text-neutral-darkest',
            styles.cardTitle
          ].join(' ')}>
          Detalhes do pagamento
        </h3>
        {collapsible ? (
          collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="19px"
              height="19px">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="19px"
              height="19px">
              <path d="M7 14l5-5 5 5z" />
            </svg>
          )
        ) : null}
      </div>
      {collapsible && !collapsed ? (
        <>
          <div className="py-4">
            <div>
              <h6 className="text-xs text-neutral-dark">Cliente</h6>
              <p className="mt-2 text-sm text-neutral-darkest">
                John Doe
              </p>
            </div>
            <div>
              <h6 className="mt-5 text-xs text-neutral-dark">
                Forma de pagamento
              </h6>
              <p className="mt-2 text-sm text-neutral-darkest">
                Credit Card
              </p>
            </div>
            <div>
              <h6 className="mt-5 text-xs text-neutral-dark">
                Compra
              </h6>
              <div className="mt-2 text-sm text-neutral-darkest">
                {renderOrder()}
              </div>
              {renderSubItens()}
            </div>
          </div>
          <div className={`pt-5 ${styles.cardFooter}`}>
            <div className="flex justify-between">
              <span className="text-sm font-normal text-neutral-darkest">
                Total a pagar
              </span>
              <span className="text-sm font-bold text-neutral-darkest">
                {currencyFormatter.format(100)}
              </span>
            </div>
          </div>
        </>
      ) : null}
    </Card>
  )
}

export default PaymentResume