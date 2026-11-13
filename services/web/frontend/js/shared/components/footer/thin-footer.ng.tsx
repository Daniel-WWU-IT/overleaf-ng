// -- BEGIN NG --
import OLRow from "@/shared/components/ol/ol-row.tsx";

export function ngThinFooterContent(): string {
    return (
        <footer className="site-footer">
            <div className="site-footer-content d-print-none">
                <OLRow>
                    <ul className="site-footer-items col-lg-9">
                        <>
                            <li>
                                {/* year of Server Pro release, static */}© 2026{' '}
                                <a href="https://www.overleaf.com" target="_blank">
                                    Powered by Overleaf
                                </a>
                            </li>
                        </>
                    </ul>
                    <ul className="site-footer-items col-lg-3 text-end">
                    </ul>
                </OLRow>
            </div>
        </footer>
    );
}
// -- END NG --
