<?php
require_once '../config/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

requireAuth();
$db = getDB();

$totalInquiries = $db->query('SELECT COUNT(*) FROM inquiries')->fetchColumn();
$newInquiries   = $db->query("SELECT COUNT(*) FROM inquiries WHERE status = 'new'")->fetchColumn();
$totalBlogs     = $db->query('SELECT COUNT(*) FROM blog_posts')->fetchColumn();
$publishedBlogs = $db->query("SELECT COUNT(*) FROM blog_posts WHERE status = 'published'")->fetchColumn();

$recentInquiries = $db->query('SELECT id, name, phone, product, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5')->fetchAll();

jsonResponse([
    'stats' => [
        'total_inquiries'  => (int)$totalInquiries,
        'new_inquiries'    => (int)$newInquiries,
        'total_blogs'      => (int)$totalBlogs,
        'published_blogs'  => (int)$publishedBlogs,
    ],
    'recent_inquiries' => $recentInquiries,
]);
