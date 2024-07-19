from os import walk

folderName = input("Type the folder name: ")
title = input("Enter a great title: ")

output = '{'+'\
    "title": "{}",\
    "subtitle": "Baton Rouge, LA",\
    "format": "columns",\
    "contents": ['.format(title)
for (root,dirs,files) in walk("./"+folderName,topdown=True):
    output+= '\n'\
        +'{'+'\
            "type": "photo",\
            "image": "{}",\
            "title": "{}}"\
        '.format(file,title)+'},'

output = output[:-1]+'\
    ]\
\}'

with open(f"{folderName}/{folderName}.json",'w') as openFile:
    openFile.write(output)