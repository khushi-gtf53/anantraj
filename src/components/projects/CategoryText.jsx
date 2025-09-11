import useWindowWidth from "@/src/utils/useWindowWidth";

function CategoryText({ category, title, active }) {
    const { width: windowWidth } = useWindowWidth()
    return (
        <div className="cat-text flex items-center w-full h-fit lg:absolute lg:bottom-[0] lg:gap-0 gap-3 lg:py-2 lg:pb-5 pb-3">
            <span className="lg:flex-1 truncate">{category}</span>
            {(windowWidth <= 767 || active === title) && (
                <span className="flex-5 block h-[1px] lg:bg-black bg-gray-400"></span>
            )}
        </div>
    );
}
export default CategoryText;