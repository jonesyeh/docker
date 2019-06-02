COPY Ionic.Zip.DLL %1
COPY ICSharpCode.SharpZipLib.dll %1
gacutil.exe -i %1\Ionic.Zip.dll
gacutil.exe -i %1\ICSharpCode.SharpZipLib.dll
