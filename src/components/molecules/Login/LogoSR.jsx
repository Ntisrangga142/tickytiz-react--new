import logoImg from "/assets/imgs/logo/logo.png";

import ImageLogo from "../../atoms/Image-Logo/ImageLogo.jsx"

function LogoSR() {
    const altImage = "logo.png";
    const classImage = "w-[17.25rem] h-[6.5rem]";

  return (
        <div className="mt-[80px]">
          <ImageLogo src={logoImg} alt={altImage} className={classImage} />
        </div>
  )
}

export default LogoSR