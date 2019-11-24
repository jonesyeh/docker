powershell -ExecutionPolicy Bypass .\new_webapi.ps1 -db_server "sbpdb" -db "LAB01" -user "sbp_user" -user_pwd "p@ssw0rd" -from_webapi "C:\SRC\SBPWEBAPI" -to_webapi "C:\SRC\SBPWEBAPI01" -sbpclient "C:\SBPClient" -sbp "sbpclient01.exe"
call CreateNewSBPWebAPI.bat  "C:\SRC\SBPWEBAPI01" /SBPWebAPI01
powershell -ExecutionPolicy Bypass .\new_webapi.ps1 -db_server "sbpdb" -db "LAB02" -user "sbp_user" -user_pwd "p@ssw0rd" -from_webapi "C:\SRC\SBPWEBAPI" -to_webapi "C:\SRC\SBPWEBAPI02" -sbpclient "C:\SBPClient" -sbp "sbpclient02.exe"
call CreateNewSBPWebAPI.bat  "C:\SRC\SBPWEBAPI02" /SBPWebAPI02