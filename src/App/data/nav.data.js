// Icons
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

// Nav data
export const navData = [
  {
    id: "bcc7e466-0090-460f-b856-9cae349e7b4a",
    title: "Home",
    to: "/",
    active: true,
  },
  {
    id: "a021969b-08ca-497d-bb7b-c1423f3d810a",
    title: "About",
    to: "/about",
    active: false,
  },
  {
    id: "e072ea6a-2c86-4726-8c7f-4da8cd2e3f95",
    title: "Projects",
    to: "/projects",
    active: false,
  },
  {
    id: "6aed1ce7-4d38-4bfd-a5b6-ff90bec07e96",
    title: "Services",
    to: "/services",
    active: false,
  },
  {
    id: "94ef8e5f-680f-4ed8-a864-3fb6d3f9a88c",
    title: "Testimonials",
    to: "/testimonials",
    active: false,
  },
  {
    id: "c0734b27-759d-4440-bdbc-6a1cee13078a",
    title: "Contact",
    to: "/contact",
    active: false,
  },
];

// Nav social data
export const navSocialData = [
  {
    id: "bcc7e466-0090-460f-b856-9cae349e7b4a",
    title: "Linkedin",
    href: "https://www.linkedin.com/in/badjatya/",
    icon: <FaLinkedinIn />,
  },
  {
    id: "a021969b-08ca-497d-bb7b-c1423f3d810a",
    title: "Github",
    href: "https://github.com/badjatya",
    icon: <FaGithub />,
  },
  {
    id: "e072ea6a-2c86-4726-8c7f-4da8cd2e3f95",
    title: "Instagram",
    href: "https://www.instagram.com/badjatya/",
    icon: <FaInstagram />,
  },
];
