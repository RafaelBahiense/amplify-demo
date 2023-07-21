import style from './Header.module.scss'

export default function Header() {
  return (
    <>
      <div
        className={[style.header, 'w-full p-4 bg-essencial-white'].join(' ')}>
        <img
          src="https://djnn6j6gf59xn.cloudfront.net/content/img/novo_portal/logo-topo.png"
          className="w-32 mx-auto"
        />
      </div>
    </>
  )
}
