# Lizzie Photography Site

Site created for hosting Lizzie's photo portfolio.  


## Making the Website Live
### RUN LOCALLY: 
Open terminal (probably linux subsystem for windows) and in the root directry of the project, run
- `npm install`
- `npm start`

### GO LIVE ON INTERNET 
Make sure to make code changes in the main branch. Once done, you can commit and push those changes, then run the following command to get the website deployed online (which will modify the gh-pages branch of the repo):

`npm run deploy`



## How to update website
- To update the website, you can add photos, text, etc. all in the 'public' folder, then run some commands to get the website ready and online.
- The website is designed where you have a gallery page to view a single image from each photoshoot that can be clicked on to view the rest of them.

### STEP 1: Creating a new gallery
- Create a new folder inside of public -> photo_galleries named whatever you want (NO SPACES IN THE NAME). Add any photos into the folder. 
- Also create a file with an IDENTICAL NAME to the folder that uses '.json'. (If you right click -> create new text file, you can get rid of the '.txt' and add in '.json' instead).

EXAMPLE: If you want to make a gallery for Avereigh and Ethan's wedding, you could make a folder inside 'photo_galleries' called 'avereigh_ethan_wedding' that you place the photos into, in addition to creating a text document inside the folder that you name 'avereigh_ethan_wedding.json' (removing the '.txt' if it is still there).

### STEP 2: Make the gallery selectable from the 'Photo Gallery' page
For the gallery to be clickable, we need to add to the 'gallery-selector-images.json' file inside of public -> photo_galleries. In this file, provide an entry with the following:
- "folder": the name of the folder, case and spelling sensitive
- "coverImage": the name of the image (including the .png, .jpg, etc part) inside the folder that can be clicked to open the gallery
- "title": text that will be displayed with the image for people to see visiting the site
- "subtitle": text that will be displayed under the title and be more grey. Probably the location where you did the photos

Example:
``` 
{
    "folder": "avereigh_ethan_wedding",
    "coverImage": "photo187.png",
    "title": "Avereigh & Ethan"
    "subtitle": "Albany, LA"
}
```


**IMPORTANT:** To add a new entry, make sure it is inside of the []. Let's say your .json file already looks like this:
```
[
    {
        "folder": "andy+jodie",
        "coverImage": "Andy Jodie Ring POProsal-3.jpg",
        "title": "Andy + Jodie",
        "subtitle": "Baton Rouge, LA"
    },
    {
        "folder": "marie+miley",
        "coverImage": "Marie_and_Miley-22.jpg",
        "title": "Marie + Miley",
        "subtitle": "Baton Rouge, LA"
    }
]
```
To add another entry, you must place a comma after the '}', otherwise it will give you an error. The end resutl of adding A&E could look like this if you add it to the end:
```
[
    {
        "folder": "andy+jodie",
        "coverImage": "Andy Jodie Ring POProsal-3.jpg",
        "title": "Andy + Jodie",
        "subtitle": "Baton Rouge, LA"
    },
    {
        "folder": "marie+miley",
        "coverImage": "Marie_and_Miley-22.jpg",
        "title": "Marie + Miley",
        "subtitle": "Baton Rouge, LA"
    },
    {
    "folder": "avereigh_ethan_wedding",
    "coverImage": "photo187.png",
    "title": "Avereigh & Ethan"
    "subtitle": "Albany, LA"
    }
]
```
Or you could add it in the middle, first, etc. Just make sure every '}' has a comma after it except for the very last one.


### STEP 3: Make the gallery itself
Once the gallery is selectable, you can now edit the .json you made inside the folder for the gallery (so for A&E, if you called the .json `avereigh_ethan_wedding.json`, we will edit that file).

This fie should be formatted as an object (everythign inside of '{}') with the following key values:
- "title": Well, the title lol
- "subtitle": bigger text than the description just below the title
- "description": OPTIONAL, can provide as many paragraphs as you want of smaller sized text below the title/subtitle before getting to the pictures
- "format": 'rows' or 'columns'. 
    - rows: everything is grouped based on rows. If photo heights are different, the shorter phoot will have whitespace around it to ensure the row ends at the same spot (you can see a perfect horizontal white space below each row)
    - columns: 2 columns on larger screens. The even numbered photos will be on the left (starting with 0), and the odd numbered photos will be on the right. Columns will allow for uneven rows if photo heights are different.
- "contents": an array list of all the photos and how they will be formatted into the rows or columns

Example:
```
{
    "title":"Andy + Jodie",
    "subtitle": "Naturey Place, Baton Rouge, LA",
    "description": ["paragraph 1", "paragraph 2"],
    "format": "rows",
    "contents": [...]
}
```

#### Rows Format How-To
'contents' must be a 2D array. To get started, add '[]' after contents. Hit enter to make the closign ']' go down a couple lines to make it easier to read:
```
"contents": [

]
```

Everything will be added inside this outer '[]' you just added above. Inside the '[]', we will add another '[]' for each row you want, with a comma between each. Let's say you want to start with two rows. Here's what that would look like:
```
"contents": [
    [

    ],
    [

    ]
]
```
**IMPORTANT:** Note that we hit enter to leave extra space in the middle, and the comma was added after the first closing ']' in order to add the second one in.


Inside of the inner '[]', you can add an object for each image (or text). The object needs the following:
- "type": type one of the followig words -> "photo", "text", or "stacked"
    - if you select "photo", you'll also need
        - "image": name of the image in the folder, include file extension
        - "title": this is probably not necessary. It is the text that displays if the person's browser isn't able to display the image, but since the whole point of the site is to showcase images, it probably is irrelevant
    - if you select "text", you'll also need
        - "title": title again lol
        - "paragraphs": array list of paragraphs
    - if you select "stacked", you'll also need
        - "images": array list of image names including file extensions. First one provided will be on top
Examples:
```
{   
    "type": "photo",
    "image": "Andy Jodie Ring POProsal-3.jpg",
    "title": "Andy + Jodie"
},
{
    "type": "text",
    "title": "Text Title",
    "paragraphs": ["Paragraph 1.", "Paragraph 2."]
},
{
    "type": "stacked",
    "images": ["Andy Jodie Ring POProsal-13.jpg", "Andy Jodie Ring POProsal-13.jpg"]
}
```


Here's an example of a final product with two rows, where the first row has an image (3.jpg) followed by a stack of two images, and the second row has text followed by an image

```
"contents": [
    [
        {
            
            "type": "photo",
            "image": "Andy Jodie Ring POProsal-3.jpg",
            "title": "Andy + Jodie"
        },
        {
            "type": "stacked",
            "images": ["Andy Jodie Ring POProsal-13.jpg", "Andy Jodie Ring POProsal-13.jpg"]
        }
    ],
    [
        {
            "type": "text",
            "title": "Text Title",
            "paragraphs": ["Paragraph 1.", "Paragraph 2."]
        },
        {
            "type": "photo",
            "image": "Andy Jodie Ring POProsal-17.jpg",
            "title": "Andy + Jodie"
        }
    ]
]
```


#### Columns Format How-To
The contents will be a 1D array list. Even-numbered values are on the left, odd-numbered are on the right. Array lists are strange because the 'first' entry is marked as 0, the 'second' is 1, etc. So it start with 0 to count (0, 1, 2, 3, ...). 

Each image or text can be formatted just like in the rows format, but the 'stacked' option is irrelevant here.

EXAMPLE: the photos on the left are even numbered starting with 0, so Marie_and_Miley-3.jpg and Marie_and_Miley-12.jpg. The images on the right are Marie_and_Miley-20.jpg and Marie_and_Miley-15.jpg
```
"contents": [
    {
        "type": "photo",
        "image": "Marie_and_Miley-3.jpg",
        "title": "Marie and Miley"
    },
    {
        "type": "photo",
        "image": "Marie_and_Miley-20.jpg",
        "title": "Marie and Miley"
    },
    {
        "type": "photo",
        "image": "Marie_and_Miley-12.jpg",
        "title": "Marie and Miley"
    },
    {
        "type": "photo",
        "image": "Marie_and_Miley-15.jpg",
        "title": "Marie and Miley"
    }
]
```


## TODO
- fix load times for images on column view (load based on what is visible?) (may be issue with file sizes too large)


- gallery select page look like example:
    - can try making it with text over picture if want to try
        - make the photos silghtly tinted on mobile to compensate for lack fo mouse hover
        

- feature clickking on image to make it fully visible on screen


