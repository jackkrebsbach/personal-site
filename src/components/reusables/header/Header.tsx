import Link from "next/dist/client/link";
import { NavLink } from "../navlink/NavLink";
import { useState } from "react";
import Head from "next/head";
import styles from "./Header.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  const [notOpen, setNotOpen] = useState(true);
  const router = useRouter();

  function handleClick(event: any) {
    event.preventDefault();
    setNotOpen(!notOpen);
  }
  return (
    <header className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio for Jack Krebsbach" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div className={styles.info__container}>
        <div className={styles.blurb}>
          <Link href="/">
            <a>
              <h1> Jack Krebsbach </h1>
            </a>
          </Link>
          <span> Data Science </span>
          <span className={styles.seperator}> | </span>
          <span> Web Development </span>
        </div>
        <button className={styles.toggle} onClick={handleClick}>
          <i className={cn({ [styles.bars]: true, ["fas fa-bars"]: true })}></i>
        </button>
      </div>
      <nav
        className={cn({ [styles.container]: true, [styles.hidden]: notOpen })}
      >
        {router.asPath !== "/" && (
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
        )}
        <NavLink href="/projects">
          <a>Projects</a>
        </NavLink>
        <NavLink href="/resume.pdf">
          <a target="_blank">Resume</a>
        </NavLink>
        <NavLink href="/contact">
          <a>Contact</a>
        </NavLink>
      </nav>
    </header>
  );
};
