import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import { UsersIcon } from "../icons/breadcrumb/users-icon";
import img from "../icons/raj.jpg";
import img2 from "../icons/nityam.png"
import Link from "next/link";
export default function AboutUs() {
  return (
    <div className="m-9">
    <ul className="flex">
      <li className="flex gap-2">
        <HouseIcon />
        <Link href={"/"}>
          <span>Home</span>
        </Link>
        <span> / </span>{" "}
      </li>

      <li className="flex gap-2">
        <UsersIcon />
        <span>AboutUs</span>
        <span> / </span>{" "}
      </li>

    </ul>
    <br></br>
<div className="flex flex-row gap-16 items-center ">
<Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
      isZoomed
        alt="Dhyey Kathiriya"
        className="object-cover"
        height={340}
        src="https://nextui.org/images/hero-card.jpeg"
        width={340}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Dhyey kathiriya</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          {/* <Link/> */}
          <Link href="https://www.linkedin.com/in/dk21/" target="Blank" >LinkedIN</Link>
        </Button>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
      isZoomed
        alt="Srijit Das"
        className="object-cover"
        height={340}
        src=""
        width={340}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Dhyey kathiriya</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          {/* <Link/> */}
          <Link href="https://www.linkedin.com/in/srijit-das-444s1709/" target="Blank" >LinkedIN</Link>
        </Button>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
      isZoomed
        alt="Nityam Bhojani"
        className="object-cover"
        height={340}
        src="../icons/nityam.png"
        width={340}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Nityam Bhojani</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          {/* <Link/> */}
          <Link href="https://www.linkedin.com/in/nityam-bhojani-ba70051b4/" target="Blank" >LinkedIN</Link>
        </Button>
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
      isZoomed
        alt="Raj Kariya"
        className="object-cover"
        height={340}
        src="../icons/raj.JPG"
        width={340}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Raj Kariya</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          {/* <Link/> */}
          <Link href="https://www.linkedin.com/in/rajkariya/"  target="Blank">LinkedIN</Link>
        </Button>
      </CardFooter>
    </Card>
    

  </div>
    </div>
  );
}
