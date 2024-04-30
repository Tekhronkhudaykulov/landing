<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $comment = $_POST["comment"];
    
    if (isset($_POST["designer"]) && $_POST["designer"] == "on") {
        $role = "Роль: designer";
    } elseif (isset($_POST["owner"]) && $_POST["owner"] == "on") {
        $role = "Роль: владелец";
    } else {
        $role = "Роль не указана";
    }

    $text = "Имя: $name\nТелефон: $phone\nКомментарий: $comment\n$role";

    $url = "https://bot.esot.uz/notification/index.php?token=gXKLeif3u3YGDQDmhcf1P5QIiQafTwe1lGjtSMF&text=" . urlencode($text);

    $response = file_get_contents($url);

    if ($response) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    header("Location: index.html"); // Перенаправление обратно на форму
}
?>