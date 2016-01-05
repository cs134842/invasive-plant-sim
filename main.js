plants=5;
seeds=0;
seedProdRate=0.1;
seedProdCost=1;
floor=function(x){
	if (x != 0) {
		x=x-(x%1);
	}
	return x;
}
refresh=function(){
	document.getElementById("plants").innerHTML=plants;
	document.getElementById("seeds").innerHTML=floor(seeds);
	document.getElementById("plantCost").innerHTML=floor(seedProdCost);
	document.getElementById("seedProd").innerHTML=seedProdRate;
}
incrSeed=function(){
	if (plants >= floor(seedProdCost)){
		seedProdRate+=0.1;
		plants-=floor(seedProdCost);
		seedProdCost=seedProdCost*1.5;
	}
	refresh();
}
