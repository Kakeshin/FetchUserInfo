import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { RankArray } from "./Entities/RankArray";
import { Rank } from "./Entities/Rank";
import Inputs from "./Entities/InputInterface";
import OutputInterface from "./Entities/OutputInterface";

const url: string = "https://api.mozambiquehe.re";

/**
 *
 * @param inputs 入力情報
 */
const FetchUserInfo = (inputs: Inputs) => {
  const options: AxiosRequestConfig = {
    url: `${url}/bridge?auth=${inputs.apiKey}&player=${inputs.userName}&platform=${inputs.platform}`,
    method: "GET",
  };

  return axios(options).then((result) => {
    const data = result.data;
    const filteredBadges = data.global.badges.filter((element: any) => {
      return element.name.includes("You're Tiering Me Apart: Ranked Season");
    });

    const output: OutputInterface = {
      userName: data.global.name,
      uid: data.global.uid,
      nowRank: `${data.global.rank.rankName}${data.global.rank.rankDiv} ${data.global.rank.rankScore}`,
      maxRank: GetMaxRank(new RankArray(filteredBadges)),
    };

    return output;
  });
};

/* ---------------------------- */

/**
 *
 * @param badgesInfo ランク情報のオブジェクト
 */
const GetMaxRank = (badgesInfo: RankArray) => {
  const data = badgesInfo.toArray();
  const rankValues: number[] = [];
  data.forEach((element: Rank) => {
    rankValues.push(element.value);
  });

  // ランクバッジのvalueが最大で15のため
  const maxRank = rankValues
    .filter((rankValue) => rankValue < 16)
    .reduce((value1: number, value2: number) => Math.max(value1, value2));

  switch (maxRank) {
    case 1:
      return "ランク経験なし";
    case 2:
    case 3:
      return "ブロンズ";
    case 4:
    case 5:
      return "シルバー";
    case 6:
    case 7:
      return "ゴールド";
    case 8:
    case 9:
      return "プラチナ";
    case 10:
    case 11:
      return "ダイヤ";
    case 12:
    case 13:
      return "マスター";
    case 14:
    case 15:
      return "プレデター";
    default:
      return "計測不能";
  }
};

export default FetchUserInfo;
