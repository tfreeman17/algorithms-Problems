 // Write a funciton which, given a year as a number, returns whether that number is a leap year.

// 2000 -> true
// 1900 -> false
// 2016 -> true 

// function result = is_leap_year(year)

// if a given year is a leap year

// RESULT = IS_LEAP_YEAR(YEAR) returns TRUE if YEAR is a leap year, and

// FALSE otherwise.


// An error is raised if YEAR is not a positive integer??
<!DOCTYPE html>
<html>
<head>
	<title>algorithm problem 2</title>
</head>
<body>
<script>
	function remainder(year, number){
	return year / number;
}

function LeapYear(year){
	a = remainder(year,400);
	b = remainder(year,100);
	c = remainder(year,4);
	if ((a==0)||(b==0 && c==0)) {
		return true;
	} 
	else{
		return false;
	}
}

console.log(LeapYear(2001));
console.log(LeapYear(2000));
</script>
</body>
</html>
