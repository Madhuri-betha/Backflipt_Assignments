mkdir dir
cd dir
touch f{1..5}
mkdir d{1..5}
cd d1 
touch f{1..5}
cd ..
ls -l -R | grep -c '^-'