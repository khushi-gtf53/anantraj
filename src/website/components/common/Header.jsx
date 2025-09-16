"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAboutUs, setIsAboutUs] = useState(false);
  const pathname = usePathname();

  const isTownshipPage = pathname.includes('township');

  console.log('isTownshipPage',isTownshipPage);
  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Set true if NOT on home page ("/")
    const isNonHomePage = pathname !== "/";

    setIsAboutUs(isNonHomePage);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY <= 10);

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathname]);

  if (!isMounted) {
    // render nothing or a simple placeholder until client mounts
    return null;
  }

  const portalTarget =
    typeof document !== "undefined"
      ? document.getElementById("header-portal") || document.body
      : null;

  const headerContent = (
    <header
      className={`w-full transition-all duration-300 ease-in-out ${showHeader
          ? "fixed top-0 z-[100] translate-y-0"
          : "fixed top-0 z-[100] -translate-y-full"
        } flex justify-between items-center px-[20px] lg:px-[100px] py-3 ${isAboutUs || (!isAtTop && showHeader)
          ? "bg-[#FBF6F6] text-black"
          : isAtTop && showHeader
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-md"
        } ${isTownshipPage ? 'bg-transparent text-white' : ''}`}
    >
      <Link href="/">
        <img
          src={
            (isAboutUs || !isAtTop || !showHeader) && !isTownshipPage
              ? "/assets/footer-logo-1.png"
              : "/assets/white-anant.png"
          }
          alt="Anant Raj Limited Logo"
          className={`h-[70px] ${isAtTop ? "lg:h-[75px]" : ""}`}
        />
      </Link>

      <nav className="flex space-x-6 items-center">
        {["About Us", "Projects", "Investors", "CSR", "Contact Us"].map(
          (item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className={` lg:block hidden tracking-[1.2px] font-[400] text-[15px] ${isAboutUs || (!isAtTop && showHeader)
                ? "text-black"
                : isAtTop && showHeader
                  ? "text-white"
                  : "text-black"
                } ${isTownshipPage ? "text-white" : "text-black"}`}
            >
              {item}
            </Link>
          )
        )}
        <button
          className={`relative w-6 h-6 ${isAboutUs || (!isAtTop && showHeader)
            ? "text-black"
            : isAtTop && showHeader
              ? "text-white"
              : "text-black"
            }`}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={
              isAboutUs || !isAtTop || !showHeader
                ? "/assets/black-hamburger.png"
                : "/assets/hamburger.png"
            }
            alt="Menu"
            className="w-full h-full cursor-pointer"
          />
        </button>
      </nav>
    </header>
  );

  return portalTarget ? (
    <>
      {createPortal(headerContent, portalTarget)}
      {createPortal(
        <HeaderMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />,
        portalTarget
      )}
    </>
  ) : null;
};

export default Header;
