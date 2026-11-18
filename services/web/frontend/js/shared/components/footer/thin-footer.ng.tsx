// -- BEGIN NG --
import OLRow from "@/shared/components/ol/ol-row";
import {type FooterMetadata} from "@/shared/components/types/footer-metadata";
import {getNGVersion, getOverleafVersion} from "@/shared/ng/version";

export function NGThinFooter(_: FooterMetadata) {
    return (
        <footer className="site-footer">
            <div className="site-footer-content d-print-none">
                <OLRow>
                    <ul className="site-footer-items col-lg-6">
                        <>
                            <li>
                                {/* year of Server Pro release, static */}© 2026{' '}
                                <a href="https://www.overleaf.com" target="_blank">
                                    Powered by Overleaf
                                </a>
                            </li>
                        </>
                    </ul>
                    <ul className="site-footer-items col-lg-6 text-end">
                        <>
                            <li className="fst-italic">
                                <strong>Overleaf version:</strong> { getOverleafVersion() } <strong>NG version:</strong> { getNGVersion() }
                            </li>
                        </>
                    </ul>
                </OLRow>
            </div>
        </footer>
    );
}
// -- END NG --
