# ENIGMA XIII - Local Server Script
# PowerShell version

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "ENIGMA XIII - Local Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check for Python
try {
    $pythonVersion = python --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Starting Python HTTP Server on http://localhost:8000" -ForegroundColor Green
        Write-Host ""
        Write-Host "Open your browser and go to: http://localhost:8000" -ForegroundColor Yellow
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        python -m http.server 8000
        exit
    }
} catch {}

# Check for Node.js
try {
    $nodeVersion = node --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Starting Node.js HTTP Server on http://localhost:8000" -ForegroundColor Green
        Write-Host ""
        Write-Host "Installing http-server (if not already installed)..." -ForegroundColor Yellow
        npm install -g http-server 2>&1 | Out-Null
        Write-Host ""
        Write-Host "Open your browser and go to: http://localhost:8000" -ForegroundColor Yellow
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        http-server -p 8000
        exit
    }
} catch {}

# Check for PHP
try {
    $phpVersion = php --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Starting PHP Server on http://localhost:8000" -ForegroundColor Green
        Write-Host ""
        Write-Host "Open your browser and go to: http://localhost:8000" -ForegroundColor Yellow
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        php -S localhost:8000
        exit
    }
} catch {}

# No server found
Write-Host "No server found! Please install one of the following:" -ForegroundColor Red
Write-Host ""
Write-Host "Option 1: Python (Recommended)" -ForegroundColor Yellow
Write-Host "  Download from: https://www.python.org/downloads/" -ForegroundColor White
Write-Host ""
Write-Host "Option 2: Node.js" -ForegroundColor Yellow
Write-Host "  Download from: https://nodejs.org/" -ForegroundColor White
Write-Host ""
Write-Host "Option 3: PHP" -ForegroundColor Yellow
Write-Host "  Download from: https://www.php.net/downloads.php" -ForegroundColor White
Write-Host ""
Write-Host "For now, opening index.html directly in browser..." -ForegroundColor Yellow
Write-Host "Note: Some features may not work without a server." -ForegroundColor Yellow
Write-Host ""

Start-Process "index.html"


