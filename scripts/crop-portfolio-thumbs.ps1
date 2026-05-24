# Miniaturas 1600x1000 (16:10) — crops específicos para tarjetas de portfolio
Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "artifacts\levelup-design\src\assets\portfolio"
$targetW = 1600
$targetH = 1000

function Export-CardThumb {
    param(
        [string]$SourcePath,
        [string]$DestPath,
        [double]$FocusX = 0.5,
        [double]$FocusY = 0.5
    )

    if (-not (Test-Path $SourcePath)) {
        throw "No existe la imagen fuente: $SourcePath"
    }

    $src = [System.Drawing.Image]::FromFile($SourcePath)
    try {
        $targetRatio = $targetW / $targetH
        $srcRatio = $src.Width / $src.Height

        if ($srcRatio -gt $targetRatio) {
            $cropH = $src.Height
            $cropW = [int][Math]::Round($cropH * $targetRatio)
        }
        else {
            $cropW = $src.Width
            $cropH = [int][Math]::Round($cropW / $targetRatio)
        }

        $x = [int][Math]::Round(($src.Width - $cropW) * $FocusX)
        $y = [int][Math]::Round(($src.Height - $cropH) * $FocusY)
        $x = [Math]::Max(0, [Math]::Min($x, $src.Width - $cropW))
        $y = [Math]::Max(0, [Math]::Min($y, $src.Height - $cropH))

        $cropRect = New-Object System.Drawing.Rectangle $x, $y, $cropW, $cropH
        $cropped = $src.Clone($cropRect, $src.PixelFormat)

        $thumb = New-Object System.Drawing.Bitmap $targetW, $targetH
        $graphics = [System.Drawing.Graphics]::FromImage($thumb)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($cropped, 0, 0, $targetW, $targetH)
        $graphics.Dispose()
        $cropped.Dispose()

        $thumb.Save($DestPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $thumb.Dispose()
        Write-Host "OK $DestPath"
    }
    finally {
        $src.Dispose()
    }
}

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$clients = "C:\Desarrollo\Ingenieria\Clientes"
$judithHero = Join-Path $clients "cestasyeventosjudith\src\assets\hero-cestas.jpg"
$interHero = Join-Path $clients "levelupinteriores\frontend\src\assets\hero.jpg"

# Judith: composición de producto premium (sin recortes de rostro)
Export-CardThumb -SourcePath $judithHero -DestPath (Join-Path $outDir "judith.jpg") -FocusX 0.5 -FocusY 0.42

# Interiores: zona cocina/comedor del hero
Export-CardThumb -SourcePath $interHero -DestPath (Join-Path $outDir "levelup-interiores.jpg") -FocusX 0.58 -FocusY 0.48
