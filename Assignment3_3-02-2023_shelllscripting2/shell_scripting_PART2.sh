#!/bin/bash
#reading folder name fromoutput panel 
folder_name=$1
function diskspace {
  FOLDER=$1
  #fetching diskspace 
  size=$(du -sh "$FOLDER" | awk '{print $1}') 
  #fetching foldername or filename from path
  echo "Folder: $(basename "$FOLDER") $size"  
  for file in "$FOLDER"/*; 
  do
    if [ -f "$file" ]; 
      then
      filename=$(basename "$file")   #fetching foldername/filename from path
      echo -e "\t $filename $(du -sh "$file" | awk '{print $1}')"
    fi
  done
  for subdir in "$FOLDER"/*; 
  do
    if [ -d "$subdir" ]; 
    then
    diskspace "$subdir" #recursive call for sub_directories
    fi
  done
}
diskspace "$folder_name"  #function_call

