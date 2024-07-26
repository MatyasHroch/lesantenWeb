import fs from "fs";
import { renderAll } from "./processer.js";

async function renderEverything() {
  try {
    const dataModule = await import("../data.js");
    const data = dataModule.default;
    const result = await renderAll(data);
    const index = fs.readFileSync("./index.html", "utf8");

    if (result !== index) {
      // write it to the result file
      fs.writeFileSync("./index.html", result);
    }
  } catch (error) {
    console.error(error);
  }
}

setInterval(renderEverything, 5000);

export { renderEverything };
