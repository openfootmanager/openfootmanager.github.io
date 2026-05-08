---
title: "为什么我们用 Rust 重写了一切"
description: "讲讲我们为什么决定把 Openfoot Manager 从 Python 重写到 Rust，以及这对项目未来意味着什么。"
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["开发笔记", "rust"]
image: "/trophycrowd.jpg"
lang: "zh-cn"
---

在 Openfoot Manager 的历史上，最重要的决定之一，就是把整个游戏引擎从 Python 重写为 Rust，并在前端使用 React。下面就是我们为什么这么做、我们得到了什么，以及接下来会走向哪里。

## 项目的开端

Openfoot Manager 最初在 2020 年是一个 Python 项目。对我来说，Python 是很自然的选择：它容易上手、生态丰富，也是我当时最熟悉、最喜欢书写，并且很喜欢其社区的一门语言。

在我还不太清楚自己到底在做什么的时候，我就做出了一些早期原型。我抛出了很多想法，希望构建一个扎实的比赛模拟系统，而它们确实有些是有效的，但要把它发展成一个功能完整的项目，挑战真的很大。

当我开始做第一个 MVP 时，我面前有几种 GUI 方案可选。我不想用任何 JS 前端框架（过去我对 JavaScript 的体验不太好），所以项目的第一版最后用了 [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/)。

我当时还在做另一个项目，用的是 [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/)，所以这次我想换点新花样。

结果发现，用 ttk 组件工作真的很痛苦。我不得不给自己造一些组件，同时还得拼命研究怎么实现那些我认为很基础的需求。后端部分倒没有那么难：花了一些时间后，我还是搭建出了一个可以为比赛模拟引擎生成数据的引擎。经过长时间实验，我也做出了一个足够不错的比赛模拟引擎。

但 GUI 是我特别想在不借助 JS 的前提下解决的问题。我几乎把能试的都试了。我试过 [**Qt**](https://www.qt.io/)，但也没觉得愉快。后来我更是走上了一条非常狂野的路：我尝试了 [**Flask**](https://flask.palletsprojects.com/) 后端，前端用 Jinja2 模板渲染 HTML，并且为了模仿 React 的行为，我还用上了 [**HTMX**](https://htmx.org/) 和 [**AlpineJS**](https://alpinejs.dev/)。

再后来，我又放弃了 Flask，转向 [**FastAPI**](https://fastapi.tiangolo.com/)，并把整个后端重写成基于 [**SQLModel**](https://sqlmodel.tiangolo.com/) 的实现，而它本身是 [**Pydantic**](https://pydantic-docs.helpmanual.io/) 和 [**SQLAlchemy**](https://www.sqlalchemy.org/) 的结合。样式方面，我则用了 [**Tailwindcss**](https://tailwindcss.com/)。

而最离谱的一层是，为了获得我想要的桌面体验，我还用了 [**Pywebview**](https://pywebview.flowrl.com/)，并且需要 [**uvicorn**](https://www.uvicorn.org/) 来提供 FastAPI 所需的 Web 服务器，让它和 Pywebview 联动。

结果证明，这套弗兰肯斯坦式方案根本一点都不好维护。我意识到自己正在掉进亲手挖的坑里，而不是在让事情变简单。要让 Pywebview 拿到足够好的性能非常困难，而把这个应用打包成桌面程序这件事，我甚至都不知道该怎么真正做好。我差点就准备直接告诉大家：你们自己启动服务器，然后在浏览器里打开游戏，就这样吧。

我后来也试过让 Python 和 React 一起工作，但无论是开发体验还是用户体验，都谈不上好。

## Rust 来救场

我已经写 Rust 有一段时间了。这是一门非常强大但也很较真的语言。尽管一开始要把某些事情写对并不轻松，我依然很喜欢它。它能提供无与伦比的性能，而且围绕我所看重的那些方向，也有一个非常投入的社区。

[**Tauri**](https://tauri.app/) 是我最感兴趣的项目之一。如果我想避免使用 Electron 这类和 JS 强绑定的技术，它看起来就是最合理的路线。

我最初的想法，是前端也用 [**Leptos**](https://leptos.dev/) 配合 **Tauri**，做一整套 **纯 Rust 技术栈**。但它比我预想的难得多。Rust 做前端很强大，但并不愉快。

所以，我最后选择了更容易落地的路线：保留 Rust 在后端的性能和威力，继续使用 Tauri，而前端则改用 **React**。这样一来，我也不需要自己写太多 React 代码。最近 AI 在前端开发上确实帮了很大的忙，尤其是在样板代码和我讨厌写的那些重复工作上。而且它在样式和这类事情上表现得真的不错。

这就是一次完美的搭配。

## 我们从中得到了什么

走到这里以后，整个过程到底有多艰难，其实已经很明显了。出于对 Python 的热爱，我真的尽了最大努力想让它跑通。总有一天，我还是想用 Python 写出一个像样的项目。

但最后，我们还是放弃了那个庞大的 FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn 怪物方案，换成了更简洁的 Tauri + Rust + React。简单得多，也更稳健、更经得起实际使用检验。

我不仅找回了 sanity，也获得了更强的稳定性、更好的性能，以及对最终用户来说明显更好的整体体验。对开发者而言，理解和参与这个项目也变得容易得多。

在旧技术栈里，你必须先用 [**uv**](https://docs.astral.sh/uv/) 来初始化项目、安装依赖，然后运行我准备的一些脚本，分别启动服务器和前端。

而在新技术栈下，你仍然需要安装 Rust 和 NodeJS，但只要运行 `npm run tauri dev`，开发所需的一切就会一起启动，并且还支持热重载（旧方案甚至没有这个能力）。这才是真正美好的开发体验。

## 展望未来

Rust 重写并不只是一次技术升级，它更是我们想要构建的一切的基础。更扎实的底层、更稳定的性能、更好的开发体验，以及面向最终用户的漂亮 UI，都建立在这个基础之上。

这款游戏仍然处于早期开发阶段，但它的基础已经很稳固。我们对接下来要发生的一切都非常期待。