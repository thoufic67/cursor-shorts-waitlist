"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { usePostHog } from "posthog-js/react";

const navigation = [
  { name: "Features", link: "#features" },
  { name: "Autoshorts", link: "/autoshorts" },
];

export default function NavigationBar() {
  const posthog = usePostHog();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLoginClick = () => {
    posthog?.capture('login_button_clicked', {
      location: 'navbar'
    });
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (appUrl) {
      window.location.href = appUrl;
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; link: string }) => {
    // If it's a hash link, handle smooth scrolling
    if (item.link.startsWith("#")) {
      e.preventDefault();

      // If we're not on the home page, navigate to home with features hash
      if (pathname !== "/") {
        router.push(item.link);
        setIsOpen(false);
        return;
      }

      // If we're on the home page, scroll to features section
      const targetId = item.link.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        // Update URL to include hash
        window.history.pushState(null, "", item.link);
      }
      setIsOpen(false);
    }
    // For non-hash links, let the default behavior (navigation) happen
    // but just close the mobile menu if open
    else {
      setIsOpen(false);
    }
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navigation} onItemClick={handleNavClick} />
        <NavbarButton onClick={handleLoginClick} variant="primary">
          Login
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
              onClick={(e) => handleNavClick(e, item)}>
              {item.name}
            </a>
          ))}
          <NavbarButton
            onClick={handleLoginClick}
            variant="primary"
            className="w-full">
            Login
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
