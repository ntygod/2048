var items = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var score = 0;

window.onload = function () {
	// 初始化
	init();
	document.getElementById("myBtn").addEventListener('click', restart);
}

function init() {
	var k = 0;
	var itemX = [];
	var itemY = [];
	// 随机选择一个div赋值2或4
	for (let i = 0; i < 4; i++) {
			for(let j = 0; j < 4;j++){
				if (items[i][j] == 0) {
					itemX.push(i);
					itemY.push(j);
				}
			}
	}
		if(itemX.length == 1){
			var num = (Math.random() > 0.4) ? 2 : 4;		
			var index = parseInt(itemX.length*Math.random());
			items[itemX[index]][itemY[index]] = num;
			itemX = [];
			itemY = [];
		}
		else if(itemX.length > 1){
			for (let k = 0; k < 2; k++) {
				var num = (Math.random() > 0.6) ? 2 : 4;		
				var index = parseInt(itemX.length*Math.random());
				items[itemX[index]][itemY[index]] = num;
				itemX.splice(index,1);
				itemY.splice(index,1);
			}
			itemX = [];
			itemY = [];	
		}
		for(let i = 0; i < 4;i++){
			for(let j = 0; j < 4;j++){		
				document.getElementsByClassName('row')[k].innerText = items[i][j];
				k = k + 1;
			}
		}
		document.getElementById('score').innerText = score;
		change();

}

function restart() {
	items = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	score = 0;
	init();
}