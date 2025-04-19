@echo off

title Star Technology Packmode Picker

setlocal

set default_path=%~dp0packmode\default
set hard_path=%~dp0packmode\hard
set target_path=%~dp0\

color 0B

echo.
echo =======================================================
echo.
echo            Star Technology Packmode Picker
echo.
echo =======================================================
echo.
echo [D] Default - the standard experience
echo [H] Hard - for the masochistic
echo.

choice /c DH /n /m "Enter Packmode (D or H):"

if errorlevel 2 goto set_hard
if errorlevel 1 goto set_default

:set_default
echo.
echo Applying Packmode [Default]...
echo.
echo =======================================================================================
echo =======================================================================================
rmdir /s /q "%target_path%config\ftbquests\quests\chapters"
robocopy "%default_path%" "%target_path%" *.* /e /nfl /ndl
goto end

:set_hard
echo.
echo Applying Packmode [Hard]...
echo.
echo =======================================================================================
echo =======================================================================================
rmdir /s /q "%target_path%config\ftbquests\quests\chapters"
robocopy "%hard_path%" "%target_path%" *.* /e /nfl /ndl
goto end

:end
echo =======================================================================================
echo =======================================================================================
echo.
echo Packmode switch complete!
echo.

pause