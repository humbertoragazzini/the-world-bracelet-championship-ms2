# The World Bracelet Championship - Project 1 - Humberto Ragazzini

Welcome to the most ferocious championship around the world, the bracelet world chapionship is a game where your memory will be put through the limits, you will need to make bracelet folowing diferent patterns, every single mistake or acert will affect in your final score, try now and remember every single jewel count good luck.  

In order to access the website and visit it, you can do it by the following GitHub link: [My Resume Project](https://humbertoragazzini.github.io/ms-1-front-end/)

# **UX**


## **Strategy**

* **My idea**: The idea born originally when a saw my wife making a bracelet, she need to memorize every single pattern and repeated couples of times to
make the bracelet looks like a simple geometrical form, In that momment I thought why not, traslate all that conplexitie to a game, an this was the trigger to make this idea real.

* **Make an impact in the first visit**: The first page have to be a colorful and shocking to make the first visit a pleasurable but at the same time funny moment, for this reason the first page have to be a mix between the bracelet world and the most desired price of a attlete, a gold belt.

* **My Goal**: The goal is give a player a good time, a challenge at the same time, and with this two things make the player stick in to the game traying to break all records

* **My Goal**: This goals will sound really similar to my goals, but because we share the love of games, the user goal its find a game to have a nice momment and enjoy that small free time having a memory challenge.

-----------------------------

## **Scope**

* **The principal feactures of the proyect:**
    * The posibility to save records in the local storage.
    * Save the Name of the user how play the game to.
    * The maximum level reached by all the users how play the game.
    * the posibility to see this records by order.
    * Have a 3 main areas, but the game inself be smooth, without any reaload timme.
    * Plenty ammount of jewels to make every level in the game unique.
* **Full Mobile Game**
    * The game have to be full responsive prioritazing mobile devices.
    * Adapt the layout with the mayority of the screen resolutions.
* **Desire Future Feactures**
    * Online gameplay between two players.
    * Time limit in single player and multiplayer game.
    * A international database with all players records.
    * The posibility to earn badget (prices) depending of level and records to given more progression to the game
    * Full social media integration

-----------------------------

## **Structure**

In this section the basic structure will be outlined, and how the information will be presented.

* **What a guest would like to see the first time:
    * Colorfull and funny start menu
    * The sections organices by start game, a contact area, and if some player would like to read how the game was created a small about us section

* **How I present this sections**

    * First a epic start: The first view in the game have to be a price, a big gold belt with the start button ready to be clicked or pressed.
    * After the start menu: A create new player option with the all the records in a table to make them easy to read.
    * In the game: The player need a smooth transition between a lose and a new game,with mininmum or without loading times, if its possible in the same index.
    * A contact section: Here a small form to share opinions about the game or future new feactures, and if is any bug to be reported.
    * An About Us section: this particular game was created by a seed, a small seed from somthing a saw, in this section i have to explain how this grow. 
        
-----------------------------

## **Skeleton**

### **First ideas**

In this section i will show some of the first desing, and the development of this first ideas to a more visual wireframes [Click Me](https://github.com/humbertoragazzini/the-world-bracelet-championship-ms2/blob/master/readme-files/image/firstideas/firstideas/first-idea.jpg)

### **Wireframes**

With the draws i try to put all that in a more visual wireframe to have a better idea of the future final desing

* **Desktop Start Menu with rain of jewels:**[Click Me](https://github.com/humbertoragazzini/the-world-bracelet-championship-ms2/blob/master/readme-files/image/wireframes/wirefram-desktop-start.png)

* **Mobile Start Menu with rain of jewels:**[Click Me](https://github.com/humbertoragazzini/the-world-bracelet-championship-ms2/blob/master/readme-files/image/wireframes/wirefram-mobile-start.png)


* **Desktop in game level:**[Click Me](https://github.com/humbertoragazzini/the-world-bracelet-championship-ms2/blob/master/readme-files/image/wireframes/wirefram-mobile-desktop-game.png)



* **Mobile in game level:**[Click Me](https://github.com/humbertoragazzini/the-world-bracelet-championship-ms2/blob/master/readme-files/image/wireframes/wirefram-mobile-game.png)



* **Desktop and Mobile contact:**[Click Me](https://github.com/humbertoragazzini/the-world-bracelet-championship-ms2/blob/master/readme-files/image/wireframes/wirefram-mobile-desktop-contact.png)



* **Desktop and Mobile about us:**[Click Me](https://github.com/humbertoragazzini/the-world-bracelet-championship-ms2/blob/master/readme-files/image/wireframes/wirefram-mobile-desktop-aboutus.png)

-----------------------------

## **Surface**

The colors was selected by looking the bracelet made by my wife

Before start coding the index, I did a research about what are the most common mobile and pc resolution around the world.

The most common mobile resolution is:

Resolution | Mobile percentage
------------ | -------------
360x640  | 10.77%
414x896 | 7.37%
360x780 | 5.9%
375x667 | 5.56%
360x800 | 5.52% 
360x760 | 5.15% 

Data taken from _[statcounter](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide)_

For this reason i get to the body a minimum width of 360px to ajust to the bast majority of them.

For desktop screen resolution the numbers are different

Resolution | Desktop porcentage
------------ | -------------
1920x1080  | 20.99%
1366x768 | 20.23%
1536x864 | 9.72%
1440x900 | 6.23%
1280x720 | 5.45%
1600x900 | 3.47%

Between the 1080px and 768px resolution we have almost the 50% of the users, if we add 768px, 864px and 900p we have more than 60% of the users.

### **The big Start**

The big start button its in the beginning of the page, i try to given to the site the real feeling of a mobile or computer game, so i focus my design in some basic game main menu adding to this big button a really gold metal bealt with jewels, and to given even more glamorous colorfullness we add a nice jewel rain (this rain its a randome positionin jewels with width limited in real time).

![The Big Start](readme-files/image/animations/surface/the-start-menu.gif)


### **The new game section**

- Here we have the on the top the best score, the level in the game, and a small navbar with the home contact and about us icons, the two squares with score and recods have animation when the player go throu the levels.

![The Big Start](readme-files/image/animations/surface/the-new-game-section.gif)

- In the middle of this section we have the text area for a new name, this name cannot contain space and simbols, next or below this text area we put a green button, this button create the new player an start the new game, we add some notifications, alert to tell the user to fillup the player name before start the game. Below the new player section we add a table with all the records of every single player until reach the ammount of 8.

![The Big Start](readme-files/image/animations/surface/the-new-player.gif)

### **The new contact section**

- The contact section has a contact form with the posibility to send a message to the developer, all the fiels are required and we add popups about error and confirmation email.

![The new contact](readme-files/image/animations/surface/the-contact-form.gif)

### **The new about us section**

- About us is just a small pice of text explaning the idea, how and who did it, a small but really importat paraghrap.

![The about us section](readme-files/image/animations/surface/the-aboutus.gif)

### **Overview of the whole site**

- This is an overview of the site in a mobile device mode:

![An overview](readme-files/image/animations/surface/the-overview.gif)
    
-----------------------------

# **Testing**

## **Responsive**
    
The site it has made to be responsive between 360p to up to 4160px:
    
* Image of the mobile web site: 
   
   
    ![The full web gif]()
    
* Image to show the responsive design in the web site: 
   
   
    ![The full web gif]()

## **Validators**

**I did the validation for every single page, this are the result:**

* **HTML validation**

    * Index validation:
    
    ![index](readme-files/image/validators/html-index-check.png)


    * Contact validation:
    
    ![contact](readme-files/image/validators/html-contact-check.png)


    * About Us validation:
    
    ![about us](readme-files/image/validators/html-aboutus-check.png)

* **CSS validation**

    * Css validation result landscape & portrait:

    ![about us](readme-files/image/validators/css-check.png)

* **JShint validation**

    JShint validator (some warnings are because i split the js into a couple of files, so for this reason some functions are variables from others js files):

    * ANIMATION.JS:
        * ![about us](readme-files/image/validators/animation-js-check.png)
    * GAME.JS:
        * ![about us](readme-files/image/validators/game-js-check.png)
    * SENDEMAIL.JS:
        * ![about us](readme-files/image/validators/sendemail-js-check.png)
    * UTILITIES.JS:
        * ![about us](readme-files/image/validators/utilities-js-check.png)
## **Testing Web Site**

