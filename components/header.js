"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Center from "./center";
import { useProducts } from "../contexts/productContext";
import MenuIcon from "./products/menuIcon";

function Header() {
  const { cart } = useProducts();
  const cartLength = cart.length;
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  console.log(open);

  useEffect(() => {
    // When the component mounts, set loading to false after a delay to simulate page loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

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
              <span>
                cart ({loading ? <span className="loader"></span> : cartLength})
              </span>
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
