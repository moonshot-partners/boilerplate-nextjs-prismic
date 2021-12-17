# Go1 SEO Resource Hub

[![Slack](https://img.shields.io/badge/Slack-4A154B?style=flat&logo=slack&logoColor=white)](https://moonshotpartners.slack.com/archives/C01MYF3N7FV)

## Requirement

- Node.js 12.22.0 or later
- MacOS, Windows (including WSL), and Linux are supported

[more info](https://nextjs.org/docs/getting-started)

## Basic commands

- Install dependencies run `npm install`
- Run Unit Test run `npm test`
- Run in local `npm run dev`
- Run linter `npm run lint`

## Folder structure

- .next: NextJs build default folder
- helper: Helper and utils function used in all project
- in: Source data in format md, it have specific folder to Content provider (cp), Learning Object (lo) and Playlist (playlist), to execute a successful build you need copy md files at the source folder
- out: Save static page after build process with their sitemap and assets
- public: resources and assets
- src: source code

## Build command

You can perform a build by operative system, available command are:

#### To execute on dev enviroment

- `npm run dev-static:linux`
- `npm run dev-static:windows`

#### To execute on production enviroment

- `npm run build:linux`
- `npm run build:windows`

#### steps

1- Run `npm run build-static`
2- Static pages were builded on folder /out/

#### Repair index page

- `npm run repair-index`

## Deploy options

SEO Resource hub page use gitlab ci https://code.go1.com.au/go1-seo/go1-moonshot-nextjs-plugin/-/pipelines
The plugin has the following types of deploy
[more info](https://docs.gitlab.com/ee/ci/quick_start/)

### Main gitworkflow

Making a merge request with your changes to the following branches you can deploy to develop, staging and production enviroments, when the merge request is approved and merged, the deploy start automatically

- develop: This deploy is performed in Moonshot AWS, use S3 Bucket (go1-seo-content). the url is https://d2og0a2uaw207o.cloudfront.net/resources-hub/index.html
- staging: This deploy is performed in GO1 Azure, use blob storage (go1moonshotuat). the url is https://website.qa.go1.cloud/resources/hub/
- master: This deploy is performed in GO1 Azure, use blob storage (go1moonshot). the url is https://www.go1.com/resources/hub/

#### Manual deploy:

1- Open the project on gitlab https://code.go1.com.au/go1-seo/seo-prismic
2- Enter on CI/CD menu option and press pipelines https://code.go1.com.au/go1-seo/seo-prismic/-/pipelines
3- Press run pipeline button https://code.go1.com.au/go1-seo/seo-prismic/-/pipelines/new
4- Select your branch following the gitworkflow to target a enviroment
5- Press Run Pipeline

## Code practice

We have best practice to code, those are describe on confluence
https://go1web.atlassian.net/wiki/spaces/MSEO/pages/2193096748/Component+Development+Best+Practices

## Git workflow

[develop lifecycle](https://go1web.atlassian.net/wiki/spaces/MSEO/pages/2060420489/Development+Lifecycle)
[release lifecycle](https://go1web.atlassian.net/wiki/spaces/MSEO/pages/2061992005/Release+lifecycle)
