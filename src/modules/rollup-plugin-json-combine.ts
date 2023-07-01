import fse from 'fs-extra';
import {glob} from 'glob';
import {FileNamesType, JsonCombineParams} from "@/types";

const name = 'jsonCombine';

const getContentChunks = (input: any[]): Promise<any> => {
  return Promise.all(
    input
      .filter((item: any) => item != null)
      .map(async (item: any, index: number) =>
        typeof item === 'string'
          ? (
            await glob(item)
              .then((filenames: string[]) =>
                Promise.all(
                  filenames.map((filename: string): FileNamesType => {
                    const name = filename
                      .split('/')
                      .pop()
                      .replace('.json', '');

                    let data = fse.readJSON(filename);

                    return data
                      .then((res: any) => {
                        return {
                          name,
                          res
                        };
                      });
                  })
                )
              )
          ) : (
            Promise.resolve(index === 0 ? JSON.parse(JSON.stringify(item)) : item)
          )
      )
  ).then((items) => items.flat().filter((item) => item != null));
};

export default function jsonCombine(
  {
    input = [''],
    fileName = 'output.json',
    merge = (items: object): object => Object.assign([...items]),
  }: JsonCombineParams = {}) {
  return {
    name,
    buildStart: {
      sequential: true,
      async handler() {
        const chunks = await getContentChunks(
          typeof input === 'string' ? [input] : input
        );
        const merged = chunks.length ? merge(chunks) : undefined;
        await fse.outputJson(fileName, JSON.stringify(merged, null, 4), {
          spaces: 2,
          EOL: undefined,
        });
      },
    },
  };
}
