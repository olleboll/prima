// Dessa första två ska alltid köras och fylla upp en lista med exempel som alla användare kan komma åt!

function getDefaultData(user){
	var posting = $.post("php/getData.php", {
		default_user: user
	});

	posting.done(function(data){
		setupExamples(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}


function getDefaultExample(id){
	var posting = $.post("php/getData.php", {
		id_examples: id
	});

	posting.done(function(data){
		defineExamples(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getAllOpenExamples(){
	var posting = $.post("php/getData.php", {
		examples: '1'
	});

	posting.done(function(data){
		setUpAllOpenExamples(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getOpenExample(id){
	var posting = $.post("php/getData.php", {
		id_Allexamples: id
	});

	posting.done(function(data){
		defineOpenExamples(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getDefaultSettings(id){
	var posting = $.post("php/getData.php", {
		id_settings: id
	});

	posting.done(function(data){
		setupSettings(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getUserSettings(user){
	var posting = $.post("php/getData.php", {
		id_userS: user
	});

	posting.done(function(data){
		console.log(data);
		setupUserSettings(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

// Kan vara sårbar för injections
function getUserSetting(id){
	var posting = $.post("php/getData.php", {
		id_TB: id
	});

	posting.done(function(data){
		defineUserSettings(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}


function login(inputs){
	var posting = $.post("php/getData.php", {
		login_name: inputs[0], password: inputs[1]
	});

	posting.done(function(data){
		if(data == "FAIL!"){
			alert("Fel namn eller lösenord");
		}else{
			console.log(JSON.parse(data));
			setUserID(data);
			document.getElementById("myexamples").innerHTML = "INLOGGAD <br> Exempel <br>";
			document.getElementById("mysettings").innerHTML = "Verktygslådor <br>";
			setUpInterface();
			getUserExamples(JSON.parse(data));
			getUserSettings(JSON.parse(data));
		}

	});

	posting.fail(function(){
		alert("fail");
	});
}

function register(inputs){
	var posting = $.post("php/getData.php", {
		reg_name: inputs[0], skola: inputs[1], password: inputs[2]
	});

	posting.done(function(data){
		alert(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getUserExamples(user){
	var posting = $.post("php/getData.php", {
		id_user: user
	});

	posting.done(function(data){
		setupUserExamples(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getUserExample(id){
	var posting = $.post("php/getData.php", {
		id_examples: id
	});

	posting.done(function(data){
			//console.log(data);
			defineUserExamples(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function saveExample(id, name, xml, open){
	var posting = $.post("php/getData.php", {
		userid: id, name: name, example: xml, open:open
	});

	posting.done(function(data){
		alert(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function editExample(id, xml){
	console.log("editing example: "+id);
	var posting = $.post("php/getData.php", {
		id_examples: id, example: xml
	});

	posting.done(function(data){
		alert("Exempel: " + id + " har ändrats.");
	});

	posting.fail(function(){

		alert("fail");
	});
}

function saveSettings(settings){
	var posting = $.post("php/getData.php", {
		toolbox: settings[0], camera: settings[1]
	});

	posting.done(function(data){
		alert(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}
$(document).ready(function(){
	$("#login").submit(function(e){
		e.preventDefault();
		var inputs = [];
		inputs[0] = $('#login_name').val();
		inputs[1] = $('#login_password').val();
        login(inputs);
    });
    $("#register").submit(function(e){
		e.preventDefault();
		var inputs = [];
		inputs[0] = $('#reg_name').val();
		inputs[1] = $('#reg_skola').val();
		inputs[2] = $('#reg_password').val();
		inputs[3] = $('#reg_password2').val();
		if(inputs[2] == inputs[3]){
			//console.log(inputs);
        	register(inputs);
		}else{
			alert("Inte samma lösenord, gör om gör rätt!");
		}
		
    });
    
	getDefaultData("1");
	getDefaultSettings('1');
	getAllOpenExamples();
});
