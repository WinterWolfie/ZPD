<?php

namespace zpd\src;



class Application extends \PhpHare\Application
{
    public function __construct($rootPath)
    {
        parent::__construct($rootPath, []);

        parent::setPublicDir("http://localhost:1234/");

        $this->view->setViewDir("/src/views/");
        $this->view->setLayoutDir("/src/views/layouts/");
        $this->view->setMainLayout("main");
    }
}