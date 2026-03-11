---
title: "Openfoot Manager v0.1.2-alpha - Fixing a big mistake"
description: "Oops, we made a big mistake in the previous release. Here's the fix."
pubDate: 2026-03-10T21:04:00.000Z
author: "Sturdy Robot"
tags: ["release", "announcement", "patch", "bug fixes"]
image: "/images/features/manage_squad.png"
---

Before we released v0.1.1-alpha, I was testing things to make sure everything was working as expected. I found a few issues, fixed them, and we shipped v0.1.1. But what I thought was fixed apparently had a deeper cause, and in the end, v0.1.1-alpha shipped with a critical bug that prevented you from starting a new game.

There is a workaround for this issue, but it's not ideal. I know people are going to complain about it, so I'd rather fix it now. I thought about releasing a hotfix, pulling the old downloads, and re-releasing it like nothing happened. But that wouldn't be right. I have to own my mistakes and deal with the consequences. So I bumped the release to 0.1.2-alpha. I could technically call it 0.1.1.1, but according to [SemVer](https://semver.org/), that wouldn't be correct.

Well, here's what was going on:

- The new nationality combobox we added was behaving in a very weird way. Sometimes it let you select a country, and sometimes it didn't.
- I thought I knew how to fix it, and I wrote some tests to stop it from happening again. I couldn't reproduce it anymore, so I called it a day.
- But the problem went much deeper than that. It turned out there was a weird interaction between the month combobox and the nationality combobox. If you opened the month combobox first, the nationality combobox wouldn't let you select any countries. Once I understood the real issue, I was finally able to fix it, but v0.1.1 was already out.
- Then I decided to test the game on Windows, and I got a nasty surprise: country flags weren't supported there. Real bummer. It worked on Linux and macOS, but I forgot to test on the biggest platform of them all. So I had to add third-party dependencies to provide country flags on every platform. Hopefully that fixes it.

Yeah, it's a small release, but if you can't select your nationality, you can't start a new game. And if you don't know that opening the month combobox first is what breaks it, you're just going to get stuck and frustrated because I made the silly mistake of not checking it properly.

It happens.

But now it's fixed! (I hope so.)

Sorry for the inconvenience. You can download the new version now on the [download page](/download).

Thank you so much for your support!

See ya in the next one!