
rem 註冊元件
set framework_path=C:\Windows\Microsoft.NET\Framework\v2.0.50727


REM 批次執行檔案路徑
set sbpclient_folder=c:\sbpclient\  



 
 REM 註冊安全性FTP元件
 call install_winscp.bat %framework_path%
rem  pause
 REM 註冊解壓縮元件
 call install_zip.bat %framework_path%
rem  pause

REM 複製執行檔
xcopy .\sbpclient %sbpclient_folder% /S /y
rem pause
rem 以下若沒有安裝sql server才需要執行，否則可以註解
rem 安裝 SQLSysClrTypes
rem SQLSysClrTypes.msi
rem pause
rem rem 安裝SharedManagementObjects
rem SharedManagementObjects.msi
rem pause
rem REM 安裝sql client 
rem sqlncli.msi
rem pause