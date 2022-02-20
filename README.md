<div id="top"></div>

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103&style=plastic)](https://opensource.org/)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/watsuyo/notion-rss-reader/blob/master/LICENSE)

[![Issues](https://img.shields.io/github/issues-raw/watsuyo/notion-rss-reader.svg?maxAge=25000&style=plastic)](https://github.com/watsuyo/notion-rss-reader/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/cdnjs/cdnjs.svg?style=plastic)](https://github.com/watsuyo/notion-rss-reader/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/watsuyo/notion-rss-reader.svg?style=plastic)](https://github.com/watsuyo/notion-rss-reader/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/watsuyo/notion-rss-reader.svg?style=social&label=Stars&style=plastic)](https://github.com/watsuyo/notion-rss-reader/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/watsuyo/notion-rss-reader.svg?style=social&label=Watch&style=plastic)](https://github.com/watsuyo/notion-rss-reader/watchers)
[![GitHub forks](https://img.shields.io/github/forks/watsuyo/notion-rss-reader.svg?style=social&label=Fork&style=plastic)](https://github.com/watsuyo/notion-rss-reader/fork)

[![Twitter Follow](https://img.shields.io/twitter/follow/n_rss_r.svg?style=social)](https://twitter.com/intent/follow?screen_name=n_rss_r)

<div align="center">
  <h1>Notion RSS Reader 🎁</h1>
</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/13050604/153710070-771f3912-7a53-49cb-aea1-4e71f875886c.png" alt="Logo" width="300px">
</div>

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://bit.ly/3Jpi4h7)

## You can save articles from your favorite sites in the Notion Database👍

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-notion-rss-reader">About Notion RSS Reader</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About Notion RSS Reader

![Notion RSS Reader Screen Shot](https://i.gyazo.com/30fe441f5d9f29743511f678f830f3ce.png)

<!-- Notion RSS Readerは、GitHubとNotionを組み合わせたウェブサービスで、好きなサイトの記事を無料で毎時間取得し、好きなだけ保存することができます! -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

1. Fork the Project

	You will use GitHub Actions to feed updates to the article. Therefore, you will need to Fork into your repository.

<!-- 記事の更新をフィードするために、GitHub Actions を使用する予定です。そのため、リポジトリに Fork しておく必要があります。 -->

2. Duplicate [Notion RSS Reader Template 🎁](https://bit.ly/3sqjKjK)

    Duplicate `Notion RSS Reader Template` in your workspace.

<!--   Notion RSS Reader Templateをあなたのワークスペースに複製する -->

3. Get `NOTION_FEEDER_DATABASE_ID` & `NOTION_READER_DATABASE_ID`

	URL contains DATABASE_ID.

	<!-- URLはDATABASE_IDを含んでいます -->

	Example: `https://notion.site/${DATABASE_ID}?v=********`

4. Get `NOTION_KEY`(Internal Integration Token)

	Go to Notion's `My integrations` page and set up an integration for `Notion RSS Reader`.

	<img src="https://i.gyazo.com/a5ce72d2f1825bf0baa37398caf97d5b.png" width="50%">

	<!-- NotionのMy integrationsページにて、Notion RSS Reader用のintegrationを設定します -->

5. Add `NOTION_FEEDER_DATABASE_ID`, `NOTION_READER_DATABASE_ID`, and `NOTION_KEY` to GitHub Actions Secrets.

	<!-- GitHub Actions Secretsに、NOTION_FEEDER_DATABASE_ID, NOTION_READER_DATABASE_ID, NOTION_KEYを追加してください。 -->

	`Settings` → `Actions`→ `Repository Secrets`

	![](https://i.gyazo.com/1fb8c0c9181375a746870d45d10dd244.png)

6. Set the interval to get site updates.

	 **Default interval, every hour.**

	`.github/workflows/feed.yml`

	```feed.yml
    on:
      schedule:
        - cron: "0 * * * *" # UTC ← Fix this!
      workflow_dispatch:
	```

	Reference: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onschedule

7. Enable to "GitHub Actions Workflow" and delete the release workflow file.

	For more information, please click [here](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow#enabling-a-workflow). 
	
	Workflow file is only required in the original repository.

8. Add a link to the site you want to get updates from to "Notion's Feeder database".

	![Feeder](https://i.gyazo.com/66ed647bd229354776f626560baf9307.png)
	
9. Turn on 「Can edit」at Feader & Reader in Notion page and invite with the name of the integration you set in 4.

	This setting needs to be made for both Feader and Reader.

	<img width="368" alt="image" src="https://user-images.githubusercontent.com/13050604/153715571-fe4f7cf2-251d-4f72-b942-04a3353489b2.png">

10. You can check if the settings are complete by doing a "Feed Cron" from the "Actions" tab.

	![image](https://user-images.githubusercontent.com/13050604/153716048-5c441a1f-835e-4199-9009-8d3aad0256c3.png)
	

<!-- ROADMAP -->
## Roadmap

- [x] How to use `Notion RSS Reader`
- [ ] [Feedly integration](https://github.com/watsuyo/notion-rss-reader/issues/5)
- [ ] [Awesome Browser UI](https://github.com/watsuyo/notion-rss-reader/issues/4)

	etc...

See the [open issues](https://bit.ly/361C6zX) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
if you like it, to give the project a star! Thanks again!

1. Fork the "Project"
2. Create your "Feature Branch" (`git checkout -b feature/AmazingFeature`)
3. Commit your "Changes" (`git commit -m 'Add some AmazingFeature'`)
4. Push to the "Branch" (`git push origin feature/AmazingFeature`)
5. Open a "Pull Request"

<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites

* yarn v1
* Node v14

The author has confirmed that it works with these versions.

<!-- 必ずしも作者のローカル環境と同じである必要はないです。 -->

### Installation

1. Clone the repo

   ```sh
   git clone git@github.com:watsuyo/notion-rss-reader.git
   ```

2. Install YARN packages

   ```sh
   yarn install
   ```

3. Add `NOTION_FEEDER_DATABASE_ID`, `NOTION_READER_DATABASE_ID`, and `NOTION_KEY` to the `.env` file.

	```.env
	NOTION_KEY=secret_************
	NOTION_FEEDER_DATABASE_ID=************
	NOTION_READER_DATABASE_ID=************
	```

4. Local run
	```sh
	yarn build
	yarn feed
	```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

watsuyo - [@watsuyo_2](https://bit.ly/3gzFAfa)

Project Link: [https://github.com/watsuyo/notion-rss-reader/](https://bit.ly/3GFCIYq)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DONATE -->
## Donate
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://bit.ly/3Jpi4h7)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/watsuyo/notion-rss-reader.svg?style=for-the-badge
[contributors-url]: https://github.com/watsuyo/notion-rss-reader/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/watsuyo/notion-rss-reader.svg?style=for-the-badge
[forks-url]: https://github.com/watsuyo/notion-rss-reader/network/members
[stars-shield]: https://img.shields.io/github/stars/watsuyo/notion-rss-reader.svg?style=for-the-badge
[stars-url]: https://github.com/watsuyo/notion-rss-reader/stargazers
[issues-shield]: https://img.shields.io/github/issues/watsuyo/notion-rss-reader.svg?style=for-the-badge
[issues-url]: https://github.com/watsuyo/notion-rss-reader/issues
[license-shield]: https://img.shields.io/github/license/watsuyo/notion-rss-reader.svg?style=for-the-badge
[license-url]: https://github.com/watsuyo/notion-rss-reader/blob/master/LICENSE
