# Nature Injustice

## Important Update!

Regarding the lack of sounds bug, I discovered that this is due to an update as part of Google Chrome reviewing its Autoplay policy during late 2017.

<blockquote>
  An AudioContext must be created or resumed after the document received a user gesture to enable audio playback.
  </blockquote>
  
So if you are using Google Chrome, just make sure you tap anywhere on the website and the sound will automatically start playing!
Other browsers like Firefox (tried and tested) should be fine, I guess...

### Current Known Bugs

1. The kinematics of the first and second level is rather awry. Player would get stuck to a particular platform and would be able to "teleport".

2. This bug is a lot more glaring - no background music and sound effects. We implemented the sounds feature but for some reason, we are unable to produce any sound when exporting to HTML5 :( It would have been a lot more epic should the lack of sounds have been fixed. (Refer to the above important update)

### Motivation

The game was a collabrative team effort by my team of four and was for a game competition, Singapore Games Creation Competition 2017. We successfully entered into finals as top 30 amongst hundreds of submissions of other games. Eventually, we obtained the Commendation Award from the contest.

### Excerpt of the code

![forgithub](https://user-images.githubusercontent.com/19306879/39660591-d2210224-5074-11e8-8ed9-46cce1dbb38d.PNG)

Code responsible for calculating the kinematics and collison of the black trashbag in every frame. 

### Synopsis

Favouring convenience by littering and failing to protect the environment has only resulted in things going terribly wrong. In the year of 2065, trash bags have somehow gone alive and invaded the once-vibrant city of TofuNators, causing the city to descend in anarchy. It has come the time for you to stop this and to restore order and peace in the city.

Aligned with the theme of the ’The Eco Knight Rises’, you must jump over the trash bags in order to destroy them before they destroy you! Composed of a simple plat-former level and a ’Survive the Wave of Trash Bags’ level, you will be engaged with this well thought-out and face-paced game. Music was also included to provide a more wholesome player experience. This new version features shorter plat-former level and a shorter 'Wave' level, so that you can get right into the meat of this game - a brand new boss level.

This boss level is packed with explosions, screen shakes, power ups, and a host lot more that is guaranteed to wow. Besides focusing on the fun factor, we also focus on the educational aspect - making it relevant to the theme. We have a simple, yet fun quiz in the midst of this action-packed level, designed to educate the younger ones on the concept of environment.

Have fun with the game!

### Game Developers

Look at the game credits.

### Footnote

Press the 'G' button during the first or second level to skip directly to the boss level! It's a backdoor (for debugging purposes) that allows me to skip the boring levels. I left the backdoor there as I was too lazy to remove it hehe... 

All artwork and ideas are original work of my team. All rights reserved.
