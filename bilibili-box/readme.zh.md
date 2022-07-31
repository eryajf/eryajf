<p align="center">
  <img width="400" src="./image/demo.png">
  <h3 align="center">Bilibili-box</h3>
  <p align="center">将你的B站最新投稿显示在 pined gist。</p>
</p>

---

> 📌✨ 还有更多类似本仓库的 pinned-gist 项目，在这里: https://github.com/matchai/awesome-pinned-gists

## Setup

[English](./readme.md) | 中文


### Prep work

1. 创建新公开 GitHub Gist (https://gist.github.com/)
1. 创建新的 access token ，确保勾选 `gist` 然后复制它. (https://github.com/settings/tokens/new)
1. 在B站个人空间的链接中找到 UID (https://space.bilibili.com/37728693)


### Project setup

1. 复刻本仓库
1. 编辑[环境变量](https://github.com/KeJunMao/bilibili-box/blob/master/.github/workflows/main.yml#L27-L28)文件 `.github/workflows/schedule.yml`:

   - **UID:** B站用户标示.
   - **GIST_ID:** 你的 gist url 的 ID: `https://gist.github.com/matchai/`**`6d5f84419863089a167387da62dd7081`**.

1. 前往仓库的 **Settings > Secrets**
1. 添加以下环境变量:
   - **GH_TOKEN:** 刚刚复制好的 access token

本项目受 [youtube-box](https://github.com/SinaKhalili/youtube-box) 启发
