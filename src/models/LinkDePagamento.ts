import LinkDePagamentoItem from './LinkDePagamentoItem'
import Parcelas from './Parcela'
import SubItens from './SubItens'

export default interface LinkDePagamento {
  guid: string
  nomeRecebedor: string
  nomeComprador: string
  tipoDeFormaDePagamento: string
  valor: number
  aceitaParcelamento: boolean
  numeroParcelas: number
  parcelas: Parcelas[]
  itens: LinkDePagamentoItem[]
  nomeAssinatura: string
  subItens: SubItens[]
  mensagemDeEnvioParaWhatsApp: string
}
