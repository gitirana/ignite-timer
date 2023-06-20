import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={22} weight="bold" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={22} weight="bold" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
