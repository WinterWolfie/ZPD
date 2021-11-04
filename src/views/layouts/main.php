<?php
/** @var $this View */


use PhpHare\Application;

$this->addCss(['master', 'header']);


?>

<html lang="en">
<head>
    <title><?php echo $this->title ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="<?=Application::$app->PublicDir?>/img/Icon.png">

    <?php foreach($this->cssFiles as $key=>$value): ?>
        <link rel="stylesheet" type="text/css" href="<?=Application::$app->PublicDir?>/scripts/<?= $value; ?>.css" />
    <?php endforeach; ?>


    <?php foreach($this->jsLibs as $key=>$value): ?>
        <script src="<?= $value; ?>"></script>
    <?php endforeach; ?>

</head>
<body>
<header id="globalheader">
    <div id="navbar">
        <div id="navbarLeft">
            <a href="/" style="text-decoration: none;">
                <p style="font-size: 22px; margin: 0; color: white">Trader</p>
            </a>

        </div>
        <!--<div style="height:30px; width:90px; position: relative; float: left;">
            <div id="lol">

            </div>
        </div>-->

        <div id="navbarMid">
            <div id="mann">
                <nav id="NavContainer">
                </nav>
            </div>
            <div id="dropdown">
                <ul>
                    <li>
                        <a>23423423</a>
                    </li>
                    <li>
                        <a>23423423</a>
                    </li>
                    <li>
                        <a>23423423</a>
                    </li>
                </ul>
            </div>

        </div>
        <div id="navbarRight">
        </div>
    </div>
</header>
<div id="content" style="padding-top:45px;">
    <div class="container">
        {{content}}
    </div>
</div>
<footer></footer>


<?php foreach($this->scripts as $key=>$value): ?>
    <script type="module" src="<?= Application::$app->PublicDir ?>/scripts/<?= $value; ?>.js"></script>
<?php endforeach; ?>

</body>
</html>

