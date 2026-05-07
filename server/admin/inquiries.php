<?php
require_once '../config/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

$admin = requireAuth();
$db = getDB();
$method = $_SERVER['REQUEST_METHOD'];
$id = (int)($_GET['id'] ?? 0);

if ($method === 'GET') {
    if ($id) {
        $stmt = $db->prepare('SELECT * FROM inquiries WHERE id = ?');
        $stmt->execute([$id]);
        jsonResponse($stmt->fetch());
    }
    $status = $_GET['status'] ?? null;
    $sql = 'SELECT * FROM inquiries' . ($status ? ' WHERE status = ?' : '') . ' ORDER BY created_at DESC';
    $stmt = $db->prepare($sql);
    $stmt->execute($status ? [$status] : []);
    jsonResponse($stmt->fetchAll());
}

if ($method === 'PUT' && $id) {
    $body = getRequestBody();
    $status = $body['status'] ?? 'new';
    $db->prepare('UPDATE inquiries SET status = ? WHERE id = ?')->execute([$status, $id]);
    jsonResponse(['success' => true]);
}

if ($method === 'DELETE' && $id) {
    $db->prepare('DELETE FROM inquiries WHERE id = ?')->execute([$id]);
    jsonResponse(['success' => true]);
}

jsonResponse(['error' => 'Bad request'], 400);
