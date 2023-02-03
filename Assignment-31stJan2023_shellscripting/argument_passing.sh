#counting num of arguments
echo "Num of arguments $#" 
if [ $# -gt 0 ]
then
  echo "$*" #printing aruguments
  echo "sum of arguments $(expr $1 + $2 + $3 ) " 
else
  echo "no arguments"
fi
