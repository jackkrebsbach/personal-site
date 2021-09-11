import Link from "next/dist/client/link";
import { NavLink } from "../navlink/NavLink";
import Head from "next/head";
import styles from "./Header.module.scss";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio for Jack Krebsbach" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>
      <div className={styles.blurb}>
        <Link href="/">
          <a>
            <h1> Jack Krebsbach </h1>
          </a>
        </Link>
        <span> Data Science • Web Development </span>
      </div>
      <nav>
        <NavLink href="/projects">
          <a>Projects</a>
        </NavLink>
        <NavLink href="/resume">
          <a>Resume</a>
        </NavLink>
        <NavLink href="/contact">
          <a>Contact</a>
        </NavLink>
      </nav>
    </header>
  );
};
