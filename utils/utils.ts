import { v4 as uuidv4 } from "uuid";
import {
  adjectives,
  animals,
  colors,
  Config,
  countries,
  languages,
  names,
  starWars,
  uniqueNamesGenerator,
} from "unique-names-generator";

export default class Utils {
  async generateRandomString(length: number): Promise<string> {
    const characters: string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result: string = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  async generateRandomNumber(maxNum: number): Promise<number> {
    const characters = "0123456789";
    let number = "";
    for (let i = 0; i < maxNum; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      number += characters.charAt(randomIndex);
    }
    const result = Number(number);

    return result;
  }

  async randomId(maxNum: number): Promise<number> {
    const number = (await this.generateRandomNumber(maxNum)) + 10000000;

    return number;
  }

  async generateRandomUuid(): Promise<string> {
    return uuidv4();
  }

  private nameConfig: Config = {
    dictionaries: [
      adjectives,
      colors,
      animals,
      countries,
      names,
      languages,
      starWars,
    ],
    separator: "_",
    length: 3,
  };

  private date = new Date();

  async generateRandomName(): Promise<string> {
    return (
      uniqueNamesGenerator(this.nameConfig) +
      `_test_automation_${this.date.toDateString()}`
    );
  }
}
