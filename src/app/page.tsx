import Image from 'next/image'
import PaymentResume from '@/components/PaymentResume'

export default function Home() {

  const mockPaymentResumeProps = {
    customer: 'John Doe',
    paymentType: 'Credit Card',
    order: [
      {
        id: '1',
        name: 'Item 1',
        price: 100
      }
    ],
    price: 100,
    signatureName: 'John Doe',
    subItens: [
      {
        id: '1',
        name: 'Subitem 1',
        quantity: 1
      }
    ],
    collapsible: true,
    initCollapsed: true,
    className: 'payment-resume'
  }
  return (
    <main className="flex items-center justify-between p-24">
      <PaymentResume {...mockPaymentResumeProps}/>
    </main>
  )
}
