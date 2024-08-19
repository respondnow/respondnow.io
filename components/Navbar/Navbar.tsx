import React from "react";
import { BoundedContainer, Container, ContainerFluid } from "@/layouts";
import logo from "@public/respondNow.svg";
import menu from "@public/menu.svg";
import Image from "next/image";
import css from "./Navbar.module.scss";
import Link from "next/link";

const NavLink = ({
  href,
  text,
  isExternal = false,
}: {
  href: string;
  text: string;
  isExternal?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      className={css.navLink}
    >
      {text}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <ContainerFluid>
      <BoundedContainer className={css.navbarContainer}>
        <Link href="/">
          <Image src={logo} alt="Respond Now" height={20} />
        </Link>
        <Container className={css.navLinkContainer}>
          <NavLink href="#" text="Documentation" />
          <NavLink href="#" text="Community" />
          <NavLink href="#" text="Blogs" />
        </Container>
        <Image
          src={menu}
          alt="menu"
          className={css.mobileMenuIcon}
          height={20}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </BoundedContainer>
      {isMobileMenuOpen && (
        <ContainerFluid className={css.mobileNavLinkContainerFluid}>
          <BoundedContainer className={css.mobileNavLinkContainer}>
            <NavLink href="#" text="Documentation" />
            <NavLink href="#" text="Community" />
            <NavLink href="#" text="Blogs" />
          </BoundedContainer>
        </ContainerFluid>
      )}
    </ContainerFluid>
  );
};

export default Navbar;
