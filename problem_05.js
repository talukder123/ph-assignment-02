function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
        return "Invalid";
   }

   for (const i of times) {
    if (typeof i !== "number") {
        return "Invalid";
    }
   }
   
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }
   
  return total / times.length;
}