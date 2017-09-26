function change() {
	// 给不同数值的方块不同样式
	for(let i = 0; i <4;i++){
		for(let j = 0; j < 4;j++){
			switch(items[i][j]){
				case 0:
					document.getElementsByClassName('row')[i*4+j].style.color = '#ffffff';
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#ffffff';
					break;
				case 2:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = 'rgba(158, 158, 158, 0.66)';
					break;
				case 4:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = 'rgb(158, 158, 158)';
					break;
				case 8:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = 'rgb(113, 110, 110)';
					break;
				case 16:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#795548';
					break;
				case 32:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#FF5722';
					break;
				case 64:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#FF9800';
					break;
				case 128:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#FFC107';
					break;
				case 256:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#FFEB3B';
					break;
				case 512:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#CDDC39';
					break;
				case 1024:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#4CAF50';
					break;
				case 2048:
					document.getElementsByClassName('row')[i*4+j].style.backgroundColor = '#009688';
					break;
			}
		}
	}

}




//document.getElementById('pra').style.display = 'none';