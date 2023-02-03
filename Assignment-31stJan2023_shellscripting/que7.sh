#ls -l A  > file
mkdir A 
cd A 
mkdir f{1..5}
v=$( ls -lR | grep -c '^d' )
echo "$v"
if [ $v -lt 5 ] 
then 
   mkdir Backflipt
elif [ $v -eq 5 ] 
then
   mkdir Xenovous
else
   echo "Directory creation not needed"
   exit
fi 