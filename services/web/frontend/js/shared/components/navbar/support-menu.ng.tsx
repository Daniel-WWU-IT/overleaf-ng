// -- BEGIN NG --
import NavDropdownMenu from '@/shared/components/navbar/nav-dropdown-menu'
import NavDropdownLinkItem from '@/shared/components/navbar/nav-dropdown-link-item'

export default function NGSupportMenu() {
  return (
      <NavDropdownMenu
          title="Support"
          className="subdued"
      >
        <>
          <NavDropdownLinkItem href="https://www.overleaf.com/learn" openInNewWindow={true}>Documentation</NavDropdownLinkItem>
          <NavDropdownLinkItem href="https://hochschulcloud.nrw/de/kontakt" openInNewWindow={true}>Contact us</NavDropdownLinkItem>
        </>
      </NavDropdownMenu>
  )
}
// -- END NG --
