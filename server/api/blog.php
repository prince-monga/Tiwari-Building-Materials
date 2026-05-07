<?php
require_once '../config/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

$db = getDB();
$slug = $_GET['slug'] ?? null;

if ($slug) {
    $stmt = $db->prepare("SELECT * FROM blog_posts WHERE slug = ? AND status = 'published'");
    $stmt->execute([$slug]);
    $post = $stmt->fetch();
    if (!$post) jsonResponse(['error' => 'Not found'], 404);
    jsonResponse($post);
} else {
    $category = $_GET['category'] ?? null;
    $search   = $_GET['search'] ?? null;
    $limit    = min((int)($_GET['limit'] ?? 10), 50);
    $offset   = (int)($_GET['offset'] ?? 0);

    $where  = ["status = 'published'"];
    $params = [];

    if ($category) {
        $where[]  = 'category = ?';
        $params[] = $category;
    }
    if ($search) {
        $where[]  = '(title LIKE ? OR excerpt LIKE ?)';
        $params[] = "%$search%";
        $params[] = "%$search%";
    }

    $sql  = 'SELECT id, title, slug, excerpt, category, tags, created_at FROM blog_posts WHERE ';
    $sql .= implode(' AND ', $where);
    $sql .= ' ORDER BY created_at DESC LIMIT ' . $limit . ' OFFSET ' . $offset;

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    jsonResponse($stmt->fetchAll());
}
