import { FocusCards } from "@/components/ui/focus-cards";

export default function PostBearer() {
  const cards = [
    {
      title: "PRESIDENT",
      src: "/PostBearers/Presi.jpeg",
    },
    {
      title: "VICE PRESIDENT",
      src: "/PostBearers/VP.jpeg",
    },
    {
      title: "GENERAL SECRETARY",
      src: "/PostBearers/GenSec.jpeg",
    },
    {
      title: "AGS - SOCIAL & SPORTS",
      src: "/PostBearers/Ags_Sports.jpeg",
    },
    {
      title: "AGS - CULTURAL",
      src: "/PostBearers/Ags_Culture.jpeg",
    },
    {
      title: "GIRLS REPRESENTATIVE",
      src: "/PostBearers/GR.jpeg",
    },
  ];
  return <FocusCards cards={cards} />;
}
