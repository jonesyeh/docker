set framework_path=C:\Windows\Microsoft.NET\Framework\v2.0.50727
set batch_user=%ComputerName%\ssis_win_user

REM 批次執行檔案路徑
set ap=sbpclient.exe
set sbpclient_folder=c:\sbpclient
cd %sbpclient_folder%
rem 將sbpclient.exe.config 改成web.config
rename %ap%.config web.config 
rem 進行connectionString區段進行加密
%framework_path%\aspnet_regiis.exe -pdf "connectionStrings" %sbpclient_folder% 
rem 將曾經授於本機的ssiw_win_user可以讀取rsa金鑰移除
%framework_path%\aspnet_regiis.exe -pr "NetFrameworkConfigurationKey" %batch_user% 
rem 將web.config 更名為sbpclient.exe.config
rename web.config %ap%.config 
rem 將web.config 更名為sbpclient.exe.config

