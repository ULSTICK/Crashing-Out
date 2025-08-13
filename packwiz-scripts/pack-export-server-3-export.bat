@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ====== Paths ======
for %%I in ("%~dp0..") do set "ROOT=%%~fI"
set "SERVER_DIR=%ROOT%\packwiz-server"
set "PACK_FOLDER=%ROOT%\packwiz-modrinth"
set "BUILD_DIR=%ROOT%\packwiz-builds"
set "COPY_LIST_FILE=%ROOT%\packwiz-scripts\configs\server-copy-list.txt"

rem ====== Ensure destination directories exist ======
if not exist "%SERVER_DIR%" mkdir "%SERVER_DIR%"
if not exist "%BUILD_DIR%" mkdir "%BUILD_DIR%"

rem ====== Copy items from list ======
if not exist "%COPY_LIST_FILE%" (
  echo [ERROR] Copy list not found: "%COPY_LIST_FILE%"
  exit /b 1
)

echo Copying items from server copy list...
for /f "usebackq tokens=* delims= eol=#" %%L in ("%COPY_LIST_FILE%") do (
  set "ITEM=%%L"
  if defined ITEM (
    set "SRC=%ROOT%\!ITEM!"
    set "DST=%SERVER_DIR%\!ITEM!"
    if exist "!SRC!\" (
      echo   [+] DIR  "!ITEM!"
      robocopy "!SRC!" "!DST!" /E /NFL /NDL /NJH /NJS /NP >nul
      if errorlevel 8 (
        echo   [ERROR] robocopy failed for directory "!ITEM!"
        exit /b 1
      )
    ) else if exist "!SRC!" (
      echo   [+] FILE "!ITEM!"
      for %%P in ("!DST!") do set "DSTDIR=%%~dpP"
      if not exist "!DSTDIR!" mkdir "!DSTDIR!" 2>nul
      copy /Y "!SRC!" "!DST!" >nul
      if errorlevel 1 (
        echo   [ERROR] copy failed for file "!ITEM!"
        exit /b 1
      )
    ) else (
      echo   [!] Skipping "!ITEM!" (not found at root)
    )
  )
)

rem ====== Read version from packwiz-modrinth\pack.toml ======
set "PACK_TOML=%PACK_FOLDER%\pack.toml"
for /f "usebackq tokens=* delims=" %%V in (`powershell -NoProfile -Command ^
  "(Select-String -LiteralPath '%PACK_TOML%' -Pattern '^\s*version\s*=\s*\"([^\"]+)\"' -AllMatches).Matches[0].Groups[1].Value"`) do set "VERSION=%%V"

if not defined VERSION (
  echo [WARN] Could not read version from pack.toml; defaulting to 0.0.0
  set "VERSION=0.0.0"
)

rem ====== Zip server folder ======
set "OUTZIP=%BUILD_DIR%\Remake Server Pack %VERSION%.zip"
echo Creating "%OUTZIP%" ...
powershell -NoProfile -Command ^
  "if (Test-Path -LiteralPath '%OUTZIP%') { Remove-Item -LiteralPath '%OUTZIP%' -Force } ;" ^
  "Compress-Archive -LiteralPath '%SERVER_DIR%\*' -DestinationPath '%OUTZIP%'"

echo [OK] Wrote: %OUTZIP%
endlocal
