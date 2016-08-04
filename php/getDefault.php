<?php
//getExampleData('1');
if (isset($_POST['id_user'])){
	getExampleData($_POST['id_user']);
}

function connectToDB(){
	$mysqliLink = new mysqli('localhost:8889', 'root', 'root', 'mydb');

	if(mysqli_connect_errno()){
		exit();
	}
	return $mysqliLink;
}

function getExampleData($userid){
	$mysqliLink = connectToDB();
	$query = mysqli_query($mysqliLink ,"SELECT * FROM examples WHERE id_user = '$userid'");
	$examples = array();
	$index = 0;
	while($row = mysqli_fetch_assoc($query)){
		
		$examples[$index] = $row['example1'];
		$index++;
	}
	$json = json_encode($examples[4]);
	echo $json;
}

?>