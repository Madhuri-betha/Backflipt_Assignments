read -p "Enter Name:" Name
if [ -z "$Name" ]
then  exit
else
  echo "$Name" > f 
  read -p "Enter Contact:" Contact
fi

if [ -z "$Contact" ]
then  exit
else
  echo "$Contact" >> f 
  read -p "Enter Email:" Email
fi

if [ -z "$Email" ]
then  exit
else
  echo "$Email" >> f 
  read -p "Enter Gender:" Gender
fi

if [[ "$Gender" == "male" || "$Gender" == "female" || "$Gender" == "prefer not to say" ]];
then  echo "$Gender" >> f 
else
  exit
fi


#another way

read -p "Enter Name:" Name
read -p "Enter Contact:" Contact
read -p "Enter Email:" Email
read -p "Enter Gender:" Gender
if [ -z $Name -o -z $Contact -o -z $Email -o -z $Gender ]  
then 
exit 
else
  touch b
  echo "$Name" >>b
  echo "$Contact" >>b
  echo "$Email" >>b
  case $Gender in
  "male") echo "Male" >>b ;;
  "female") echo "female" >>b ;;
  "prefer not to say") echo "prefer not to say" >>que9 ;;
  *) 
  exit ;;
  esac
fi

