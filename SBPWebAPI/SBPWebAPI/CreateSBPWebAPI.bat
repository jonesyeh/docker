REM CreateSBPWebAPI.bat  SBPWEBAPI實體路徑  IIS虛擬目錄 應用程式集區識別用戶帳號 應用程式集區識別用戶密碼
REM CreateSBPWebAPI.bat  "c:\inetpub\wwwroot\SBPWebAPI" /SBPWebAPI sbp_win_user p@ssw0rd
@echo off
REM 建立IIS應用程式與ApplicationPool
set appcmd=%systemroot%\system32\inetsrv\appcmd.exe

REM 設定Web應用程式路徑
set WebAPIPATH=%1
set VirualDir=%2
set appPool=SBPWebAppPool
REM 若應用程式存在先刪除
rem %appcmd% delete APP "Default Web Site%VirualDir%"

REM 建立 ApplicationPool
%appcmd% add apppool /name:%appPool% /managedRuntimeVersion:v4.0

REM 設ApplicationPool執行帳號
REM %appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.identityType:LocalService
%appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.identityType:SpecificUser
%appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.userName:%3
%appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.password:%4

REM 建立應用程式
%appcmd% add APP /site.name:"Default Web Site" /path:%VirualDir% /physicalpath:%WebAPIPATH%
%appcmd% set app /app.name:"Default Web Site%VirualDir%" /applicationPool:%appPool%

