---
path: "/resources/idea-compiling"
title: "Compiling Projects with IntelliJ IDEA"
---

The IntelliJ IDEA development environment can use the Java JDK compiler and Ninja framework to build and execute each of the project sprints provided during CS361. The follow steps will provide you with a *Configuration* within IntelliJ IDEA that will first **Clean** (remove old files associated with previous builds), **Compile** (compile new copies of library files and project files), and **Run** (executes Ninja framework and your code). While the Ninja framework is running within IntelliJ IDEA, you can access your app by navigating to http://localhost:8080/ within the browser on your system.

**Note:** The Ninja framework is a small web server which is running locally, therefore the app is only available on the same system that is running the Ninja framework (e.g. running code on the OSU servers will not allow you to see your app in action).

The following steps apply with the project open within IntelliJ IDEA (see [Configuring IntelliJ IDEA and Importing Maven-based Projects](/resources/idea-setup.md)).

1. Open the *Edit Configuration* menu from the drop-down button in the upper right-hand corner of window.

<img src="/images/editconfig.png" width=600px/>

2. Within the *Run/Debug Configurations* window that appears, click the `+` button and select *Maven* from the drop-down menu.

<img src="/images/mavenconfig.png" width=500px/>

3. Enter a name for the new Configuration that we are creating (e.g. *'Execute'* is given in the example). Also, within the Command line field, enter `ninja:run`.

![](/images/nameAndNinja.png)

4. At the bottom of the *Run/Debug Configurations window* is a section called *Before launch: Activate tool window.* Click the `+` button and select *Run Maven Goal*.

<img src="/images/mavengoals.png" width=600px/>

5. Within the *Select Maven Goal* dialog that appears, enter `clean` into the *Command line* field, and click *OK.*

<img src="/images/selectMavenGoal.png" width=600px/>

6. Complete steps 5 and 6 again, except with `compile` in the *Command line* field. This should result in two *Maven Goals* being listed, `clean` and then `compile`, in that order.

7. Everything for your new *Configuration* should be set, select `OK` on the *Run/Debug Configurations* window. You should now see the name of your new *Configuration* within the drop-down in the upper right-hand corner of the IntelliJ IDEA window. You can run your new *Configuration* by selecting play arrow button.

<img src="/images/runconfig.png" width=600px/>

## Acknowledgments

These intructions were authored by [Nicholas Nelson](http://web.engr.oregonstate.edu/~nelsonni/) for the Fall 2017 offering of this class.