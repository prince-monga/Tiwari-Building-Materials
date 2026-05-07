<?php
require_once '../config/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;
if ($_SERVER['REQUEST_METHOD'] !== 'POST') jsonResponse(['error' => 'Method not allowed'], 405);

$body = getRequestBody();
$username = trim($body['username'] ?? '');
$password = $body['password'] ?? '';

if (!$username || !$password) jsonResponse(['error' => 'Credentials required'], 422);

try {
    $db = getDB();
    $stmt = $db->prepare('SELECT * FROM admins WHERE username = ?');
    $stmt->execute([$username]);
    $admin = $stmt->fetch();

    if (!$admin || !password_verify($password, $admin['password'])) {
        jsonResponse(['error' => 'Invalid credentials'], 401);
    }

    $token = generateToken(['id' => $admin['id'], 'username' => $admin['username']]);
    jsonResponse(['token' => $token, 'username' => $admin['username']]);
} catch (Exception $e) {
    jsonResponse(['error' => 'Server error'], 500);
}
