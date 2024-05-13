import { AlarmClock, Flame, Folder, Folders, History, HomeIcon } from "lucide-react"

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div className="w-[250px] px-5 max-[547px]:hidden">
    <ul className="flex flex-col gap-[28px]">
      <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
        <HomeIcon className="w-5 h-5" />
        <span className="muli text-base">Home</span>
      </li>
      <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
        <Flame className="w-5 h-5" />
        <span className="muli text-base">Trending</span>
      </li>
      <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
        <Folders className="w-5 h-5" />
        <span className="muli text-base">Subscriptions</span>
      </li>
      <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
        <Folder className="w-5 h-5" />
        <span className="muli text-base">Library</span>
      </li>
      <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
        <History className="w-5 h-5" />
        <span className="muli text-base">History</span>
      </li>
      <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
        <AlarmClock className="w-5 h-5" />
        <span className="muli text-base">Watch later</span>
      </li>
    </ul>
    <h2 className="muli font-bold text-lg my-6">Subscriptions </h2>
    <ul className="flex flex-col gap-[23px] ">
      <li className="flex gap-[10px] cursor-pointer">
        <img className="w-[26px] h-[26px] rounded-full" src="https://picsum.photos/250/150" alt="img" />
        <span className="muli text-base">Asko's bithday</span>
      </li>
    </ul>
  </div>

);

export default Categories;

{/* {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "black",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          <category.icon />
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))} */}