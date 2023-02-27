<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'config.php';
$sql = mysqli_query($db_conn, "SELECT * FROM `casestudy`");
$rows = array();
while ($row = $sql->fetch_assoc()) {
  $rows[] = $row;
};
echo json_encode($rows);
?>


