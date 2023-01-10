import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { RankArray } from "./RankArray";
import { Rank } from "./Rank";

const url: string = "https://api.mozambiquehe.re";
const api_key: string = "";
const platform: string = "";
const player_name: string = "";
const options: AxiosRequestConfig = {
    url: `${url}/bridge?auth=${api_key}&player=${player_name}&platform=${platform}`,
    method: "GET",
}

axios(options)
    .then((result) => {
        const data = result.data;
        const filteredBadges = data.global.badges.filter((element: any) => {
            return element.name.includes("You're Tiering Me Apart: Ranked Season");
        });

        console.log(`プレイヤー名: ${data.global.name}`);
        console.log(`UID: ${data.global.uid}`);
        console.log(`現在のランク: ${data.global.rank.rankName}${data.global.rank.rankDiv} ${data.global.rank.rankScore}`);

        getMaxRank(new RankArray(filteredBadges));
    })
    .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message);
    });

/* ---------------------------- */

/**
 *
 * @param badgesInfo ランク情報の配列
 */
function getMaxRank(badgesInfo: RankArray) {
    const data = badgesInfo.toArray();
    const rankValues: number[] = [];
    data.forEach((element: Rank) => {
        rankValues.push(element.value);
    });

    const maxRank = rankValues.reduce((value1: number, value2: number) => Math.max(value1, value2));

    switch (maxRank) {
        case 1:
            console.log('ランク経験なし');
            break;
        case 2:
        case 3:
            console.log('最高ランク: ブロンズ');
            break;
        case 4:
        case 5:
            console.log('最高ランク: シルバー');
            break;
        case 6:
        case 7:
            console.log('最高ランク: ゴールド');
            break;
        case 8:
        case 9:
            console.log('最高ランク: プラチナ');
            break;
        case 10:
        case 11:
            console.log('最高ランク: ダイヤ');
            break;
        case 12:
        case 13:
            console.log('最高ランク: マスター');
            break;
        case 14:
        case 15:
            console.log('最高ランク: プレデター');
            break;
        default:
            console.warn('計測不能');
            break;
    }
};