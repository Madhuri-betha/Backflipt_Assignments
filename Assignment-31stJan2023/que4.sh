#reading a directory from user
read -p "enter directory:" directory
#checking directory exists or not
if [ -d $directory ]
then
   rm -rf $directory
else
   echo "directory does not exists"
fi 