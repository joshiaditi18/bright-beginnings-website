
@echo off
cd /d "c:\Users\aditi\OneDrive\Desktop\preschool\bright-beginnings-website"
echo Initializing git repository...
git init
echo.
echo Checking git status...
git status
echo.
echo Adding all files...
git add .
echo.
echo Committing changes...
git commit -m "Add QR scanner functionality for form download"
echo.
echo Creating main branch...
git branch -M main
echo.
echo Adding or updating remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/joshiaditi18/bright-beginnings--website.git
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo Done!
pause
