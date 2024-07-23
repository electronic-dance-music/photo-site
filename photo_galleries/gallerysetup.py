from os import walk

folderName = input("Type the folder name: ")
title = input("Enter a great title: ")
subtitle = input("Enter a subtitle: ")

output = '{\n\
    "title": "'+title+'",\n\
    "subtitle": "'+subtitle+'",\n\
    "format": "columns",\n\
    "contents": ['
for (root,dirs,files) in walk("./"+folderName):
    for file in files:
        print(file)
        output+= '\n\
            {\n\
                "type": "photo",\n\
                "image": "'+file+'",\n\
                "title": "'+title+'"\n\
            },'

output = output[:-1]+'\n\
    ]\n\
}'

with open(f"./{folderName}/{folderName}.json",'w') as openFile:
    openFile.write(output)