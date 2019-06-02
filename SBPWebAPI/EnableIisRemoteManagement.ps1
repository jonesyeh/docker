net user iisadmin "p@ssw0rd" /add
net localgroup "Administrators" "iisadmin" /add

Import-Module servermanager
Add-WindowsFeature web-mgmt-service

Set-ItemProperty -Path HKLM:\SOFTWARE\Microsoft\WebManagement\Server -Name EnableRemoteManagement -Value 1
Start-Service wmsvc