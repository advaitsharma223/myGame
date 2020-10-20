class Form {

   constructor() {

        this.playButton = createButton('PLAY');       
        this.infoButton = createButton('GAME INFO');
        this.guidelineButton = createButton('GUIDELINES TO BE FOLLOWED RIGHT NOW');      
        this.score = createElement('h2');
        this.vaccines = createElement('h2');
    }

    display() {

        this.playButton.position(windowWidth/2, windowHeight/2);
        this.infoButton.position(windowWidth/2-200, windowHeight/2);
        this.guidelineButton.position(windowWidth/2-200, windowHeight/1.5);
        this.score.position(displayWidth/2-500, displayHeight/6);
        this.vaccines.position(displayWidth/2+100, displayHeight/6);

        // FOR PLAY BUTTON
        this.playButton.mousePressed(()=> {
      
            this.playButton.hide();
            this.infoButton.hide();
            this.guidelineButton.hide();
        });

        // FOR INFO BUTTON
        this.infoButton.mousePressed(()=> {
      
            this.playButton.hide();
            this.infoButton.hide();
            this.guidelineButton.hide();

            this.gameStory = createElement('h2');
            this.gameStory2 = createElement('h3');
            this.gameStory3 = createElement('h3');
            this.gameStory4 = createElement('h3');
            this.gameStory5 = createElement('h3');
            
            this.gameStory.html("The backstory of this game-: ");
            this.gameStory.position(displayWidth/2-200, displayHeight/6);

            this.gameStory2.html("Your city has been attacked by the Corona Virus. There are thousands of people who are getting affected by this virus every day. You have to save your city by killing the virus with your sanitizing sword wherever you find it. At the same time you have to jump over the obstacles. dont get infected by the virus. But if you do then buy some vaccines before hand with the points you earn. It is just you who can save the city today.");
            this.gameStory2.position(displayWidth/2-600, displayHeight/4.5);

            this.gameStory3.html("- Press the up arrow for jumping.");
            this.gameStory3.position(displayWidth/2-200, displayHeight/2.5);
            
            this.gameStory4.html("- Press the space bar to kill the virus.");
            this.gameStory4.position(displayWidth/2-200, displayHeight/2.25);
            
            this.gameStory5.html("- Earn coins to buy vaccines so that you can stay safe. each vaccine costs 10 points.");
            this.gameStory5.position(displayWidth/2-200, displayHeight/2.06);

            this.backButton = createButton('BACK');
            this.backButton.style.height = 20
            this.backButton.position(windowWidth/2, windowHeight/2-200 + 400);

            this.guidelineButton2 = createButton('GUIDELINES TO BE FOLLOWED RIGHT NOW');
            this.guidelineButton2.style.height = 20
            this.guidelineButton2.position(windowWidth/2-200, windowHeight/1.5);
        });

        // FOR GUIDELINE BUTTON
        this.guidelineButton.mousePressed(()=> {
      
            this.playButton.hide();
            this.infoButton.hide();
            this.guidelineButton.hide();

            this.guideline = createElement('h2');
            this.guideline2 = createElement('h3');
            this.guideline3 = createElement('h3');
            this.guideline4 = createElement('h3');
            this.guideline5 = createElement('h3');
            this.guideline6 = createElement('h3');
            this.guideline7 = createElement('h3');
            this.guideline8 = createElement('h3');


            this.guideline.html("The guidelines we should follow during this time-: ");
            this.guideline.position(displayWidth/2-200, displayHeight/6);

            this.guideline2.html("- Try not to leave your house frequently.");
            this.guideline2.position(displayWidth/2-600, displayHeight/4.4);

            this.guideline3.html("- Always wear a mask or a face sheild if you go out.");
            this.guideline3.position(displayWidth/2-600, displayHeight/3.75);

            this.guideline4.html("- Try not to meet a lot of people at once.");
            this.guideline4.position(displayWidth/2-600, displayHeight/3.25);

            this.guideline5.html("- If you feel or know that you hav been exposed to someone with the virus, qurantine yourself for atleast 14 days.");
            this.guideline5.position(displayWidth/2-600, displayHeight/2.9);

            this.guideline6.html("- Folow the guidlines set by your government.");
            this.guideline6.position(displayWidth/2-600, displayHeight/2.6);
            
            this.guideline7.html("- This is a link of the guidlines by the government- https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf");
            this.guideline7.position(displayWidth/2-600, displayHeight/2.35);

            this.guideline8.html("- This is a link about this pandemic by the United Nations- https://www.un.org/en/coronavirus");
            this.guideline8.position(displayWidth/2-600, displayHeight/2.05);
        });

        this.score.html("Your Score: ");
        this.vaccines.html("Your Vaccines: ");
    }
}
