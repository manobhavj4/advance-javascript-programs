
function movecommand(direction){

	var whatHappens;
	switch (direction)
	{
		case "forward":
			whatHappens = " you encountered a forward direction";
			break;
		case "back":
			whatHappens = " you encountered a back direction";
			break;
		case "right":
			whatHappens = " you encountered a right direction";
			break;
		case "left":
			whatHappens = " you encountered a left direction";
			break;
		default:
			whatHappens = " you encountered an invalid direction";
	}
	return whatHappens;
}