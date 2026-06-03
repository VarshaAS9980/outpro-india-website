$gitPaths = 'C:\Program Files\Git\cmd;C:\Program Files\Git\bin'
$userPath = [Environment]::GetEnvironmentVariable('Path','User')
if (-not $userPath) {
    [Environment]::SetEnvironmentVariable('Path', $gitPaths, 'User')
    Write-Host 'PATH created with Git'
} elseif ($userPath -notlike '*C:\Program Files\Git\cmd*' -and $userPath -notlike '*C:\Program Files\Git\bin*') {
    [Environment]::SetEnvironmentVariable('Path', $userPath + ';' + $gitPaths, 'User')
    Write-Host 'PATH updated with Git'
} else {
    Write-Host 'PATH already contains Git'
}
Write-Host 'User PATH:'
Write-Host ([Environment]::GetEnvironmentVariable('Path','User'))
