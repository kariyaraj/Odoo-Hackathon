import React from "react";
import {Card, CardFooter, Image, Button, Textarea} from "@nextui-org/react";
import {Code} from "@nextui-org/react";

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
    <div className="flex justify-center items-center h-24">
      <h1 className="text-3xl font-bold text-center">Our Team</h1>
    </div>
    <br></br>
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
        src="https://media.licdn.com/dms/image/D4D03AQGY8uBnQATgXg/profile-displayphoto-shrink_400_400/0/1694430942890?e=1724889600&v=beta&t=lxA6-L6Oxx9cJfV4pPFP35Ap-YYL6lsxbBSN8HWgpXE"
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
        src="https://media.licdn.com/dms/image/D4D03AQFylOFxdk-i3A/profile-displayphoto-shrink_100_100/0/1688181927909?e=1724889600&v=beta&t=nAOrajFXamXh66PWeKmDJTPKlICI3thf38-p4r_d5IA"
        width={340}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Srijit Das</p>
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
        src="https://media.licdn.com/dms/image/D4D03AQEsTQeIRcS1lg/profile-displayphoto-shrink_400_400/0/1719032151596?e=1724889600&v=beta&t=XuU1cpnFZvEj_XXyPgDDgwAYWGRXvqstgWj90k9eoWU"
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
        src="https://media.licdn.com/dms/image/D4D03AQFfvG4SJFi4qQ/profile-displayphoto-shrink_400_400/0/1712999178943?e=1724889600&v=beta&t=9KuU1_2IB7TBSlkM_Ae0xrqHQtdhAm1MEVjEiOrEgS8"
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
  <div >
    <br></br>
    <br></br>
  <Textarea
      isReadOnly
      label="About Us"
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue="We are Quantum Sparks, a dynamic group of final-year undergraduate students from Ganpat University. Our team is united by a shared enthusiasm for Artificial Intelligence (AI) and a passion for pushing the boundaries of technology. Each member of Quantum Sparks brings unique skills and perspectives, allowing us to innovate and tackle challenges from multiple angles. Our journey through the realms of AI has been marked by rigorous learning, collaborative projects, and a relentless drive to make impactful contributions to the field. As we approach the culmination of our academic journey, we are more committed than ever to harnessing the power of AI to create solutions that can transform industries and improve lives. Join us as we continue to explore, innovate, and ignite the sparks of AI-driven possibilities.
      "

      // className="max-w-xs"
    />
    </div>
    </div>
  );
}
