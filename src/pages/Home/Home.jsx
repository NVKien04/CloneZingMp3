import Slider from "../../components/Slider";
import Section from "../../components/Section";
import Sections from "../../components/Sections";
import { useSelector } from "react-redux";
import NewRelease from "../../components/NewRelease";
function Home() {
  const { nhacTet, top100, hEditorTheme, newRelease, weekChart } = useSelector(
    (state) => state.app
  );
  return (
    <div className="w-full mt-70">
      <Slider />
      <Section data={nhacTet} />
      <Sections data={top100} />
      <NewRelease data={newRelease} />
      <Section data={hEditorTheme} />
      <div className="mt-[28px] w-full">
        <div className="flex items-center justify-start mx-[-14px]">
          {weekChart?.items?.map((item, index) => (
            <a className="w-[33.3333%] px-[14px] rounded" key={index}>
              <figure className="w-full h-auto">
                <img src={item?.cover} className="rounded object-cover" />
              </figure>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
