---
title: "Openfoot Manager v0.1.1-alpha Release"
description: "A new version drops, this time with bug fixes, a few new features, and some polished rough edges."
pubDate: 2026-03-10T16:51:00.000Z
author: "Sturdy Robot"
tags: ["release", "announcement", "patch", "bug fixes"]
image: "/images/features/manage_squad.png"
---

It's been a little more than one week since our first public release, and we already have a new patch! Not bad, huh?

This time, we're bringing some bug fixes, a few major code changes, and the kind of UI improvements we always like to see. Let's start with the big changes, shall we?

And before we jump in: **ciao ragazzi, benvenuti su Openfoot Manager! Speriamo che vi divertiate un sacco**.

## Italian language support

This release also adds Italian language support to the game.

If you're playing in Italian, welcome aboard. We're really happy to have you here.

As always, if you spot awkward wording, missing strings, or anything else that feels off, let us know. Translation feedback helps a lot, especially this early in development.

## Save system overhaul

Our initial save system was bad: it was just a `saves.db` file that contained all your saves, with all the data stuffed into a single JSON BLOB-style column.

We have completely rewritten this system. Your save files are now independent databases, and they support [database migrations](https://en.wikipedia.org/wiki/Schema_migration), which means we're laying the groundwork for backward compatibility with save data.

Your current save data is not lost, though. The game will migrate all your saves to the current system and rename your old `saves.db` file. This old save format won't be supported moving forward.

However, we can't guarantee that all your saves will continue to be supported as we add new features to the game, even with migrations in place. It's still an alpha release, so don't get too attached to your save files.

## Internal code changes

Our previous code was good enough for what it was built for. But it was a mess: a massive blob of functions and untested stuff. We did have a few tests (80+) covering the most important parts, but anyone who works with software knows that's not enough for a project like ours.

We got to work on a big refactoring job, split things into their own modules and functions, and covered everything with tests. We went from a measly ~10% test coverage with 80 tests to a whopping 84% coverage with more than 700 tests (and counting), across both the frontend and backend.

That's a big leap to maintain stability and performance.

The code is now way more organized, modular, and easier to work with. There's still a lot of room for improvement, but it's already good enough for newcomers who want to contribute.

## Main menu and new game screen

- Added an exit button to the main menu.
- The name and surname now have a character limit.
- The date picker has been redesigned. The old calendar picker didn't work well across operating systems.
- The nationality picker is now way more complete, with way more countries to choose from.

## Player and squad management

- Players now have alternative positions that they can play. They are no longer limited to a single position, allowing you to make more strategic choices in your matches. This is only available if you start a new game.
- The player squad table and the player lists table now support column sorting.
- These tables now display the player's country flag and country of origin. You can also find that on the player profile page.
- We've reduced how often players will talk to you. They should now be way more reserved instead of flooding your inbox.
- Morale has been adjusted, and it should not be too easy to make players happy anymore (I hope).

## Training system

We've introduced training groups, in case you want to focus on specific areas with certain players. This feature is still very experimental, and needs a lot of improvements.

## Scouting system

- Scout reports now progressively reveal player attributes.
- Scout reports now give you a player card instead of plain text, which leads you to the player profile page.
- Some scout reports had no translations, and they should now be fully translated.

## Staff reports

- We've reduced how often the assistant manager tells you about the squad's general mood. Sometimes you could get more than 3 reports per day telling you the same thing. They now only tell you the mood once per week, on Monday.
- We're redesigning the staff reports to be more useful overall.
- Some staff reports had no translations, and they should now be fully translated.

## UI changes

- The sidebar now has a scroller, making it easier to navigate.
- The sidebar is now collapsible, making it easier to focus on the game.
- We removed the "Manager" tab and made the "Your manager" information clickable, so you can access the manager profile from there.
- The "News" and "Schedule" tabs are now in the first section of the sidebar.
- The "Start Match" button is now centered instead of sitting in the bottom-right corner.
- The substitution panel is a little bigger now, making it easier to see.
- You can now select messages to delete from your inbox, and sort them by date.
- The Tactics and Squad pages have been completely redesigned:
    - You can only see your whole team on the Squad page.
    - On the Tactics page, you can now properly configure your team's formation with a drag-and-drop screen and compare players in your roster.
    - All the formation and tactics-related changes have been moved to the Tactics page.
    - Set-piece and player roles can now be found on the Tactics page.

## Bug fixes

- Fixed the "Invalid Starting XI" warning at the start of the game, even if your squad was totally valid.
- Fixed the "Getting Started" menu not disappearing after you checked everything there was to check.
- Fixed sorting of the players in the player squad and in the match day tables.
- Fixed the erratic behavior of the player formation list when trying to substitute players during a match.
- Fixed the combo box background colors on Linux systems.
- Fixed an error that would not let the game start on Linux systems that use proprietary NVIDIA drivers on Wayland.
- Fixed an error that would prohibit you from substituting your goalkeeper.
- Fixed an error that would allow you to substitute invalid players (red card or already subbed players).
- Fixed an error where the 4-3-2-1 formation would display 2 goalkeepers in the player formation.
- If you try to leave the game with unsaved changes, it will now ask for confirmation.
- Fixed PT-BR translations that were not accurate.

If you find more issues and regressions, please let us know in the [Issues](https://github.com/openfootmanager/openfootmanager/issues) section.

## Known issues

- If you use an NVIDIA proprietary driver on Wayland, the game will now start, but performance might be poor. This is a known issue in [WebKitGTK](https://gitlab.gnome.org/GNOME/gnome-build-meta/-/issues/749), which [Tauri](https://github.com/tauri-apps/tauri/issues/10702) uses to render the screen. Unfortunately, until this gets fixed, there's nothing we can do to improve it.
- The mitigation we applied to make the game start on NVIDIA GPUs might affect the performance in other systems without NVIDIA drivers. If you find performance issues because of that, please let us know in the [Issues](https://github.com/openfootmanager/openfootmanager/issues) section.

## Final notes

This is a big step towards a stable release! We know there's still a lot of ground to cover, but we're already hitting a big milestone in this project's lifecycle!

It's awesome that I can finally share this with you and get this game out into the world! If you enjoyed the game, please consider supporting us:

- Share it on social media.
- Tell your friends about us.
- [Give us a star on GitHub](https://github.com/openfootmanager/openfootmanager).
- [Submit your code/translation contributions](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).
- Post a video on YouTube.

All of this helps immensely!

## Download it

Head over to the [download page](/download) to get the game for Windows, macOS, or Linux.

In the next releases, once we achieve a stable gameplay loop, we'll be adding new features such as new leagues, new tournaments, more teams, a transfer window, more player interaction, and anything else you guys feel this game deserves!

Thank you so much for your support!

See ya in the next one!