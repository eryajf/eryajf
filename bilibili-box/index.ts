import config from "./config.ts";
import { cutString, intToString } from "./utils.ts";
import { sprintf } from "https://deno.land/x/std/fmt/printf.ts";

const biliApiUrl = `https://api.bilibili.com/x/space/arc/search?mid=${config.uid}&ps=5&pn=1`;
const gistApiUrl = `https://api.github.com/gists/${config.gistId}`;
interface VList {
  comment: number;
  play: number;
  title: string;
  bvid: string;
}

async function getVList() {
  const data = await fetch(biliApiUrl);
  const json = await data.json();
  const vList = json.data.list.vlist as VList[];
  return vList;
}

async function getRequestData() {
  const vList = await getVList();
  let titleContent = "";
  let mdContent = "";
  vList.forEach((v) => {
    const title = cutString(v.title, 35);
    const url = `https://www.bilibili.com/video/${v.bvid}`;
    const play = intToString(v.play);
    const comment = intToString(v.comment);
    titleContent += sprintf("%s ▶️:%-3s 💬:%-3s", title, play, comment) + "\n";
    mdContent +=
      sprintf("[%s](%s) ▶️:%-3s 💬:%-3s", title, url, play, comment) + "\n\n";
  });
  return {
    description: "My Latest BiliBili videos 👇",
    files: {
      latest_videos: { content: titleContent },
      "latest_videos.md": { content: mdContent },
    },
  };
}

async function updateGist() {
  const data = await getRequestData();
  const response = await fetch(gistApiUrl, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      Authorization: `token ${config.ghToken}`,
      Accept: "application/json",
    },
  });
  const status = await response.status;
  if (status === 200) {
    console.log('Update gist success!');
  } else {
    throw new Error("Update gist fail!")
  }
}

async function run(func:Function){
  if (!config.ghToken){
    throw new Error('Please set GH_TOKEN environment variable first!')
  }
  if (!config.gistId){
    throw new Error('Please edit GIST_ID environment variable first!')
  }
  if (!config.uid){
    throw new Error('Please edit UID environment variable first!')
  }
  await func();
}

await run(updateGist)
