---
title: "Openfoot Manager v0.1.0-alpha Is Here"
description: "The first public alpha release of Openfoot Manager is finally available. Here's what you can expect, what's in it, and what's still missing."
pubDate: 2026-03-02T16:54:00.000Z
author: "Sturdy Robot"
tags: ["release", "announcement"]
image: "/crowd.jpg"
---

I can't believe I'm actually writing this.

After years of tinkering, rewriting, throwing things away and starting over, **Openfoot Manager v0.1.0-alpha** is finally out there for people to download and play. It's not perfect — far from it, actually — but it's real, it runs, and you can manage a football club in it. That alone feels like a small miracle to me.

## A little bit of context

If you've been following this project, you know the story: this whole thing started back in 2020 as a Python hobby project. I just wanted to build a football manager game that was free, open-source, and fun. Something that didn't require you to spend money, didn't need an internet connection, and that you could mod however you wanted.

It took a lot of detours to get here. Python prototypes, GUI framework nightmares, a complete rewrite in Rust, learning React along the way... it's been a journey. But here we are.

## So what can you actually do in the game?

Let me walk you through what's working right now:

- **Pick a club and manage it.** You start the game, choose a team, and you're the manager. Simple as that.
- **Set up your squad.** Choose your formation, pick your starting eleven, assign set piece takers, and set your tactical style (attacking, defensive, balanced, counter-attack, possession).
- **Watch matches unfold.** The match engine simulates games minute by minute with a broadcast-style interface. You'll see goals, cards, substitutions, injuries, and all the drama you'd expect. You can speed things up or slow them down.
- **Train your players.** There are 6 training focuses and 3 intensity levels. Young players grow faster, older players decline. Your coaching staff influences how effective training is.
- **Hire and manage staff.** Coaches, physios, scouts — each with their own specializations and skill levels. They matter.
- **Handle your finances.** You've got a budget, wages to pay, and you need to keep things sustainable. Go broke and... well, don't go broke.
- **Buy and sell players.** The transfer market is there. You can buy players, sell them, loan them in, loan them out. AI clubs make their own moves too.
- **Follow the league.** A 16-team league with a double round-robin format. Standings, fixtures, results — it's all there.
- **Read the news.** The game generates match reports, transfer rumors, injury updates, and other bits of news to keep you immersed.
- **Mod the game.** All game data lives in external JSON files. Want to create your own league with your own teams and players? Go for it.

And the whole thing is **fully localized in 6 languages**: English, Brazilian Portuguese, European Portuguese, Spanish, French, and German.

## What's NOT in the game (yet)

Let me be honest about what's missing. This is an alpha, and it shows:

- **No cup competitions.** It's just the league for now.
- **No youth academy.** You can't develop young talent through an academy system yet.
- **No player interactions.** Players don't come to you with complaints or requests.
- **No detailed scouting.** Scouts exist, but the scouting system is pretty basic. You can't send scouts to watch specific players or leagues yet.
- **No 3D match viewer.** Matches are text-based with a broadcast UI. No pitch visualization yet.
- **No tutorials.** You'll need to figure things out on your own for a bit. Sorry about that.

There's also likely going to be bugs. Probably quite a few of them. Save files from this version might not work with future releases either. That's the reality of an alpha.

## Why release it now?

Because if I kept waiting for it to be "ready," I'd never release it. At some point you just have to put it out there and let people try it. The core gameplay loop works: you manage a club, you play matches, you make decisions, and those decisions have consequences. That's enough to start.

I also really want feedback. I've been looking at this thing for so long that I can't see it clearly anymore. Fresh eyes will catch things I've missed and help me understand what to focus on next.

## What's next?

The plan is to keep iterating. Cup competitions are probably the next big feature. I also want to improve the AI managers, add more depth to scouting, and generally polish everything.

If you want to follow along, star the [GitHub repository](https://github.com/openfootmanager/openfootmanager). If you find bugs — and you will — please [open an issue](https://github.com/openfootmanager/openfootmanager/issues). If you want to contribute code, translations, custom databases, or anything else, check out the [contributing guide](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).

## Download it

Head over to the [download page](/download) to grab the game for Windows, macOS, or Linux.

Thanks for being here. Seriously. Even if you just downloaded it to try it for five minutes, that means the world to me. Let's see where this goes.
