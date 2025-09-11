import MediaCenterAbout from "@/src/components/mediacenter/MediaCenterAbout";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#FBF6F6] relative w-full">
      <MediaCenterAbout />
      {/* Background Pattern */}
                    <Image
                      src="/assets/pattern-bg.png"
                      alt="pattern-bg"
                      width={1920}
                      height={70}
                      priority
                      className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
                    />
    </div>
  );
}
