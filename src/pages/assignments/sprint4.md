---
path: "/assignments/sprint4"
title: "Sprint 4"
---

**DUE DATE: Friday, November 9, 5 PM**

# Introduction

For Sprint 4, the Battleship game needs to be expanded to include a new type of Ship and extra actions.

Now that the refactoring of the underlying architecture is complete (Sprint 3), the marketing department is desperate to see new features added to the game. Market research has shown that users become bored with the regular Battleship game after 2-3 weeks of use and are not using the game after that. In order to keep those users engaged the marketing department wants to add an additional features to the Batthleship game. They would like to add a new type of ship, the *submarine,* a new type of weapon, the *space laser,* and the ability to move the fleet around the board. Details for each feature is detailed below:

- A new type of ship will be introduced: the submarine. A submarine can be placed on the surface or it can be submerged, and thus be placed on the grid under any other type of surface ship. It takes up five blocks on the grid, as follows:

![](/images/submarine.png)

- A new type of weapon is introduced: “the space laser.” It is fired from a network of geostationary satellites, and unlike the conventional bombs that we have until now, they penetrate the water, being able to hit both a surface ship, and a sub that is placed below it at the same time (i.e. in contrast the bomb can only hit the surface). The player receives the activation codes for the space laser only after sinking the first enemy ship (i.e. this weapon is an upgrade, and replaces the conventional bomb in the player’s arsenal). In the future we might add new types of weapons.
- A player can now move his fleet. When the command to move is given, each ship will move one position. The player can specify the direction of the move (N, S, E, W). North is towards the top of the board (like a map). If a ship is already at the edge, it will not move (i.e. ships cannot "fall" over the egde). Ships cannot overlap during the move. The player can only move their fleet twice, after successfully sinking two enemy ships. This move will not be reflected on the opponents display (The hits don't move once the opponent moves the fleet).

# Learning Objectives

This assignment will help you learn the following:

- Work with a team to design and implement changes to your model and view
- Conduct code reviews within a team in order to verify functionality, prevent conflicts, and increase quality
- Use a testing framework to validate functionality and prevent errors
- Divide tasks among team members
- Use GitHub Issue Tracking, Pull Requests, and Branches correctly
- Use UML to describe the current state of your application, as well as propose changes to it
- Refactor your code to accomodate new architecture changes

# Tasks

To complete this assignment, each group needs to do the following:

1. **Team Repository.** You will continue working on the same codebase you worked on during Sprint 3.

2. **Create User Stories for New Features.** From the Introduction section, as well as the design document, turn the new features into user stories and add them to a new wiki page on your team's GitHub repo. There should be at least one user story per team member. Each User Story must have the following format:

    - Card: (“As a [user], I want [function], so that [value]”)
    - Conversation: (Details that clarify the user story) 
    - Confirmation: (Tests to know when the User Story is completed)

Your user stories will be evaluated on whether they follow [INVEST](https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/).

3. **Create UML Class Diagrams.** Create 4 different UML diagrams detailing your Battleship game. The first Class Diagram shows the structure of the system before the refactoring (see below). For the Class Diagram (After), State Diagram (After), and Sequence Diagram (After), these diagrams should include the results from both the Object-Oriented Design refactoring described below, as well as the implementation of the new feature described in the Introduction section above. Add these diagrams to wiki pages on your team's GitHub repository, and include the name of the team member that created each diagram.

    - Class Diagram (Before): UML Class diagram detailing the structure of your Battleship game at the end of Sprint 3. This should include any changes made in the implementation of the Feature Backlog described above.
    - Class Diagram (After): UML Class diagram detailing the structure of your Battleship game at the end of Sprint 4.
    - State Diagram (After): UML State diagram detailing each state that could possibly be reached in your Battleship game at the end of Sprint 4. 
    - Sequence Diagram (After): UML Sequence diagram illustrating the typical case in which a player interacts with your Battleship game at the end of Sprint 4.

**Note:** If you team only has 3 team members, you can drop the State Diagram.

4. **Implementation.** Implement the new features of the Battleship game, as described in the *Introduction.*

5. **Properly tests your implementation.** The unit tests need to submitted in the same PR as the code that implements the feature. The `models` package needs to have at least 80% code coverage.

6. **Conduct Code Review on Pull Requests.** Each team member should conduct a code review for at least one other team member's Pull Request. This should result in code comments within the Files Changed portion of Pull Requests on GitHub. Comments on the Pull Request itself can also help your team members understand the results of your code review. Look at code quality, code smells, feature logic, check for bugs, check for code duplication, and verify that code adheres to Object-Oriented Design and the SOLID principles. Comments need to be constructive (e.g. summarizing what the code does is not 
constructive, but how to fix it, or why the code is good, is constructive feedback).

7. **Correct usage of CI.** When merging the pull requests it is import to make sure that all the Travis CI tests pass. You cannot merge a PR if the checks fail. Also, if the CI on the master branch fails for any reason, fixing that failure becomes the first priority for your team.

8. Tag the final version with `sprint-4`. Don’t forget to push the tags to GitHub, with `git push --tags`. **This is the version we will grade!**

9. (Optional) Complete [this survey](https://goo.gl/forms/jzvDOPanWHOMLjBq1) to give feedback regarding your team member's contribution to the sprint. Complete one survey for each team member you would like to give feedback for.
