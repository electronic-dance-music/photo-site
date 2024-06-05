# Lizzie Photography Site

Site created for hosting Lizzie's photo portfolio.  

## How to update website
To update the website, you can add photos, text, etc. all in the 'public' folder, then run some commands to get the website ready and online.

### Photo and text setup in public folder
The website is designed where you have a gallery page to view a single image from a photoshoot that can be clicked on to view the rest of them.

#### Creating a new gallery
Create a new folder inside of public -> photo_galleries named whatever you want (NO SPACES IN THE NAME). Add any photos into the folder. Also create a file with an IDENTICAL NAME to the folder that uses '.json'. (If you right click -> create new text file, you can get rid of the '.txt' and add in '.json' instead).

For example, if you want to make a gallery for Avereigh and Ethan's wedding, you could make a folder inside 'photo_galleries' called 'avereigh_ethan_wedding' that you place the photos into, in addition to creating a text document inside the folder that you name 'avereigh_ethan_wedding.json' (removing the '.txt' if it is still there).

For the gallery to be clickable, we need to add to the 'gallery-selector-images.json' file. In this file, provide the following:
- "folder": the name of the folder, case and spelling sensitive
- "coverImage": the name of the image (including the .png, .jpg, etc part) inside the folder that can be clicked to open the gallery
- "title": text that will be displayed with the image for people to see visiting the site
Example: 
{
    "folder": "avereigh_ethan_wedding",
    "coverImage": "photo187.png",
    "title": "Avereigh & Ethan"
}

Once the gallery is opened, the .json file inside its folder will be used (ex: clicking on the image in the above example for A&E wedding will trigger using 'avereigh_ethan_wedding.json').


...................................ADD HOW TO FORMAT THIS FILE


## TODO
- Add footer across the site
- update the navbar to have photo icon
- update favicon tiny icon
- add contents to home page
- add contents to about page
- finish readme walkthrough of how to make changes



## Making the Website Live

Make sure to make code changes in the main branch. Once done, you can commit and push those changes, then run the following commands to get the website ready then deploy it online (which will modify the gh-pages branch of the repo):

`npm run build`
`npm run deploy`