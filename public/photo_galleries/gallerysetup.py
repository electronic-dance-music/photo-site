from os import walk,path

#inputs
while True:
    folderName = input("Type the folder name: ")
    if folderName != "" and path.exists(path.join("./",folderName)):
        break
    else:
        print("Can't find a folder with that name...")
while True:
    title = input("Enter a great title: ")
    if title != "": break
while True:
    subtitle = input("Enter a subtitle: ")
    if subtitle != "": break

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