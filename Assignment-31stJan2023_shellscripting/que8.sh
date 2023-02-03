read -p "enter a base dir" dir
case $dir in
  [dD][Oo][cC])  ls -R /c/Users/Dell/Documents
   ;;
   [Dd][oO][wW])  ls -R /c/Users/Dell/Downloads
   ;;
   [Dd][eE][Ss]) ls -R /c/Users/Dell/Desktop
   ;;
   *)
   echo "enter valid input"
   ;;
esac 