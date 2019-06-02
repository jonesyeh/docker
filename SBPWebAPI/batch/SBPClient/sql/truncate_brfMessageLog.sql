declare @tablename varchar(100)='',@sql nvarchar(max)=''
set  @tablename='ESOAF.{JOB02}.brfMessageLog'
select @sql='declare @cnt int '+char(13)+char(10)
select @sql+='select @cnt=count(*) from '+@tablename
 

select @sql+=' if @cnt>{JOB03} '+char(13)+char(10)
select @sql+=' begin '+char(13)+char(10)
select @sql+=' truncate table  '+ @tablename + char(13)+char(10)
select @sql+=' end '+char(13)+char(10)

execute sp_executesql  @sql