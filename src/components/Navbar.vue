<template>
	<div>
		 <ul class="cbp-vimenu">
        	    <li><a href="#" class="icon-logo"></a></li>
        		<li><a href="#" class="icon-search"></a></li>
        		<li><a href="#" class="icon-archive"></a></li>
        </ul>
	</div>
</template>

<style>

    .cbp-vimenu {
    	position: fixed;
    	overflow: hidden;
    	top: 0;
    	left: 0;
    	height: 100%;
    	list-style-type: none;
    	margin: 0;
    	padding: 0;
    	background: #f7f7f7;
    }

    .cbp-vimenu li a {
    	display: block;
    	text-indent: -500em;
    	height: 5em;
    	width: 5em;
    	line-height: 5em;
    	text-align: center;
    	color: #999;
    	position: relative;
    	border-bottom: 1px solid rgba(0,0,0,0.05);
    	-webkit-transition: background 0.1s ease-in-out;
    	-moz-transition: background 0.1s ease-in-out;
    	transition: background 0.1s ease-in-out;
    }

    .cbp-vimenu li a:hover,
    .cbp-vimenu li:first-child a{
    	background: #47a3da;
    	color: #fff;
    }

    /* class for current item */
    .cbp-vimenu li.cbp-vicurrent a {
    	background: #fff;
    	color: #47a3da;
    }

    .cbp-vimenu li a:before {
    	font-family: 'ecoico';
    	speak: none;
    	font-style: normal;
    	font-weight: normal;
    	text-indent: 0em;
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	font-size: 1.4em;
    	-webkit-font-smoothing: antialiased;
    }

    .cbp-vimenu li a.icon-logo:before {
    	content: "K";
    	font-weight: 700;
    	font-size: 300%;
    	font-family: 'Lato', Calibri, Arial, sans-serif;
    }

    .cbp-vimenu li a.icon-search:before {
    	content: "a";
    	font-weight: 700;
        font-size: 300%;
        font-family: 'Lato', Calibri, Arial, sans-serif;
    }

    .cbp-vimenu li a.icon-archive:before {
    	content: "y";
    	font-weight: 700;
        font-size: 300%;
        font-family: 'Lato', Calibri, Arial, sans-serif;
    }


    /* Example for media query (depends on total height of menu) */
    @media screen and (max-height: 34.9375em) {

    	.cbp-vimenu {
    		font-size: 70%;
    	}

    }

</style>