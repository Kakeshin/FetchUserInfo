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
        console.log(`プレイヤー名: ${data.global.name}`);
        console.log(`UID: ${data.global.uid}`);
        console.log(`現在のランク: ${data.global.rank.rankName}${data.global.rank.rankDiv} ${data.global.rank.rankScore}`);
        console.log(`取得バッジ`);

        getMaxRank(new RankArray(data.global.badges));
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
        case 0:
            console.log('ランク経験なし');
            break;
        case 1:
        case 2:
            console.log('ブロンズ');
            break;
        case 3:
        case 4:
            console.log('シルバー');
            break;
        case 5:
        case 6:
            console.log('ゴールド');
            break;
        case 7:
        case 8:
            console.log('プラチナ');
            break;
        case 9:
        case 10:
            console.log('ダイヤ');
            break;
        case 11:
        case 12:
            console.log('マスター');
            break;
        case 13:
        case 14:
            console.log('プレデター');
            break;
        default:
            console.warn('計測不能');
            break;
    }
};