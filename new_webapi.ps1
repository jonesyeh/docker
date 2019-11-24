param(
[string]$db_server="172.18.0.23",
[string]$db="LAB01",
[string]$user="sbp_user",
[string]$user_pwd="p@ssw0rd",
[string]$from_webapi="C:\SRC\SBPWEBAPI",
[string]$to_webapi="C:\SRC\SBPWEBAPI01",
[string]$sbpclient="C:\SBPClient",
[string]$sbp="sbpclient01.exe"
)


$web_config="$to_webapi\Web.config"
$sbp_config="$sbpclient\$sbp.config"

Copy-Item "$from_webapi" -Recurse "$to_webapi"
Copy-Item "$sbpclient\sbpclient.exe" "$sbpclient\$sbp"
Copy-Item "$sbpclient\sbpclient.exe.config" "$sbp_config"

$SBPBatchSettingEntitiesconnectionString = "metadata=res://*/Models.SBPBatchSettingModel.csdl|res://*/Models.SBPBatchSettingModel.ssdl|res://*/Models.SBPBatchSettingModel.msl;provider=System.Data.SqlClient;provider connection string=""data source=$db_server;initial catalog=$db;user id=$user;password=$user_pwd;MultipleActiveResultSets=True;App=EntityFramework"""
$SBPDMEntitiesconnectionString = "metadata=res://*/Models.SBPDMModel.csdl|res://*/Models.SBPDMModel.ssdl|res://*/Models.SBPDMModel.msl;provider=System.Data.SqlClient;provider connection string=""data source=$db_server;initial catalog=$db;user id=$user;password=$user_pwd;MultipleActiveResultSets=True;App=EntityFramework"""
$DefaultConnectionconnectionString = "Data Source=$db_server;Initial Catalog=$db;Integrated Security=False;User id=$user;password=$user_pwd"
$SBPEntitiesconnectionString = "metadata=res://*/SBPModel.csdl|res://*/SBPModel.ssdl|res://*/SBPModel.msl;provider=System.Data.SqlClient;provider connection string=""data source=$db_server;initial catalog=$db;user id=$user;password=$user_pwd;MultipleActiveResultSets=True;App=EntityFramework"""

$file = $web_config 
[xml]$config = Get-Content $file;
$db1Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'SBPBatchSettingEntities'}
$db1Node.connectionString = $SBPBatchSettingEntitiesconnectionString
$db2Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'SBPDMEntities'}
$db2Node.connectionString = $SBPDMEntitiesconnectionString
$db3Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'DefaultConnection'}
$db3Node.connectionString = $DefaultConnectionconnectionString

$config.Save($file)

$file = $sbp_config
[xml]$config = Get-Content $file;
$db4Node = $config.configuration.connectionStrings.add | where {$_.name -eq 'SBPEntities'}
$db4Node.connectionString = $SBPEntitiesconnectionString
$config.Save($file)