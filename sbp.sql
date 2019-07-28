USE [master]
declare @db_name varchar(255)='SBP'
DECLARE @backup_file nvarchar(255)=N'C:\mssql\SBP.bak'
declare @mdb_file nvarchar(255)=N'C:\mssql\SBP.mdf'
declare @log_file nvarchar(255)=N'C:\mssql\SBP_log.ldf'
declare @data_name nvarchar(255)='SBP_DB'
declare @log_name nvarchar(255)='SBP_DB_LOG'
declare @detach_statement nvarchar(max)=''
declare @attach_statement nvarchar(max)=''
declare @sbp_user_pwd Nvarchar(50)='p@ssw0rd'
declare @SqlStatement nvarchar(250)=''
begin try 
	IF EXISTS (SELECT 1 FROM SYS.DATABASES WHERE NAME = @db_name) 
	begin
		set @detach_statement='BEGIN EXEC sp_detach_db '+@db_name+' END;'
		EXECUTE sp_executesql @detach_statement
	end
	set @attach_statement='	CREATE DATABASE '+@db_name+' ON 
		( FILENAME = '''+ @mdb_file+''' ),
		( FILENAME = '''+@log_file+''' )
		 FOR ATTACH'
		 EXECUTE sp_executesql @attach_statement

end try
begin catch
	RESTORE DATABASE @db_name FROM  DISK = @backup_file WITH  FILE = 1,
	MOVE @data_name TO @mdb_file,
	MOVE @log_name TO @log_file, 
	RECOVERY,  NOUNLOAD,  REPLACE,  STATS = 5
end catch

If not Exists (select loginname from master.dbo.syslogins 
    where name ='sbp_user')
Begin
	Select @SqlStatement = 'CREATE LOGIN sbp_user with password= '''+@sbp_user_pwd +''';ALTER SERVER ROLE [sysadmin] ADD MEMBER [sbp_user];USE '+@db_name +';ALTER USER sbp_user WITH LOGIN=sbp_user'	
    EXEC sp_executesql @SqlStatement	
end 
