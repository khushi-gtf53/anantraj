import { FiPlus, FiX } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";


export default function ReportsSection({
  data,
  reportFiles,
  openModal,
  setOpenModal,
  activeReport,
  setActiveReport,
  openAccordion,
  toggleAccordion,
  contentRefs
}) {

  // if (!data) return null;

  console.log(openAccordion)

  return (
    <div className="wrapper" id="discover-investors">
      {/* Accordion Section */}
      <div className="space-y-4">
        {
          data && (
            <>
              {data.map((acc) => (
                <div key={acc.id} className="mb-8" id={acc.id}>

                  {/* Accordion Header */}
                  <div
                    onClick={() => toggleAccordion(acc.id)}
                    className='flex__heading w-full flex justify-between items-center cursor-pointer gap-3'>
                    <span className="font-sangbleu uppercase text-left tracking-[2px] leading-[30px] lg:leading-[40px] text-[12.5px] lg:text-[15px]">{acc.title}</span>
                    <span className='inline-block flex-1 h-[1px] bg-gray-400'></span>
                    <span
                      className="block text-gray-600 transform transition-transform duration-300 text-2xl"
                      style={{ transform: openAccordion === acc.id ? "rotate(180deg)" : "rotate(0deg)", }}
                    ><img src="./assets/down-arrow.png" className={`h-[18px] ml-[6px] object-cover`} alt="down-arrow" />
                    </span>
                  </div>

                  {/* Accordion Content */}
                  <div
                    ref={(el) => (contentRefs.current[acc.id] = el)}
                    className={`overflow-hidden ${acc.id === 1 ? "opacity-100" : "opacity-0"
                      }`}
                    style={{ height: acc.id === 1 ? "auto" : "0" }}
                  >
                    <div className="card_flex mt-5 flex flex-wrap lg:gap-x-7 lg:gap-y-0 gap-y-5 justify-between">
                      {acc.content.map((items, i) =>
                        <div
                          key={i}
                          className="bg-white p-[30px] lg:w-[22%] w-full flex justify-between cursor-pointer"
                          onClick={() => {
                            setActiveReport(items);
                            setOpenModal(true);
                          }}
                        >
                          <p className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px] w-[70%]">{items}</p>
                          <button
                            className="flex items-end">
                            <FiPlus size={18} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )
        }
      </div>
      {openModal && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-[990]">
          <div className="bg-[#FBF6F6] w-full lg:max-w-2xl max-w-[95%] shadow-lg p-6 relative">
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between mb-8">
              <div className="left_side border-b border-gray-500 pb-3 lg:w-[83%] flex lg:justify-between justify-center flex-wrap">
                <p className="font-lato lg:text-[14px] text-[16px] font-[400] tracking-[1px] leading-[27px]">
                  {`${activeReport}` || "Corporate Policies"}
                </p>
                <select
                  name="year"
                  className="outline-0 font-lato text-[14px] font-[400] tracking-[1px] lg:p-0 p-3 lg:bg-transparent bg-white lg:my-0 my-3 lg:w-fit w-full"
                >
                  <option value="Find By Year">Find By Year</option>
                  <option value="2002">2002</option>
                  <option value="2004">2004</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-500 hover:text-black lg:flex hidden"
              > close
                <FiX size={24} className="border rounded-full p-1 ml-3" />
              </button>
            </div>

            {/* Reports List */}
            <div className="max-h-80 overflow-y-auto pr-2 space-y-4">
              {reportFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between border-b border-gray-400 pb-2 mt-4"
                >
                  <span className="font-lato text-[13px] text-gray-800 font-[400] tracking-[1px] leading-[27px]">{file.name}</span>
                  <button>
                    <FaFilePdf className="text-red-500 text-xl" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setOpenModal(false)}
              className="text-gray-500 hover:text-black lg:hidden block px-6 py-[5px] border-1 mt-4 mx-auto"
            > Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
