Add-LocalGroupMember -Group "Performance Monitor Users" -Member SBP_WIN_USER

# update the connection strings:
Stop-Service W3SVC
$SBPBatchSettingEntitiesconnectionString = "metadata=res://*/Models.SBPBatchSettingModel.csdl|res://*/Models.SBPBatchSettingModel.ssdl|res://*/Models.SBPBatchSettingModel.msl;provider=System.Data.SqlClient;provider connection string=""data source=$($env:db_server);initial catalog=$($env:db);user id=sbp_user;password=$($env:sbp_user_pwd);MultipleActiveResultSets=True;App=EntityFramework"""
$SBPDMEntitiesconnectionString = "metadata=res://*/Models.SBPDMModel.csdl|res://*/Models.SBPDMModel.ssdl|res://*/Models.SBPDMModel.msl;provider=System.Data.SqlClient;provider connection string=""data source=$($env:db_server);initial catalog=$($env:db);user id=sbp_user;password=$($env:sbp_user_pwd);MultipleActiveResultSets=True;App=EntityFramework"""
$DefaultConnectionconnectionString = "Data Source=$($env:db_server);Initial Catalog=$($env:db);Integrated Security=False;User id=sbp_user;password=$($env:sbp_user_pwd)"
$SBPEntitiesconnectionString = "metadata=res://*/SBPModel.csdl|res://*/SBPModel.ssdl|res://*/SBPModel.msl;provider=System.Data.SqlClient;provider connection string=""data source=$($env:db_server);initial catalog=$($env:db);user id=sbp_user;password=$($env:sbp_user_pwd);MultipleActiveResultSets=True;App=EntityFramework"""

$file = 'C:\SRC\SBPWEBAPI\Web.config' 
[xml]$config = Get-Content $file;
$db1Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'SBPBatchSettingEntities'}
$db1Node.connectionString = $SBPBatchSettingEntitiesconnectionString
$db2Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'SBPDMEntities'}
$db2Node.connectionString = $SBPDMEntitiesconnectionString
$db3Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'DefaultConnection'}
$db3Node.connectionString = $DefaultConnectionconnectionString

$config.Save($file)

$file = 'C:\SBPClient\sbpclient.exe.config' 
[xml]$config = Get-Content $file;
$db4Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'SBPEntities'}
$db4Node.connectionString = $SBPEntitiesconnectionString
$config.Save($file)

$file = 'C:\SRC\SBPScheduleService\SBPScheduleService.exe.config' 
[xml]$config = Get-Content $file;
$db5Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'SBPEntities'}
$db5Node.connectionString = $SBPEntitiesconnectionString
$config.Save($file)

$account="SBP_WIN_USER"
$password="$($SBP_WIN_USER_PASSWORD)"
$service="name='SBPScheduleService'"

$svc=gwmi win32_service -filter $service
$svc.StopService()
$svc.change($null,$null,$null,$null,$null,$null,$account,$password,$null,$null,$null)
$svc.StartService()

#install sqlncli 11.0
$client11 = $false
$checkClient = Get-ChildItem 'HKLM:\Software\Microsoft\*' -ea SilentlyContinue | Where {$_.name -like '*Client*'}
if ($checkClient.name.Split('\') -eq 'Microsoft SQL Server Native Client 11.0')  {   
    Write-Host 'SQL Native Client 11.0 has been already installed'   $client11 = $True   
} else {      
    Write-Host 'SQL Native Client 11.0 not present'      
    $client11 = $false    
}
if ($client11 -eq $false){ 
    try {   
        Write-Host 'Installing Native Client 11'
        cd C:\SRC\batch
        $client11Install = msiexec.exe /qn /i sqlncli.msi IACCEPTSQLNCLILICENSETERMS=YES /L*V C:\SRC\batch\sqlNativeClientInstall.log
    } Catch {
        Write-Host 'SQL Native Client 11 was not installed. Manual action required'
    }
}
Start-Sleep 15


# copy process-level environment variables (from `docker run`) machine-wide:
foreach($key in [System.Environment]::GetEnvironmentVariables('Process').Keys) {
    if ([System.Environment]::GetEnvironmentVariable($key, 'Machine') -eq $null) {
        $value = [System.Environment]::GetEnvironmentVariable($key, 'Process')
        [System.Environment]::SetEnvironmentVariable($key, $value, 'Machine')
    }
}

# echo the IIS log to the console:
Start-Service W3SVC 
Invoke-WebRequest http://localhost/sbpwebapi -UseBasicParsing | Out-Null
netsh http flush logbuffer | Out-Null
Get-Content -path 'c:\iislog\W3SVC\u_extend1.log' -Tail 1 -Wait 