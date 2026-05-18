---
title: "Openfoot Manager v0.2.0-alpha Release"
description: "This one is a massive step forward: contracts, transfers, finances, jobs, youth systems, world news, and a lot of hard-earned polish."
pubDate: 2026-05-18T18:00:00.000Z
author: "Sturdy Robot"
tags: ["release", "announcement", "alpha", "gameplay", "bug fixes"]
image: "/images/020-new-features/020releasenotes.jpg"
---

After roughly two months of work, 350+ commits, 517 files changed, 1600+ automated unit tests, and a whole lot of bug fixes, **Openfoot Manager v0.2.0-alpha** is finally here.

There is a ton in here, and it was honestly hard to keep track of it all, so let's go through the main highlights.

## Contracts, transfers, and finances

We spent a lot of time making the financial side of the game matter much more this time.

<table>
<tr>
<td>
<img src="/images/020-new-features/renew-contract.PNG" alt="Renewing contract" width="100%">
</td>
<td>
<img src="/images/020-new-features/transfer-bid.PNG" alt="Transfer bid" width="100%">
</td>
</tr>
</table>

There is now a much more complete contract and transfer setup, where negotiations can actually succeed, stall, or fall apart.

Contract renewals, terminations, and expirations now exist in the game, so keeping your key players around takes a bit more thought than before.

<img src="/images/020-new-features/finances-screen.PNG" alt="Contracts, transfers, and finances" width="95%">

Financial systems were also overhauled. You can now set up sponsorships, work your way out of debt, and invest in club facilities to support long-term progress, but all of that comes with a real cost, so budget management finally matters.

## Being unemployed is now part of the game

This release also brings higher stakes to the game: unemployment. You can now get fired if the board of directors is not satisfied with your work.

But this is not game over. Unemployment is playable, has its own dashboard treatment, and comes with an actual job market around it. While you're out of work, you can receive passive job offers, apply manually, track vacancies, get inbox responses, and see hiring outcomes.

That system also plugs into the wider simulation. The game world now has more visible manager churn, vacancy replacement logic, season-end movement, and clearer appointment and vacancy updates. That matters a lot, because it makes the world feel less frozen around the player.

## The world feels more alive now

One of the main goals for 0.2.0 was to make the world feel more alive: transfer rumours, preseason fixtures, injury news, and more activity overall.

<img src="/images/020-new-features/preseason-status.PNG" alt="Preseason sattus" width="95%">

You can now play preseason friendlies, and the game now has an active transfer window where AI-controlled clubs can take part in negotiations too.

Other clubs can hire or fire managers, carry on with their own business, and you can actually see results from other matches in the post-match screen.

World generation and save data now support configurable history depth with world history archives. The game can now generate up to 24 past seasons, so you can see who were the past champions, who were the most important players, the most successful managers, and more.

## Players, squads, and long-term development moved forward

Player and team profiles got a pretty serious upgrade in this release. You can now dig into advanced stats, recent match history, and richer statistical detail.

The Youth Academy is no longer just a placeholder. You can now scout young players, promote them to the main squad, or move eligible players back to the youth team. The game will also warn you when you come across a potential **Wonderkid**.

### New player positions

<img src="/images/020-new-features/player-positions.PNG" alt="Player positions" width="95%">

Also, it is worth mentioning that positions are now much more granular. Instead of only broad labels like defender, midfielder, and forward, players can now be identified more precisely as right-backs, centre-backs, left-backs, wing-backs, defensive midfielders, central midfielders, attacking midfielders, wide midfielders, wingers, and strikers.

That also ties into the updated **OVR** logic, which now weighs a player's role more appropriately and makes top players easier to identify at a glance.

Free agents can also be signed now, and there is a dedicated view for handling that market.

Fitness and medical systems also got expanded with a dedicated fitness attribute, injury recovery progression, training recovery effects based on age, morale, and condition, plus updated stamina and recovery behavior.

## New supported language

<img src="/images/020-new-features/simplified-chinese.PNG" alt="Simplified Chinese" width="45%">

Simplified Chinese (ZH-CN) was added to the list of supported languages.

Other languages will be added in the following releases (Russian and Turkish are on the todo list).

## A lot of UX got cleaned up too

### Light-mode in Match Simulation

<img src="/images/020-new-features/light-mode-match-sim.PNG" alt="Match simulation light mode" width="70%">

The Match Simulation screen now supports a light mode for those of you who prefer a brighter interface.

### **Hall of Fame** and **Transfer Centre**

<table>
<tr>
<td>
<img src="/images/020-new-features/hall-of-fame.PNG" alt="New Manager Starting Season" width="80%">
</td>
<td>
<img src="/images/020-new-features/transfer-centre.PNG" alt="New Manager Starting Season" width="80%">
</td>
</tr>
</table>

The game now also has **Hall of Fame** and **Transfer Centre** pages, giving you a better way to follow past history and current transfer rumours around the world.

### Choose your starting season

<table>
<tr>
<td>
<img src="/images/020-new-features/new-manager-starting-season.PNG" alt="New Manager Starting Season" width="70%">
</td>
<td>
<img src="/images/020-new-features/new-manager-starting-season2.PNG" alt="New Manager Starting Season" width="60%">
</td>
</tr>
</table>

When creating a new game, you can now choose the year and the point in the season where you want to begin, whether that is from the start or from mid-season.

### Translation issues

Another focus was cleaning up as many translation issues as possible.

A lot of untranslated strings are now properly translated, and if you happen to find anything that wasn't translated to your language (or was improperly translated), please submit it as an issue to the [GitHub repo](https://github.com/openfootmanager/openfootmanager/issues).

## Fixes, polish, and lots of important cleanup

This release is not just about adding shiny new systems. There's a lot of important cleanup in here too.

Some of the more notable fixes and polish work include:

- Injury recovery days now correctly decrement on daily time advance.
- Match simulation is more robust against null match snapshots.
- Starting XI order is now normalized properly on save and migration.
- League persistence was hardened to clear stale data during upserts.
- Transfer bid validation now correctly accounts for bid fees.
- Board confidence messaging now uses the correct loss-date-based identifier.
- Home roster views no longer show youth academy players where they should not.
- News and notable-player heuristics now use the correct team context.
- Locale-variant mapping and untranslated-string fallback behavior were improved.
- The main menu got overflow fixes, nationality dropdown fixes, and better manager age validation.
- Next-match display logic now consistently uses the user team ID.
- Season-start and end-of-season date handling were tightened.
- Morale feedback and morale deltas are now surfaced more accurately.
- Stamina depletion and recovery were adjusted to better reflect match load.
- Match and news localization improved across reports, standings, substitutions, event phases, awards, and player-management messaging.

These are not the flashiest patch notes in the world, but they matter a lot. This kind of cleanup is what stops a big feature release from collapsing under its own weight.

## Final notes

v0.2.0-alpha is a huge step for the project. There is still plenty to improve, obviously, and we will continuously do so.

If you want to give it a try, head over to the [download page](/download).

Thank you so much for the support.

See ya in the next one!