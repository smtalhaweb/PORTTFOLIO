import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} 
            hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={()=> setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}
const Navbar = ({isTopOfpage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
    const navbarBackground = isTopOfpage ? "" : "bg-red";
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-5`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">SMT</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                            className="rounded-full bg-red p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)} 
                    >
                        <img src="../assets/menu-icon.svg" alt="menu-icon" />
                    </button>
                )}
                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full w-[300px] bg-blue">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                                <img src="../assets/close-icon.svg" alt="close-icon" />
                            </button>
                        </div>
                        {/* MENU ICONS */}
                        <div className="flex flex-col gap-12 ml-[33%] text-deep-blue text-2xl">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                             <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                             <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                             <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                             <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
};

export default Navbar;