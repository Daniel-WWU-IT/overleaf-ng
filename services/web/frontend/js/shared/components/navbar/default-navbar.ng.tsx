// -- BEGIN NG --
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import AdminMenu from '@/shared/components/navbar/admin-menu.ng'
import type { DefaultNavbarMetadata } from '@/shared/components/types/default-navbar-metadata'
import HeaderLogoOrTitle from '@/shared/components/navbar/header-logo-or-title'
import overleafWhiteLogo from '@/shared/svgs/overleaf-white.svg'
import overleafGreenLogo from '@/shared/svgs/overleaf-green.svg'
import type { CSSPropertiesWithVariables } from '../../../../../types/css-properties-with-variables'
import SupportMenu from '@/shared/components/navbar/support-menu.ng'

export function NGDefaultNavbar(
    props: DefaultNavbarMetadata & { overleafLogo?: string }
) {
  const {
    overleafLogo,
    customLogo,
    title,
    canDisplayAdminMenu,
    canDisplayAdminRedirect,
    canDisplayProjectUrlLookup,
    canDisplaySplitTestMenu,
    canDisplaySurveyMenu,
    canDisplayScriptLogMenu,
    enableUpgradeButton,
    suppressNavbarRight,
    suppressNavContentLinks,
    showCloseIcon = false,
    showSubscriptionLink,
    showSignUpLink,
    sessionUser,
    adminUrl,
    items,
  } = props
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  return (
      <>
        <Navbar
            className="navbar-default navbar-main"
            expand="lg"
            onToggle={expanded => setExpanded(expanded)}
            style={
              {
                '--navbar-brand-image-default-url': `url("${overleafWhiteLogo}")`,
                '--navbar-brand-image-redesign-url': `url("${overleafGreenLogo}")`,
              } as CSSPropertiesWithVariables
            }
            aria-label={t('primary')}
        >
          <Container className="navbar-container" fluid>
            <div className="navbar-header">
              <HeaderLogoOrTitle
                  title={title}
                  overleafLogo={overleafLogo}
                  customLogo={customLogo}
              />
            </div>
            <>
              <Navbar.Collapse
                  id="navbar-main-collapse"
                  className="justify-content-end"
              >
                <Nav as="ul" className="ms-auto gap-1" role="menubar">
                  <SupportMenu />
                  {canDisplayAdminMenu ||
                  canDisplayAdminRedirect ||
                  canDisplaySplitTestMenu ? (
                      <AdminMenu
                          canDisplayAdminMenu={canDisplayAdminMenu}
                          canDisplayAdminRedirect={canDisplayAdminRedirect}
                          canDisplayProjectUrlLookup={canDisplayProjectUrlLookup}
                          canDisplaySplitTestMenu={canDisplaySplitTestMenu}
                          canDisplaySurveyMenu={canDisplaySurveyMenu}
                          canDisplayScriptLogMenu={canDisplayScriptLogMenu}
                          adminUrl={adminUrl}
                      />
                  ) : null}
                </Nav>
              </Navbar.Collapse>
            </>
          </Container>
        </Navbar>
      </>
  )
}
// -- END NG --
