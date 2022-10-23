import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import ShadowCard from "./Card";

export default function PageViewComponent({ page }) {
  return (
    <ShadowCard
      key={page.title}
      title={
        <>
          {page.title}
          <FontAwesomeIcon icon={faUser} className="ml-3" />(
          {page?.data?.activateUser})
          <FontAwesomeIcon icon={faEye} className="ml-3" />(
          {page?.data?.accessCount})
        </>
      }
      colWidth={4}
    >
      <section className="h-30">
        <Image src={page.imageLink} alt={page.title} layout="intrinsic" />
      </section>
    </ShadowCard>
  );
}
