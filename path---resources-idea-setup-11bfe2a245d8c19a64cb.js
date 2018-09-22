webpackJsonp([0xcf35bd602c6a],{340:function(e,o){e.exports={data:{markdownRemark:{html:'<p>When working with any of the project repositories for the first time, it is necessary to configure your environment and import the project properly before beginning development. The following steps assume that you will be using IntelliJ IDEA as your development environment, but other IDEs can be used as well (we won\'t be able to support other IDEs however, so select your IDE accordingly).</p>\n<p><strong>WARNING:</strong> If you use the Open option within the Welcome to IntelliJ IDEA window, you will be able to view the project files, but IntelliJ will not recognize those files as being part of a Maven project and will not import the Ninja framework. Please follow the instructions below to properly import the project.</p>\n<ol>\n<li>\n<p>Navigate to the repository page on GitHub (i.e. <code>https://github.com/user/repo</code>).</p>\n</li>\n<li>\n<p>Select the Clone or download button and copy either the HTTPS or SSH URL.</p>\n</li>\n</ol>\n<p><img src="/images/gitclone.png"></p>\n<ol start="3">\n<li>\n<p>Clone the repository to your local system either via a Git UI client or through a terminal. The terminal method would involve launching a terminal window, navigating to the folder/directory that you wish clone the repository files into, and running the command: <code>git clone url</code> (where <code>url</code> should be the HTTPS or SSH URL).</p>\n</li>\n<li>\n<p>Download and install <a href="https://www.jetbrains.com/idea/download/">IntelliJ IDEA Community Edition.</a></p>\n</li>\n<li>\n<p>Launch IntelliJ IDEA. The initial launch has configuration steps, complete these as needed, and get to the Welcome to IntelliJ IDEA screen.</p>\n</li>\n<li>\n<p>Select the Import Project option.</p>\n</li>\n</ol>\n<img src="/images/importIDEA.png" width="600px"/>\n<ol start="7">\n<li>\n<p>From the file browser window, navigate to the repository that you cloned to your local system in steps 1-3, and select the <code>pom.xml</code> file within the main project folder. Select the <code>Open</code> button to continue.</p>\n</li>\n<li>\n<p>If this is a clean installation of IntelliJ IDEA, you will need to add a Java SDK in order for IntelliJ IDEA to be able to compile Java source code. Typically when loading a new project in IntelliJ IDEA a popup dialog will appear indicating that the project does not have an SDK configured for it; this dialog will all provide options for adding and configuring an SDK for that project.</p>\n</li>\n<li>\n<p>If you do not currently have a copy of the Java SDK installed on your system, you will first need to download and install the <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html">Java Platform (JDK) from Oracle.</a></p>\n</li>\n</ol>\n<p><img src="/images/downloading_oracleSDK.png"></p>\n<ol start="10">\n<li>If the SDK configuration dialog did not appear, or you closed out of it, the appropriate menu for adding a Java SDK to IntelliJ IDEA can be found by going to <code>File -> Project Structure...</code> and selecting the SDK option under the Platform Settings group on the left-hand side of the window. Select the <code>+</code> icon at the top of the middle pane, and the JDK option.</li>\n</ol>\n<p><img src="/images/adding_SDK.png"></p>\n<ol start="11">\n<li>\n<p>The JDK option will launch a file browser window. Navigate to the location of the installed Java SDK and select the <code>jdk-10.0.2.jdk</code> folder (version numbers and the folder name might be slightly different on your system) before selecting the Open button. Note: For macOS users, the Java SDK folder is typically located in <code>/Library/Java/JavaVirtualMachines/</code>.</p>\n</li>\n<li>\n<p>Once added, select the Project option under the Project Settings group on the left-hand side of the window. Select the drop-down menu under Project SDK in the main pane and a <code>10</code> or similarly named instance of the Java SDK should be available; select it and click OK.</p>\n</li>\n</ol>\n<p><img src="/images/configuring_SDK.png"></p>\n<ol start="13">\n<li>Your project should now be properly configured for development and use from within IntelliJ IDEA.</li>\n</ol>\n<h2>Acknowledgments</h2>\n<p>These intructions were authored by <a href="http://web.engr.oregonstate.edu/~nelsonni/">Nicholas Nelson</a> for the Fall 2017 offering of this class.</p>',frontmatter:{path:"/resources/idea-setup",title:"Configuring IntelliJ IDEA and Importing Maven-based Projects"}}},pathContext:{}}}});
//# sourceMappingURL=path---resources-idea-setup-11bfe2a245d8c19a64cb.js.map