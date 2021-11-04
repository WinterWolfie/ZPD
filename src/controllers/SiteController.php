<?php


namespace zpd\src\controllers;

use PhpHare\Controller;
use PhpHare\Request;
use PhpHare\Response;


class SiteController extends Controller
{

    public function trader(Request $request, Response $response){
        $this->render('trader');
    }


}