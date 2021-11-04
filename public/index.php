<?php


use zpd\src\Application;
use zpd\src\controllers\SiteController;

require_once __DIR__ . '/../vendor/autoload.php';


$app = new Application(dirname(__DIR__));

$app->router->get('/', [SiteController::class, 'trader']);
$app->router->get('/trader', [SiteController::class, 'trader']);

$app->run();
