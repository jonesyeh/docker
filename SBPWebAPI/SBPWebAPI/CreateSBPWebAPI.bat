REM CreateSBPWebAPI.bat  SBPWEBAPI������|  IIS�����ؿ� ���ε{�������ѧO�Τ�b�� ���ε{�������ѧO�Τ�K�X
REM CreateSBPWebAPI.bat  "c:\inetpub\wwwroot\SBPWebAPI" /SBPWebAPI sbp_win_user p@ssw0rd
@echo off
REM �إ�IIS���ε{���PApplicationPool
set appcmd=%systemroot%\system32\inetsrv\appcmd.exe

REM �]�wWeb���ε{�����|
set WebAPIPATH=%1
set VirualDir=%2
set appPool=SBPWebAppPool
REM �Y���ε{���s�b���R��
rem %appcmd% delete APP "Default Web Site%VirualDir%"

REM �إ� ApplicationPool
%appcmd% add apppool /name:%appPool% /managedRuntimeVersion:v4.0

REM �]ApplicationPool����b��
REM %appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.identityType:LocalService
%appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.identityType:SpecificUser
%appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.userName:%3
%appcmd% set config /section:applicationPools /[name='%appPool%'].processModel.password:%4

REM �إ����ε{��
%appcmd% add APP /site.name:"Default Web Site" /path:%VirualDir% /physicalpath:%WebAPIPATH%
%appcmd% set app /app.name:"Default Web Site%VirualDir%" /applicationPool:%appPool%

