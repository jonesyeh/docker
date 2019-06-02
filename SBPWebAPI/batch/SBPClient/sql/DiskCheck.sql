--{LC01}:硬碟槽C~Z
--{LC02}:硬碟空間大小上限
DECLARE  @SPACE   AS TABLE  (drive varchar(3), size decimal)
insert into @SPACE EXEC master..xp_fixeddrives 
declare @size int 
SELECT @size=SIZE FROM @SPACE
where drive='{JOB02}' AND size<{JOB03}
if @@ROWCOUNT>0
BEGIN
 insert into #job(ssis_job_no,job01,job02)
 values('disk_full_job','{JOB01}','{JOB02}磁碟機：剩下'+cast(@size as varchar)+'M 大小，警訊設定上限：'+CAST({JOB03} AS VARCHAR)+'M 大小')
 

END

  