# Adapted from Microsoft's SQL Server Express sample:
# https://github.com/Microsoft/sql-server-samples/blob/master/samples/manage/windows-containers/mssql-server-2016-express-windows/start.ps1

param(
[Parameter(Mandatory=$false)]
[string]$sa_password,
[Parameter(Mandatory=$false)]
[string]$ACCEPT_EULA,
[Parameter(Mandatory=$false)]
[string]$sql_filename,
[Parameter(Mandatory=$false)]
[string]$SQL_FILE
)
$status="install"

if($ACCEPT_EULA -ne "Y" -And $ACCEPT_EULA -ne "y")
{
	Write-Verbose "ERROR: You must accept the End User License Agreement before this container can start."
	Write-Verbose "Set the environment variable ACCEPT_EULA to 'Y' if you accept the agreement."

    exit 1
}
$Path = "C:\init\file1.txt"
$values = Get-Content $Path 
if ($values -eq $null)
{
	$status > $path		
	# start the service
	Write-Verbose "Starting SQL Server"
	start-service MSSQLSERVER

	if($sa_password -eq "_") {
		if (Test-Path $env:sa_password_path) {
			$sa_password = Get-Content -Raw $secretPath
		}
		else {
			Write-Verbose "WARN: Using default SA password, secret file not found at: $secretPath"
		}
	}

	if($sa_password -ne "_")
	{
		Write-Verbose "Changing SA login credentials"
		
		$sqlcmd = "ALTER LOGIN sa with password=" +"'" + $sa_password + "'" + ";ALTER LOGIN sa ENABLE;"
		& sqlcmd -Q $sqlcmd
	}

	Write-Verbose 'enable server remote management(WINRM)'
	New-ItemProperty -Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System -Name LocalAccountTokenFilterPolicy -Type DWord -Value 1
	Start-Service winrm	
	
	
	if($SQL_FILE -ne "_")
	{
		Write-Verbose 'exec build sql file begin...'
		Invoke-Sqlcmd -InputFile C:\init\$SQL_FILE
		Write-Verbose 'exec sql file end...'
	}
	if($sql_filename -ne "_")
	{
		Write-Verbose 'exec sql file begin...'
		Invoke-Sqlcmd -InputFile C:\mssql\$sql_filename
		Write-Verbose 'exec sql file end...'
	}
		
	
	
	
}
$lastCheck = (Get-Date).AddSeconds(-2) 
while ($true) { 
    Get-EventLog -LogName Application -Source "MSSQL*" -After $lastCheck | Select-Object TimeGenerated, EntryType, Message	 
    $lastCheck = Get-Date 
    Start-Sleep -Seconds 2 
}