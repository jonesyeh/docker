COPY WinSCPnet.DLL %1
COPY WinSCP.exe %1
gacutil.exe -i %1\WinSCPnet.dll
Copy %1\WinSCP.exe C:\Windows\assembly\GAC_MSIL\WinSCPnet\1.2.10.5874__2271ec4a3c56d0bf