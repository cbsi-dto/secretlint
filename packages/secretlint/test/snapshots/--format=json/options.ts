import { cli } from "../../../src/cli.js";

export const options: Partial<typeof cli.flags> = {
    format: "json",
};
