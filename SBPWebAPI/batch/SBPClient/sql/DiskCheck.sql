--{LC01}:�w�м�C~Z
--{LC02}:�w�ЪŶ��j�p�W��
DECLARE  @SPACE   AS TABLE  (drive varchar(3), size decimal)
insert into @SPACE EXEC master..xp_fixeddrives 
declare @size int 
SELECT @size=SIZE FROM @SPACE
where drive='{JOB02}' AND size<{JOB03}
if @@ROWCOUNT>0
BEGIN
 insert into #job(ssis_job_no,job01,job02)
 values('disk_full_job','{JOB01}','{JOB02}�Ϻо��G�ѤU'+cast(@size as varchar)+'M �j�p�Aĵ�T�]�w�W���G'+CAST({JOB03} AS VARCHAR)+'M �j�p')
 

END

  