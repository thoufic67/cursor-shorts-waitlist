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

const navigation = [{ name: "Features", link: "#features" }];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToWaitlist = () => {
    router.push("/");
  };

  const handleFeatureClick = () => {
    // If we're not on the home page, navigate to home with features hash
    if (pathname !== "/") {
      router.push("/#features");
      return;
    }

    // If we're on the home page, scroll to features section
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
      // Update URL to include hash
      window.history.pushState(null, "", "#features");
    }
  };

  const handleFeatureClickWithEvent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleFeatureClick();
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navigation} onItemClick={handleFeatureClick} />
        <NavbarButton onClick={scrollToWaitlist} variant="primary">
          Join Waitlist
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
              onClick={(e) => {
                handleFeatureClickWithEvent(e);
                setIsOpen(false);
              }}>
              {item.name}
            </a>
          ))}
          <NavbarButton
            onClick={scrollToWaitlist}
            variant="primary"
            className="w-full">
            Join Waitlist
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
