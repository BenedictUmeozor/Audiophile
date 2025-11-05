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
      <Container className="relative pt-[75px] pb-12 max-lg:pt-[60px] max-lg:pb-[46px] max-md:pt-[52px] max-md:text-center">
        <div className="bg-primary absolute top-0 left-0 z-10 h-1 w-[101px] max-md:left-1/2 max-md:-translate-x-1/2" />
        <div className="mb-8 flex justify-between gap-y-8 max-lg:flex-col max-md:mb-12 max-md:gap-y-12 lg:items-center">
          <Link href="/" className="inline-block max-md:mx-auto">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={143}
              height={25}
              className="h-[25] w-[143]"
            />
          </Link>
          <nav>
            <ul className="flex items-center gap-x-[34px] gap-y-4 max-md:flex-col">
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
        <div className="mb-14 grid max-lg:mb-20 lg:grid-cols-2">
          <p className="body text-white opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex items-end justify-end gap-x-4 max-lg:hidden">
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
        <div className="items-center justify-between gap-y-12 max-lg:flex max-md:flex-col max-md:justify-center">
          <p className="text-[15px] leading-[25px] font-bold tracking-[0px] text-white opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex items-end justify-end gap-x-4 lg:hidden">
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
      </Container>
    </footer>
  );
};

export default Footer;
