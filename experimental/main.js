cap=500;
plants=5;
totalSeeds=0;
seeds=0;
seedsA=0;
seedsB=0;
seedsC=0;
seedsD=0;
seedsE=0;
seedsF=0;
seedsG=0;
seedsH=0;
seedsI=0;
seedsJ=0;
seedProdRate=0.1;
seedProdCost=1;
floor=function(x){
	if (x != 0) {
		x=x-(x%1);
	}
	return x;
}
refresh=function(){
	document.getElementById("plants").innerHTML=floor(plants);
	document.getElementById("seeds").innerHTML=totalSeeds
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
setInterval(function(){
	if (plants < cap){
		plants+=seedsJ;
		seedsJ=seedsI;
		seedsI=seedsH;
		seedsH=seedsG;
		seedsG=seedsF;
		seedsF=seedsE;
		seedsE=seedsD;
		seedsD=seedsC;
		seedsC=seedsB;
		seedsB=seedsA;
		seedsA=seeds;
	}
	if (plants >= cap){
		plants=500;
	}
	seeds+=seedProdRate*floor(plants);
	totalSeeds=floor(seeds)+floor(seedsA)+floor(seedsB)+floor(seedsC)+floor(seedsD)+floor(seedsE)+floor(seedsF)+floor(seedsG)+floor(seedsH)+floor(seedsI)+floor(seedsJ);
	refresh();
},1000);
