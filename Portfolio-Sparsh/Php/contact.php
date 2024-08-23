<?php
include("connection.php"); // Ensure this path is correct based on your file structure

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $firstName = $_POST['First_name'];
    $lastName = $_POST['Last_name'];
    $mobileNumber = $_POST['Mobile_number'];
    $email = $_POST['email'];
    $message = $_POST['Message'];

    // Prepare the SQL statement to prevent SQL injection
    $sql = "INSERT INTO portfolio (first_name, last_name, mobile_number, email, message) VALUES (?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($Conn, $sql);
    
    if ($stmt) {
        // Bind parameters
        mysqli_stmt_bind_param($stmt, "sssss", $firstName, $lastName, $mobileNumber, $email, $message);
        
        // Execute the statement
        if (mysqli_stmt_execute($stmt)) {
            // Redirect to success page
            header("Location: success.php");
            exit;
        } else {
            echo "Error executing query: " . mysqli_stmt_error($stmt);
        }
        
        // Close the statement
        mysqli_stmt_close($stmt);
    } else {
        echo "Error preparing query: " . mysqli_error($Conn);
    }

    // Close the database connection
    mysqli_close($Conn);
} else {
    echo "Invalid request method.";
}
?>
