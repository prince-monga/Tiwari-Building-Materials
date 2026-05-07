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
        $stmt = $db->prepare('SELECT * FROM blog_posts WHERE id = ?');
        $stmt->execute([$id]);
        jsonResponse($stmt->fetch());
    }
    $stmt = $db->query('SELECT id, title, slug, category, status, created_at FROM blog_posts ORDER BY created_at DESC');
    jsonResponse($stmt->fetchAll());
}

if ($method === 'POST') {
    $b = getRequestBody();
    $slug = strtolower(preg_replace('/[^a-z0-9]+/', '-', $b['title'] ?? ''));
    $db->prepare('INSERT INTO blog_posts (title, slug, excerpt, content, category, tags, meta_title, meta_description, status) VALUES (?,?,?,?,?,?,?,?,?)')
       ->execute([$b['title'], $slug, $b['excerpt'] ?? '', $b['content'] ?? '', $b['category'] ?? '', $b['tags'] ?? '', $b['meta_title'] ?? $b['title'], $b['meta_description'] ?? $b['excerpt'] ?? '', $b['status'] ?? 'draft']);
    jsonResponse(['success' => true, 'id' => $db->lastInsertId()]);
}

if ($method === 'PUT' && $id) {
    $b = getRequestBody();
    $db->prepare('UPDATE blog_posts SET title=?, excerpt=?, content=?, category=?, tags=?, meta_title=?, meta_description=?, status=?, updated_at=NOW() WHERE id=?')
       ->execute([$b['title'], $b['excerpt'] ?? '', $b['content'] ?? '', $b['category'] ?? '', $b['tags'] ?? '', $b['meta_title'] ?? $b['title'], $b['meta_description'] ?? '', $b['status'] ?? 'draft', $id]);
    jsonResponse(['success' => true]);
}

if ($method === 'DELETE' && $id) {
    $db->prepare('DELETE FROM blog_posts WHERE id = ?')->execute([$id]);
    jsonResponse(['success' => true]);
}

jsonResponse(['error' => 'Bad request'], 400);
