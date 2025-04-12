@echo off

title Star Technology Packmode Picker

setlocal

set default_path=%~dp0packmode\default
set hardmode_path=%~dp0packmode\hardmode
set target_path=%~dp0config

color 0B

echo.
echo =======================================================
echo.
echo            Star Technology Packmode Picker
echo.
echo =======================================================
echo.
echo [D] Default - the standard experience
echo [H] Hardmode - for the masochistic
echo.

choice /c DH /n /m "Enter Packmode (D or H):"

if errorlevel 2 goto set_hardmode
if errorlevel 1 goto set_default

:set_default
echo.
echo Applying Default Packmode...
echo.
echo =======================================================================================
echo =======================================================================================
robocopy "%default_path%" "%target_path%" *.* /e /nfl /ndl

@REM If server.properties exists, update server config
IF EXIST server.properties (move "%target_path%\server.properties" .\)
echo default > .mode
goto end

:set_hardmode
echo.
echo Applying Hardmode Packmode...
echo.
echo =======================================================================================
echo =======================================================================================
robocopy "%hardmode_path%" "%target_path%" *.* /e /nfl /ndl

@REM If server.properties exists, update server config
IF EXIST server.properties (move "%target_path%\server.properties" .\)
echo hardmode > .mode
goto end

:end
@REM if server.properties is left over in the config path, remove it
IF EXIST "%target_path%/server.properties" DEL "%target_path%\server.properties"

echo =======================================================================================
echo =======================================================================================
echo.
echo Packmode switch complete!
echo.

pause