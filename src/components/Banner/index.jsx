import SearchInputButton from "../../baseUi/Button/Input/SearchInputButton";
import Searchbtn from "../../baseUi/Button/Searchbtn";

const Banner = () => {
return (
    <div className="h-[350px] bg-banner bg-contain py-5">
      <div className="flex flex-col gap-10 px-10 py-10">
           <div><h2  className="font-bold text-5xl text-white">Welcome.</h2>
           <h3 className="font-semibold text-[2rem] leading-1 text-white">Millions of movies, TV shows and people to discover. Explore now.</h3>
           
           </div>
           <div className="relative">
            <SearchInputButton />
            <div className="absolute top-0 right-0">
                <Searchbtn />
            </div>
           </div>
      </div>
    </div>
)

}

export default Banner;