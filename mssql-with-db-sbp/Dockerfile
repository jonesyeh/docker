# escape=`
FROM jonesyeh/mssql-2017-dev-collation
LABEL maintainer "Jones Yeh"
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]
ARG ARG_SQL_FILE="_"
ENV sa_password="12345678" `
    sql_filename="_" `
	SQL_FILE=$ARG_SQL_FILE

VOLUME C:\mssql
WORKDIR C:\init
COPY . . 
CMD ./exec_sql.ps1 $env:sa_password -ACCEPT_EULA $env:ACCEPT_EULA -sql_filename $env:sql_filename -SQL_FILE $env:SQL_FILE -Verbose

HEALTHCHECK CMD powershell -command `
    try { `
     $result = invoke-sqlcmd -Query 'SELECT 1' ; `
     if ($result[0] -eq 1) { return 0} `
     else {return 1}; `
} catch { return 1 }