<html><head><title>Animation</title>
<script type="text/javascript" src="jquery-3.7.1.min.js">
</script>
<script type="text/javascript" src="app.js">
</script>
</head>
<body> 
<p id="txt"
<button>Start Animation </button>




$document.ready(function()
{
$("#up").click(function()
{
  $(".pic").slideUp('slow',function()
  {
  $(".log").text("Slide Up Trabsition Change");
  });
});
$("#down").click(function(){
$(".pic").slideDown('slow',function()
{
$(".log").text("Slide Down Transiton");
});
});
});

