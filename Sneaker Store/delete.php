<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sneakerstore";

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "DELETE FROM skemworth WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        header("Location: admin.php");
        exit();
    } else {
        echo "Error deleting record: " . $conn->error;
    }
    $conn->close();
} else {
    echo "Invalid request.";
}
?>