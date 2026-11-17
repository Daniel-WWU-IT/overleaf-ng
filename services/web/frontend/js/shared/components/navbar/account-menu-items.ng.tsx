import {type NavbarSessionUser} from "@/shared/components/types/navbar.ts";
import {OLDropdownItem} from "@/shared/components/ol/ol-dropdown-menu.tsx";
import NavDropdownDivider from "@/shared/components/navbar/nav-dropdown-divider.tsx";
import DropdownListItem from "@/shared/components/dropdown/dropdown-list-item.tsx";
import ThemeToggle from "@/features/project-list/components/sidebar/theme-toggle.tsx";

export function NGAccountMenuItems(
    sessionUser: NavbarSessionUser,
    showThemeToggle: boolean,
    hasOverallThemes: boolean
) {
    return (
        <>
            <OLDropdownItem as="li" disabled role="menuitem">
                {sessionUser.email}
            </OLDropdownItem>
            <NavDropdownDivider />
            {showThemeToggle && hasOverallThemes && (
                <DropdownListItem>
                    <ThemeToggle />
                </DropdownListItem>
            )}
        </>
    );
}
