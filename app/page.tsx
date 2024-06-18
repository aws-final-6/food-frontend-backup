import React from "react";
import { subtitle } from "@/components/primitives";
import TodayRecommend from "@/components/recommendSection/todayRecommend";
import SeasonRecommend from "@/components/recommendSection/seasonRecommend";
import YoutubeRecommend from "@/components/recommendSection/youtubeRecommend";
import ShortRecommendation from "@/components/recommendSection/shortRecommendation";
const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className={subtitle()}>오늘의 레시피</h1>
      <TodayRecommend />
      <h1 className={subtitle()}>6월 제철 레시피</h1>
      <SeasonRecommend />
      <h1 className={subtitle()}>유튜브 인기 급상승 레시피</h1>
      <YoutubeRecommend />
      <h1 className={subtitle()}>유튜브 쇼츠 인기 급상승 레시피</h1>
      <ShortRecommendation />
    </main>
  );
};

export default Home;
