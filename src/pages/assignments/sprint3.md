---
path: "/assignments/sprint3"
title: "Sprint 3"
---

**DUE DATE: Friday, November 9, 5 PM**

# Introduction

For Sprint 3, your group will import your group's code from Sprint 2. The goal of this stage is to expand the game and refine the quality of code for the Battleship game previously developed. The focus is on using Object-Oriented Design (specifically inheritance).

Users are enjoying version 2 of your Battleship game, and it's popularity has increased dramatically, but some users are beginning to complain that the game play is boring after playing a few games. Some of these users have requested more variety to the types of ships that can be played. The marketing department has run several user focus groups and come up with the following suggestions:

- A new concept has been introduced, the *"captains quarters."* If the captains quarters is hit, then the ship is immediately sunk. The captains quarters for battleships and destroyers (but not minesweepers!) is armored, so it takes 2 attacks on the same square for it to "hit" (i.e. the result of the first attack always counts as as "miss"). 

![](/images/captains-quarters.png)

- A new special weapon has been introduced: the *"sonar pulse."* The sonar pulse allows a player to reveal a portion of the map, as shown in the figure below. The sonar pulse merely reveals the status of the cell as being free (shown as gray) or occupied (shown as black). *It does not reveal the location of the ship's captain's quarters.* A player can use a total of two (2) sonar pulses in a game, only **after** successfully sinking the first enemy ship.

![](/images/sonar-pulse.png)

The user created requirements document can be found [here.](/docs/battleships-phase2.pdf)

# Learning objectives

The objective of this sprint is to implement the new features of the game.

This assignment will help you learn the following:

- Work with a team to design and implement changes to your model
- Refactoring existing code to accommodate required code changes
- Divide tasks among team members
- Use GitHub Issue Tracking, Pull Requests, and Branches correctly


# Tasks

To complete this assignment, each team needs to do the following:

1. Prepare the Team's Repository. Since the UI design completed in Sprint 2 is different for each team, there is no provided course repo for Sprint 3. We will be using the same `cs361fall2018/project-X` repository during Sprint 3.

2. Create user stories for the new features. The Battleships game will be a much more interesting game to play. Create a new wiki page on your team's repo called “Sprint 3 User Story”, and make sure that your user story adheres to the format:
    - Card: (“As a [user], I want [function], so that [value]”)
    - Conversation: (Details that clarify the user story) 
    - Confirmation: (Tests to show when the User Story is completed)

Your user stories will be evaluated on whether they follow [INVEST](https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/).

3. From the user stories, each team will create a series of features that need to be implemented in the code. These will be added to the Github issue tracking system. Each of these must be assigned to a specific team member, as well as have a time estimate given in the body of the issue. The issues will be tagged with `feature`. Also, make sure that each issue is linked to the appropriate user story.

4. Create a new milestone, called `Sprint 3`, with the deadline being the assignment due date. As a team, decide on what you are going to implement this sprint, by adding the milestone to each relevant issue.

5. Resolve the feature backlog. If your team was not able to implement all of the features in Sprint 2, or you haven't added all of the [Battleship rules](/docs/battleship-requirements.pdf) into the code, now is the time to bring your game up to speed. This implementation process should still be organized into tasks and documented in the GitHub Issue Tracker, as well as adhering to the GitHub Flow.

6. Refactor to Object-Oriented Design. Using code smells, identify places in your code that require refactoring. Using OO principles such as Inheritance, Polymorphism a-d Encapsulation, refactor the Battlehip codebase (including the new features, if applicable), making sure your design respects the SOLID design principles. Be careful with your design, since the next sprint will include several new features that rely upon having a good OO foundation to build upon.

7. Implement the new features. Using the user stories as a guide, along with the newly refactored Object-Oriented code, implement the new features. Use the GitHub Issue Tracker, the issues you created, Pull Requests, and any other techniques provided in previous sprints, to manage your work and track your progress. Each team member needs to implement at least on issue.

8. Tweek the UI to correctly show the new features. You will need to make changes to the user interface, in order for the user to easily use (and understand) the new features of the game.

9. Tag the final version with `sprint-3`. Don’t forget to push the tags to GitHub, with `git push --tags`. **This is the version we will grade!**

10. (Optional) Complete [this survey](https://goo.gl/forms/jzvDOPanWHOMLjBq1) to give feedback regarding your team member's contribution to the sprint. Complete one survey for each team member you would like to give feedback for.