import MediaCenterAbout from "@/src/website/components/mediacenter/MediaCenterAbout";
import OnlineNews from "@/src/website/components/mediacenter/OnlineNews";
import PressKit from "@/src/website/components/mediacenter/PressKit";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#FBF6F6] relative w-full">
      <MediaCenterAbout />
      <OnlineNews />
      <PressKit />

      <Image
        src="/assets/pattern-bg.png"
        alt="pattern background"
        width={1920}
        height={70}
        className="h-[70px] w-full object-cover"
        priority={false}
      />
    </div>
  );
}
