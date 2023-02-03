#copying one directory to another directory
mkdir dir1
cd dir1
touch f{1..5}
cd ..
mkdir dir2
cd dir2
touch f{6..10}
cd ..
cp -r dir1 dir2