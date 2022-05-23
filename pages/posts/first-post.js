import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import CommandPalette from "../../components/CommandPalette";

export default function FirstPost() {
  return (
    <Layout>
      <CommandPalette />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image
        src="/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
}
