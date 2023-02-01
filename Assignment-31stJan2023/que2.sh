read -p "enter directory" directory
if [ -d "$directory" ]
then
 echo "$directory exists"
 else
  mkdir $directory
fi