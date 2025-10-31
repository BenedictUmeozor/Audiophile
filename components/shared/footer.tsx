import { CATEGORIES } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "../icons/facebook-icon";
import InstagramIcon from "../icons/instagram-icon";
import TwitterIcon from "../icons/twitter-icon";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container className="pt-[75px] pb-12">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={143}
              height={25}
              className="h-[25] w-[143]"
            />
          </Link>
          <nav>
            <ul className="flex items-center gap-[34px]">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase transition-colors duration-150 ease-linear"
                >
                  HOME
                </Link>
              </li>
              {CATEGORIES.map((category) => (
                <li key={category.name}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="hover:text-primary text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase transition-colors duration-150 ease-linear"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mb-14 grid grid-cols-2">
          <p className="body text-white opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex items-end justify-end gap-x-4">
            <Link href="#" aria-label="Facebook">
              <FacebookIcon className="hover:fill-primary fill-white transition-colors duration-150 ease-linear" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <TwitterIcon className="hover:fill-primary fill-white transition-colors duration-150 ease-linear" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <InstagramIcon className="hover:fill-primary fill-white transition-colors duration-150 ease-linear" />
            </Link>
          </div>
        </div>
        <p className="text-[15px] leading-[25px] font-bold tracking-[0px] text-white opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
