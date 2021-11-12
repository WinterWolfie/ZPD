<?php

$this->title = 'Trader';
$this->addCss(['trader/trader']);
$this->addScript(["trader/trader"]);

$this->addJsLib([
        "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
        "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js",
        "https://code.highcharts.com/highcharts.js",
]);


?>

<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

<!--<script type="module" src="js/cryptoTrader/main.js"></script>-->

<!--<script type="module" src="widgets/niceSelect/select.js"></script>
<link rel="stylesheet" type="text/css" href="widgets/niceSelect/select.css" />-->

<h1 id="connectionStatus">Connecting</h1>
<h1> funny poopoo</h1>

<div id="algorithmView">
    <!--<h1>statistics</h1>
    <div>
        <div>
            <button>get top algorithm</button>
        </div>
        <div>
            <button>option</button>
        </div>
    </div>
    <div id="performanceGraph"></div>
    <div id="algorithmTrades">
    </div>-->
</div>


<div id="accounts" >
    <h3>Accounts</h3>
</div>

<div id="logs" >
    <h2>Logs</h2>
    <div style="display: flex">
        <div class="log">
            <h3>klines</h3>
            <div id="klineLog"></div>
        </div>

        <div class="log">
            <h3>Orders</h3>
            <div id="orderLog"></div>
        </div>

        <div class="log">
            <h3>Server Logs</h3>
            <div id="serverLog"></div>
        </div>
    </div>
</div>



<div id="MReversionGraphs" >
    <h3 id="GetMReversionGraph">Get MReversionData</h3>
    <div id="MReversionConfig">

    </div>
   <div id="MReversionChart" style="width:100%; height:600px;"></div>
</div>

<div id="orders">
    <div style="display: flex">
        <div id="orderFormDiv" class="form">
            <h2>Order Form</h2>

            <form name="orderForm">

                <!--<label for="symbol"></label>
                <select name="symbol" id="symbol">
                    <option value="hide">-- Symbol --</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                </select>

                <label for="test">test</label>
                <div class="mySelectDiv">
                    <select class="mySelect" name="test" id="test" >
                        <option selected="selected" value="BTCUSDT"> BTCUSDT </option>
                        <option value="BTCUSDT"> BTCUSDT </option>
                        <option value="BTCUSDT"> BTCUSDT </option>
                        <option value="BTCUSDT"> BTCUSDT </option>
                        <option value="BTCUSDT"> BTCUSDT </option>
                    </select>
                    <span class="focus"></span>
                </div>
                <br>-->

                <label for="symbolSelect">
                    Symbol
                    <select class="niceSelect" name="symbol" id="symbolSelect" >
                        <option selected="selected" value="BNBUSDT"> BNBUSDT </option>
                    </select>
                </label>
                <br>

                <label>
                    Quantity
                    <input type="text" value="25" name="percentOrder">
                </label>
                <br>

                <label for="sideTypeSelect">
                    SideType
                    <select class="niceSelect" name="sideType" id="sideTypeSelect" >
                        <option selected="selected" value="SELL">SELL</option>
                    </select>
                </label>
                <br>

                <label for="orderTypeSelect">
                    OrderType
                    <select class="niceSelect" name="orderType" id="orderTypeSelect" >
                        <option selected="selected" value="LIMIT">LIMIT</option>
                    </select>
                </label>
                <br>

                <label>
                    Price
                    <input type="text" value="500" name="price">
                </label>
                <br>

                <input type="submit" id="addPendingOrder" value="add to pending orders" >
                <br>
                <input type="submit" id="sendOrders" value="SendOrders" >
            </form>

        </div>

        <div id="pendingOrders">
            <h2>pending orders</h2>
        </div>
    </div>

    <div id="activeOrders">
        <h2> active orders</h2>
    </div>
</div>





<div id="addTrader">
    <form name="addTrader">

        <label>
            Name
            <input type="text" value="" name="name">
        </label>
        <br>

        <label>
            UID
            <input type="text" value="" name="UID">
        </label>
        <br>

        <br/>
        <input type="submit" value="Send">

    </form>
</div>






<div id="orders">
    <h2>active orders</h2>

</div>

<br>
<br>
<br>
<div id="serverLog"> </div>
<br>
<br>
<br>
<div id="orderLog"> </div>
<br>
<br>
<br>
<div id="activeOrders"> </div>
