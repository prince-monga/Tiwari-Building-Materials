<?php
require_once '../config/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['error' => 'Method not allowed'], 405);
}

$body = getRequestBody();
$name    = trim($body['name'] ?? '');
$phone   = trim($body['phone'] ?? '');
$email   = trim($body['email'] ?? '');
$product = trim($body['product'] ?? '');
$message = trim($body['message'] ?? '');

if (!$name || !$phone) {
    jsonResponse(['error' => 'Name and phone are required'], 422);
}

if (!preg_match('/^[6-9]\d{9}$/', preg_replace('/\s+/', '', $phone))) {
    jsonResponse(['error' => 'Invalid phone number'], 422);
}

try {
    $db = getDB();
    $stmt = $db->prepare(
        'INSERT INTO inquiries (name, phone, email, product, message) VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$name, $phone, $email, $product, $message]);
    jsonResponse(['success' => true, 'message' => 'Inquiry received. We will contact you shortly.']);
} catch (Exception $e) {
    jsonResponse(['error' => 'Server error. Please try again.'], 500);
}
