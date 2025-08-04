import LogoHeader   from "../molecules/Home/LogoHeader.jsx"
import SignInUp     from "../molecules/Home/SignInUp.jsx"
import Nav          from "../molecules/Home/Nav.jsx"


function Header() {
  const classHeader = "bg-white border-b border-[#DEDEDE] w-full h-[104px] flex flex-row justify-between items-center px-[130px] py-0";

  return (
    <header className={classHeader}>
        <LogoHeader />

        <Nav />

        <SignInUp />
    </header>
  )
}

export default Header