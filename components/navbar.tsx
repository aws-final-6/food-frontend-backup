"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React, { useState, useContext, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { UserContext } from "@/app/providers";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTheme } from "next-themes";
import Searchbar from "./navbar/Searchbar";

export const Navbar = () => {
  const { theme } = useTheme();
  const { isUserDataEmpty } = useContext(UserContext);
  const [navWebMenu, setNavWebMenu] = useState(siteConfig.webbasicItems);
  const [navMobileMenu, setNavMobileMenu] = useState(
    siteConfig.mobilebasicItems
  );
  useEffect(() => {
    if (!isUserDataEmpty()) {
      setNavWebMenu(siteConfig.webuserItems);
      setNavMobileMenu(siteConfig.mobileuserItems);
    }
  }, []);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" height={"100px"}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <NextLink className="flex justify-start items-center" href="/">
            <Image
              src={
                theme === "light" || theme == null
                  ? "/logo_light.png"
                  : "/logo_dark.png"
              }
              alt="Logo"
              width={200}
              height={50}
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-12 justify-start ml-2">
          {navWebMenu.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium font-jua text-xl"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <Searchbar />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          {isUserDataEmpty() ? (
            <Button
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={"/login"}
              variant="flat"
            >
              로그인
            </Button>
          ) : (
            <Button
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={"/login"}
              variant="flat"
            >
              로그아웃
            </Button>
          )}
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <Searchbar />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navMobileMenu.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navMobileMenu.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
