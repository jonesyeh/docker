declare @physical_device_name nvarchar(max)=''
	SELECT top 1 @physical_device_name=physical_device_name
   FROM msdb.dbo.backupset a INNER JOIN msdb.dbo.backupmediafamily b      
   ON a.media_set_id = b.media_set_id      
   WHERE database_name='{LC01}' 
   AND type='D' 
   order by backup_finish_date desc 
	if  (datepart(dw,getdate())=1 and datepart(hour,getdate())=0)  or @physical_device_name<>'{LC02}\{LC01}.bak'  --星期日凌晨或找不到完整 資料庫 備份
	begin
		BACKUP DATABASE [{LC01}] TO  DISK = N'{LC02}\{LC01}.bak' WITH NOFORMAT, INIT,  NAME = N'{LC01}-完整 資料庫 備份', SKIP, NOREWIND, NOUNLOAD, COMPRESSION,  STATS = 10
	end
	if  (datepart(dw,getdate())<>1 and datepart(hour,getdate())=0)   --非星期日凌晨
	begin
		BACKUP DATABASE [{LC01}] TO  DISK = N'{LC02}\{LC01}.bak'  WITH  DIFFERENTIAL , NOFORMAT, NOINIT,  NAME = N'{LC01}-差異 資料庫 備份', SKIP, NOREWIND, NOUNLOAD, COMPRESSION,  STATS = 10
	end
	BACKUP LOG [{LC01}] TO  DISK = N'{LC02}\{LC01}.bak' WITH NOFORMAT, NOINIT,  NAME = N'{LC01}-交易記錄  備份', SKIP, NOREWIND, NOUNLOAD, COMPRESSION,  STATS = 10



