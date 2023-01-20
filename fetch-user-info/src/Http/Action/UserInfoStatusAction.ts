import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Inputs from "../../Entities/InputInterface";
import OutputInterface from "../../Entities/OutputInterface";
import { Badge, ResponseInterface } from "../../Entities/ResponseInterface";

/**
 *
 * @param inputs Inputs
 * @returns Promise<OutputInterface>
 */
const userInfoStatusAction = (inputs: Inputs): Promise<OutputInterface> => {
  const options: AxiosRequestConfig = {
    url: `https://api.mozambiquehe.re/bridge?auth=${inputs.apiKey}&player=${inputs.userName}&platform=${inputs.platform}`,
    method: "GET",
  };

  return axios(options).then((response: AxiosResponse<ResponseInterface>) => {
    const data = response.data;
    const filteredBadges = data.global.badges?.filter((element: Badge) => {
      return element.name.includes("You're Tiering Me Apart: Ranked Season");
    });

    const output: OutputInterface = {
      userName: data.global.name,
      uid: data.global.uid,
      nowRank: `${data.global.rank.rankName}${data.global.rank.rankDiv} ${data.global.rank.rankScore}`,
      maxRank: rankValueToString(getMaxRank(filteredBadges ?? [])),
    };
    return output;
  });
};

/**
 *
 * @param badges Badge
 * @returns 最大ランクの値
 */
const getMaxRank = (badges: Badge[]): number => {
  // ランクバッジのvalueが最大で15のため
  const [maxRank] =
    badges.length > 0
      ? badges
          .map((badge) => badge.value)
          .filter((rankValue) => rankValue < 16)
          .sort((lhs, rhs) => (lhs < rhs ? 1 : -1))
      : [-1];

  return maxRank;
};

/**
 *
 * @param maxRankValue 最高ランクの値
 * @returns ランクの文字列
 */
const rankValueToString = (maxRankValue: number): string => {
  switch (maxRankValue) {
    case -1:
      return "バッジなし";
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

export default userInfoStatusAction;
