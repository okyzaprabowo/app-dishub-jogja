"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NotComplete from "./notComplete";
import comingSoonList from "@/app/data/comingSoon.json"; // Pastikan path ini sesuai


export default function PageWrapper({ children }) {
  const pathname = usePathname();
  const [isComingSoon, setIsComingSoon] = useState(false);

  useEffect(() => {
    setIsComingSoon(comingSoonList.includes(pathname));
  }, [pathname]);

  if (isComingSoon) {
    return <NotComplete />;
  }

  return <>{children}</>;
}
