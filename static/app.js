function cultureCheck(api) {

console.log(api);

	switch($('input[type="checkbox"]:checked').length) {

		case 3:
			api.goto(24);
			break;
		
		case 2:
			api.goto(25);
			break;
		
		default:
			api.goto(26);
			break;		
	}

}