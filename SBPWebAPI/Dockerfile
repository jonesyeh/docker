# escape=`
# app image
FROM microsoft/aspnet:windowsservercore-10.0.14393.1198
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]


# configure IIS to write a global log file:
RUN Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log' -n 'centralLogFileMode' -v 'CentralW3C'; `
    Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log/centralW3CLogFile' -n 'truncateSize' -v 4294967295; `
    Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log/centralW3CLogFile' -n 'period' -v 'MaxSize'; `
    Set-WebConfigurationProperty -p 'MACHINE/WEBROOT/APPHOST' -fi 'system.applicationHost/log/centralW3CLogFile' -n 'directory' -v 'c:\iislog'

RUN Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters' -n ServerPriorityTimeLimit -v 0 -t DWord 

ENV sbp_user_pwd="p@ssw0rd" `
    SBP_WIN_USER_PWD="p@ssw0rd" `
	db_server="" `
	db="SBP"
	
VOLUME C:\LIC
VOLUME C:\LOG
EXPOSE 8172

WORKDIR C:\SRC
COPY . C:\SRC
RUN NET USER SBP_WIN_USER  $SBP_WIN_USER_PWD /add
# RUN NET localgroup "Performance Monitor Users" SBP_WIN_USER /add 
RUN .\SBPWebAPI\CreateSBPWebAPI.bat  "c:\SRC\SBPWebAPI" /SBPWebAPI SBP_WIN_USER $SBP_WIN_USER_PWD
WORKDIR C:\SRC\batch

RUN .\install.BAT
WORKDIR C:\SRC\SBPScheduleService
RUN .\install.BAT



COPY bootstrap.ps1 C:\
ENTRYPOINT ["powershell", "C:\\bootstrap.ps1"]
HEALTHCHECK --interval=5s `
 CMD powershell -command `
    try { `
     $response = iwr http://localhost/SBPWebAPI -UseBasicParsing; `
     if ($response.StatusCode -eq 200) { return 0} `
     else {return 1}; `
    } catch { return 1 }
