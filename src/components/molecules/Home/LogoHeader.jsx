import ImageLogo from '../../atoms/Image-Logo/ImageLogo.jsx'

import logo from '/assets/imgs/logo/logo-1.png'

function LogoHeader() {
  return (
    <div>
        <ImageLogo src={logo} alt="logo.png" className="w-[130px] h-[51px]" />
    </div>
  )
}

export default LogoHeader