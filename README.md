# Pokemon-GO-Friend-Codes
Solution to share and find friend code easier and free

You can check Wiki to help you. 

https://czantoine.github.io/Pokemon-GO-Friend-Codes/index.html

Follow step to create your own Pokemon GO website. 

Before there's an explanation as to why I did this. I needed to share and find the players' nicks easily. I quickly found this solution to create a spreadsheet but I exported the XLSX file ( the format of the spreadsheet ) in .json to create a database. The problem is that it's not automatic and there is a few minutes before the update. I turned to this solution :

## STEP 1 : CREATE NEW GOOGLE FORM

This link when you share : [Google Form](https://docs.google.com/forms/d/e/1FAIpQLScFHCnyZp6XjcHkaLSgjLxJkYbGMd8MfChMSHnS6hNeis9JyQ/viewform?usp=sf_link) 

Now check the answers : We need to send the answers in spreadsheet. Click on the green button and create new spreadsheet.

![](https://i.ibb.co/MRBnRFN/Capture-d-e-cran-2020-08-06-a-09-44-05.png)

## STEP 2 : CLONE REPOSITORY 

In file **add.html** : you must change <iframe> ... </iframe> by your Google Form iframe. 

Return on your form and click on send. 

![](https://i.ibb.co/nszmsdz/Capture-d-e-cran-2020-08-06-a-09-59-56.png)

Copy the link and replace it in the code **add.html**. 

Change `width="100%" height="1090" frameborder="0" marginheight="0" marginwidth="0"` for more responsive in other device. 

## STEP 3  : SHARE SPREADSHEET PUBLIC

Go back on google Spreadsheet -> File -> Publish to the web -> Publish 
You have a link ( [Don't use this](https://docs.google.com/spreadsheets/d/e/2PACX-1vQfzTSyVDZTUL1fSsWCfhlTn1dY5UBkBfN6NefWeIolQngE3UUFgyToq9gcsblH_FxhcqMu0SO3vEsf/pubhtml) ) 

Now share it in public. Like this : [spreadsheet ](https://docs.google.com/spreadsheets/d/1tJA9kK9jhGtoCXBSgvWHrJ9I0DH1srVMVd9xR2MTI44/edit?usp=sharing)

![](https://cdn-media-1.freecodecamp.org/images/1*AM6_ME5wgoQdtfMHFB_ipg.png)

Copy only ID and replace it in the code **table.js** between `/list/` and `/1/`

You can check the link if work fine : [like this](https://spreadsheets.google.com/feeds/list/1tJA9kK9jhGtoCXBSgvWHrJ9I0DH1srVMVd9xR2MTI44/1/public/values?alt=json)

[You can try on my github host ! ](https://czantoine.github.io/Pokemon-GO-Friend-Codes/index.html)

## OTHER THINGS

We can use Google Spreadsheet to do more tricks and functionality like team color statistics. Tell me more if you have idea !







