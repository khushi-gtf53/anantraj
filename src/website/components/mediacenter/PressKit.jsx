import CommonHeading from "../common/CommonHeading";
import Image from "next/image";

const downloadItems = [
  {
    id: "black-logo",
    title: "download black logo",
    bg: "bg-white",
    textColor: "text-black",
    img: "/assets/mediacenter/presskit/1.webp",
    files: [
      { label: "PNG", path: "/assets/mediacenter/presskit/black-logo.png" },
      { label: "JPG", path: "/assets/mediacenter/presskit/black-logo.jpg" },
      { label: "WEBP", path: "/assets/mediacenter/presskit/black-logo.webp" },
    ],
  },
  {
    id: "white-logo",
    title: "download white logo",
    bg: "bg-primaryblue",
    textColor: "text-white",
    img: "/assets/mediacenter/presskit/2.webp",
    files: [
      { label: "PNG", path: "/assets/mediacenter/presskit/white-logo.png" },
      { label: "JPG", path: "/assets/mediacenter/presskit/white-logo.jpg" },
      { label: "WEBP", path: "/assets/mediacenter/presskit/white-logo.webp" },
    ],
  },
  {
    id: "brochure",
    title: "",
    bg: "bg-white",
    textColor: "text-black",
    img: "/assets/mediacenter/presskit/3.webp",
    files: [
      {
        label: "Download Brochure",
        path: "/assets/mediacenter/presskit/brochure.pdf",
      },
    ],
  },
];

const PressKitItem = ({ title, bg, textColor, img, files }) => (
  <div className="presskit-item">
    <div
      className={`${bg} w-full h-[300px] flex flex-col justify-evenly items-center p-10`}
    >
      <Image
        src={img}
        alt={title || "presskit item"}
        width={200}
        height={250}
        className="object-contain"
      />
      {title && (
        <h3
          className={`tracking-wider font-sangbleu text-xl capitalize ${textColor}`}
        >
          {title}
        </h3>
      )}
    </div>

    <div className="download_sec mt-5">
      <div className="flex justify-center space-x-2 items-center">
        {files.map((file, index) => (
          <span key={file.label} className="flex items-center space-x-2">
            <a
              href={file.path}
              download
              className={`tracking-wider ${
                file.label === "Download Brochure"
                  ? "font-sangbleu text-xl capitalize"
                  : "uppercase"
              }`}
            >
              {file.label}
            </a>
            {index < files.length - 1 && <span>|</span>}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const PressKit = () => {
  return (
    <section id="presskit" className="presskit relative w-full">
      <div className="wrapper">
        <CommonHeading>press kit</CommonHeading>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {downloadItems.map((item) => (
            <PressKitItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressKit;
