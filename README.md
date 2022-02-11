<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] -->

<div align="center">
  <h1 align="center">Notion RSS Reader 🎁</h1>
</div>

`Notion RSS Reader` is a web service that combines GitHub and Notion to allow you to retrieve articles from your favorite sites for free, every hour, and store them for as long as you want!

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
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
## About The Project

![Notion RSS Reader Screen Shot](https://i.gyazo.com/30fe441f5d9f29743511f678f830f3ce.png)

<!-- Notion RSS Readerは、GitHubとNotionを組み合わせたウェブサービスで、好きなサイトの記事を無料で毎時間取得し、好きなだけ保存することができます! -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

1. Fork the Project

	We will use GitHub Actions to feed updates to the article. Therefore, you will need to Fork into your repository

<!-- 記事の更新をフィードするために、GitHub Actions を使用する予定です。そのため、リポジトリに Fork しておく必要があります。 -->

2. Duplicate [Notion RSS Reader Template 🎁](https://bit.ly/3sqjKjK)

    Duplicate `Notion RSS Reader Template` in your workspace.

<!--   Notion RSS Reader Templateをあなたのワークスペースに複製する -->

3. Get `READER_DATABASE_ID` & `NOTION_READER_DATABASE_ID`

	DATABASE_ID is included in the URL of the replicated database page.

	<!-- DATABASE_IDは、複製されたデータベースページのURLに含まれています -->

	Example: `https://notion.site/${DATABASE_ID}?v=********`

4. Get `NOTION_KEY`(Internal Integration Token)

	Go to Notion's `My integrations` page and set up an integration for `Notion RSS Reader`.

	<img src="https://i.gyazo.com/a5ce72d2f1825bf0baa37398caf97d5b.png" width="50%">

	<!-- NotionのMy integrationsページにて、Notion RSS Reader用のintegrationを設定します -->

5. Add `READER_DATABASE_ID`, `NOTION_READER_DATABASE_ID`, and `NOTION_KEY` to GitHub Actions Secrets.

	<!-- GitHub Actions Secretsに、READER_DATABASE_ID, NOTION_READER_DATABASE_ID, NOTION_KEYを追加してください。 -->

	`Settings` → `Actions`→ `Repository Secrets`

	![](https://i.gyazo.com/1fb8c0c9181375a746870d45d10dd244.png)

6. Set the interval to get site updates.

	 **Default interval is every hour.**

	`.github/workflows/feed.yml`

	```feed.yml
    on:
      schedule:
        - cron: "0 * * * *" # UTC ← Fix this!
      workflow_dispatch:
	```

	Reference: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onschedule

7. Add a link to the site you want to get updates from to Notion's Feeder database.

	![Feeder](https://i.gyazo.com/66ed647bd229354776f626560baf9307.png)

<!-- ROADMAP -->
## Roadmap

- [x] How to use `Notion RSS Reader`
- [ ] Add Changelog
- [ ] Awesome Browser UI

	etc...

See the [open issues](https://bit.ly/361C6zX) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites

* yarn v1
* Node v14

It does not necessarily have to be the same as the author's local environment.

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

3. Add `READER_DATABASE_ID`, `NOTION_READER_DATABASE_ID`, and `NOTION_KEY` to the `.env` file.

	```.env
	NOTION_KEY=secret_************
	NOTION_FEEDER_DATABASE_ID=************
	NOTION_READER_DATABASE_ID=************
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
