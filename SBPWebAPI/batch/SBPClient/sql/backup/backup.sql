declare @physical_device_name nvarchar(max)=''
	SELECT top 1 @physical_device_name=physical_device_name
   FROM msdb.dbo.backupset a INNER JOIN msdb.dbo.backupmediafamily b      
   ON a.media_set_id = b.media_set_id      
   WHERE database_name='{LC01}' 
   AND type='D' 
   order by backup_finish_date desc 
	if  (datepart(dw,getdate())=1 and datepart(hour,getdate())=0)  or @physical_device_name<>'{LC02}\{LC01}.bak'  --�P������Χ䤣�짹�� ��Ʈw �ƥ�
	begin
		BACKUP DATABASE [{LC01}] TO  DISK = N'{LC02}\{LC01}.bak' WITH NOFORMAT, INIT,  NAME = N'{LC01}-���� ��Ʈw �ƥ�', SKIP, NOREWIND, NOUNLOAD, COMPRESSION,  STATS = 10
	end
	if  (datepart(dw,getdate())<>1 and datepart(hour,getdate())=0)   --�D�P������
	begin
		BACKUP DATABASE [{LC01}] TO  DISK = N'{LC02}\{LC01}.bak'  WITH  DIFFERENTIAL , NOFORMAT, NOINIT,  NAME = N'{LC01}-�t�� ��Ʈw �ƥ�', SKIP, NOREWIND, NOUNLOAD, COMPRESSION,  STATS = 10
	end
	BACKUP LOG [{LC01}] TO  DISK = N'{LC02}\{LC01}.bak' WITH NOFORMAT, NOINIT,  NAME = N'{LC01}-����O��  �ƥ�', SKIP, NOREWIND, NOUNLOAD, COMPRESSION,  STATS = 10



