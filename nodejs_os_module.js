// my code code here
import os from 'os';
export const getOsName = () => {
    return os.type()
}

export const getFreeMemoryPercentage = () => {
    let totalMemory = os.totalmem();
    let FreeMemory = os.freemem();
    // console.log(totalMemory, 10);
    // console.log(FreeMemory, 11);
    let availableMemory = ((FreeMemory / totalMemory));
    console.log(availableMemory, 12)
    return availableMemory
}

export const getUptimeInMinutes = () => {
    console.log("os time", os.uptime() / 60)
    let mints = Math.round(os.uptime() / 60);
    return mints
}

getFreeMemoryPercentage();
getUptimeInMinutes();
getOsName();


// extra checks

export const arch = () => {
    // Returns the operating system CPU architecture
    console.log(os.arch()) // let say x64 like that 
    //Returns an object containing the operating system's constants for process signals, error cotes etc.
    console.log(os.constants)
    console.log(os.userInfo())
    console.log(os.tmpdir())
    console.log(os.release())
    console.log(os.networkInterfaces())
    console.log(os.hostname())
    console.log(os.loadavg()) //, (1, 5, and 15 minutes)
    console.log(os.cpus())
    console.log(os.endianness())

    return os.arch()
}















/**-
 * 
 * arch()	Returns the operating system CPU architecture
constants	Returns an object containing the operating system's constants for process signals, error cotes etc.
cpus()	Returns an array containing information about the computer's CPUs
endianness()	Returns the endianness of the CPU
EOL	Returns the end-of-line marker for the current operating system
freemem()	Returns the number of free memory of the system
hostname()	Returns the hostname of the operating system
loadavg()	Returns an array containing the load averages, (1, 5, and 15 minutes)
networkInterfaces()	Returns the network interfaces that has a network address
platform()	Returns information about the operating system's platform
release()	Returns information about the operating system's release
tmpdir()	Returns the operating system's default directory for temporary files
totalmem()	Returns the number of total memory of the system
type()	Returns the name of the operating system
uptime()	Returns the uptime of the operating system, in seconds
userInfo()	Returns information about the current user
 * 
 */