Zachary Hunt

Project 2 - Magic Mirror

![alt text](https://github.com/ZHUNT64/p2.Zachary.Hunt/blob/main/p2.zachary.hunt.png?raw=true)

The main goal of the mirror was to keep it simple and minimalistic, as you can see how too much information on the mirror would make it become hard to use or even hard to read or look at. So without losing too much actual mirror space, the information widgets are on the far sides away from the user. This makes it so that the mirror is still a usable mirror. The clock is at the top in bold font so that it is easy to read, and the schedule of events and wheather widgets are on the far left. Keeping the most important pieces of information together, and that coincide with eactoher, makes it easier for the user in that they do not have to search around for applicable information that pertains to the information that they just read. Notfications and news feed are together since those are similar, and are on the right, away from the schedule to not make the mirror convuluted. Underneath the social media is the health widget which includes total hours slept, including whether it was deep or light sleep. The health widget also has daily weight and calories burned for the day for the user to keep track of. Around the mirror are LED lights that can change color, making the mirror not only a light source for the bathroom, but also making it easier to use.

![alt text](https://github.com/ZHUNT64/p2.Zachary.Hunt/blob/main/p2.zachary.hunt.gif?raw=true)

As far as implementation goes, things were almost the exact same as the sketch. All of the information widgets, besides the clock and weather widget, are implemented with a CSV file. The mirror reads in the data from the file and displays it to the correct widget on the mirror itself. The weather widget is pulling real time information from the Open Weather Maps API. The contents of the API are stored into a json file and diplayed to the mirror. The clock and all the dates that you see are also real time, those are just functions provided by p5.js. In terms of the actual design compared to the sketch, I had to use a little more space for the widgets just because of the sheer amount of information that the widgets have. This takes away from the actual mirror space, but all in all it still acts as a smart mirror.

And as for advanced features, when the mirror is powered on, there are lights around the perimeter of the backside of the mirror. This lets the mirror act as an up close light source, almost like ring lights in movies or other content.

![alt text](https://github.com/ZHUNT64/p2.Zachary.Hunt/blob/main/screenshot.jpg?raw=true)

link to the report presentation
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/57zRLUnmI_k/0.jpg)](https://www.youtube.com/watch?v=57zRLUnmI_k)
