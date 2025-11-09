@echo off
echo ========================================
echo ENIGMA XIII - Local Server
echo ========================================
echo.

REM Check for Python
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting Python HTTP Server on http://localhost:8000
    echo.
    echo Open your browser and go to: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    goto :end
)

REM Check for Node.js
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting Node.js HTTP Server on http://localhost:8000
    echo.
    echo Installing http-server (one-time setup)...
    npm install -g http-server >nul 2>&1
    echo.
    echo Open your browser and go to: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    http-server -p 8000
    goto :end
)

REM Check for PHP
php --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting PHP Server on http://localhost:8000
    echo.
    echo Open your browser and go to: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    php -S localhost:8000
    goto :end
)

echo No server found! Please install one of the following:
echo.
echo Option 1: Python (Recommended)
echo   Download from: https://www.python.org/downloads/
echo.
echo Option 2: Node.js
echo   Download from: https://nodejs.org/
echo.
echo Option 3: PHP
echo   Download from: https://www.php.net/downloads.php
echo.
echo For now, opening index.html directly in browser...
echo Note: Some features may not work without a server.
echo.
start index.html

:end
pause

