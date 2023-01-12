import { Rank } from "./Rank";

export class RankArray {
  private array: [];

  constructor(array: []) {
    this.array = array;
  }

  /**
   *
   * @returns Rankオブジェクトの配列
   */
  public toArray(): Rank[] {
    const entities: Rank[] = [];

    this.array.forEach((element: any) => {
      const data: Rank = {
        season: element.name,
        value: element.value,
      };
      entities.push(data);
    });

    return entities;
  }
}
