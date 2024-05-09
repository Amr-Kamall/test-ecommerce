"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Center from "./center";
import { useProducts } from "../contexts/productContext";
import MenuIcon from "./products/menuIcon";

function Header() {
  const { cart } = useProducts();
  const cartLength = cart?.length || 0;
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  console.log(open);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <Center>
        <div className={styles.wrapper}>
          <Link
            href="/"
            className={`${styles.logo} ${open ? styles.fixed : ""} `}
          >
            Ecommerce
          </Link>
          <nav
            className={`${styles.styledNav}  ${open ? styles.activeNav : ""} `}
          >
            <Link href="/" onClick={() => setOpen(false)}>
              home
            </Link>
            <Link href="/products" onClick={() => setOpen(false)}>
              All Products
            </Link>
            {/* <Link href="/Categories" onClick={() => setOpen(false)}>
              Categories
            </Link>
            <Link href="/Account" onClick={() => setOpen(false)}>
              Account
            </Link> */}
            <Link href="/cart" onClick={() => setOpen(false)}>
              cart ({cartLength || 0})
            </Link>
          </nav>
          {isSmallScreen && (
            <MenuIcon styles={styles} open={open} setOpen={setOpen} />
          )}
        </div>
      </Center>
    </header>
  );
}

export default Header;
