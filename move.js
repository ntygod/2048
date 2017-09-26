function checkKeyCode(event) {
	// body...
	switch(event.keyCode){
		case 37:
			moveLeft();
			break;
		case 38:
			moveUp();
			break;
		case 39:
			moveRight();	
			break;
		case 40:
			moveDown();	
			break;
	}
}

function moveLeft() {
	// body...
	 if(!canMoveLeft(items)){
        return false;
    }

    //遍历右边12个格子
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(items[i][j]!=0){
                //有数字则遍历左边
                for(var k=0;k<j;k++){
                    //看落点是否为空且路上有无障碍
                    if(items[i][k]==0&&xNoBlock(i,k,j,items)){
                        //move
                  
                        //更新
                        items[i][k]=items[i][j];
                        items[i][j]=0;
                        continue;
                    }else if(items[i][k]==items[i][j]&&xNoBlock(i,k,j,items)){
                        //move
                        
                        //更新
                        items[i][k]+=items[i][j];
                        items[i][j]=0;
                        //分数增加
                        score += items[i][k];
                        continue;
                    }
                }
            }
        }
    }
    //遍历完后更新格子显示状态,慢一点才能显示动画
    setTimeout("init()",200);
    return true;
}
function moveRight() {
	// body...
	 if(!canMoveRight(items)){
        return false;
    }

    //遍历左边12个格子
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(items[i][j]!=0){
                //有数字则遍历右边
                for(var k=3;k>j;k--){
                    //看落点是否为空且路上有无障碍
                    if(items[i][k]==0&&xNoBlock(i,j,k,items)){
                        //move
                  
                        //更新
                        items[i][k]=items[i][j];
                        items[i][j]=0;
                        continue;
                    }else if(items[i][k]==items[i][j]&&xNoBlock(i,j,k,items)){
                        //move
                        
                        //更新
                        items[i][k]+=items[i][j];
                        items[i][j]=0;
                        //分数增加
                        score += items[i][k];
                        continue;
                    }
                }
            }
        }
    }
    //遍历完后更新格子显示状态,慢一点才能显示动画
    setTimeout("init()",200);
    return true;
}
function moveDown() {
	// body...
	 if(!canMoveDown(items)){
        return false;
    }

    //遍历上边12个格子
    for(var j=0;j<4;j++){
        for(var i=2;i>=0;i--){
            if(items[i][j]!=0){
                //有数字则遍历下边
                for(var k=3;k>i;k--){
                    //看落点是否为空且路上有无障碍
                    if(items[k][j]==0&&xNoBlock(j,k,i,items)){
                        //move
                  
                        //更新
                        items[k][j]=items[i][j];
                        items[i][j]=0;
                        continue;
                    }else if(items[k][j]==items[i][j]&&xNoBlock(j,k,i,items)){
                        //move
                        
                        //更新
                        items[k][j]+=items[i][j];
                        items[i][j]=0;
                        //分数增加
                        score += items[k][j];
                        continue;
                    }
                }
            }
        }
    }
    //遍历完后更新格子显示状态,慢一点才能显示动画
    setTimeout("init()",200);
    return true;
}
function moveUp() {
	// body...
	 if(!canMoveUp(items)){
        return false;
    }

    //遍历下边12个格子
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(items[i][j]!=0){
                //有数字则遍历上边
                for(var k=0;k<i;k++){
                    //看落点是否为空且路上有无障碍
                    if(items[k][j]==0&&xNoBlock(j,k,i,items)){
                        //move
                  
                        //更新
                        items[k][j]=items[i][j];
                        items[i][j]=0;
                        continue;
                    }else if(items[k][j]==items[i][j]&&xNoBlock(j,k,i,items)){
                        //move
                        
                        //更新
                        items[k][j]+=items[i][j];
                        items[i][j]=0;
                        //分数增加
                        score += items[k][j];
                        continue;
                    }
                }
            }
        }
    }
    //遍历完后更新格子显示状态,慢一点才能显示动画
    setTimeout("init()",200);
    return true;
}
function canMoveLeft(items){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(items[i][j]!= 0){
                if(items[i][j-1]==0||items[i][j-1]==items[i][j])
                    return true;
            }
        }
    }
    return false;
}
function canMoveRight(items){
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j++){
            if(items[i][j]!= 0){
                if(items[i][j+1]==0||items[i][j+1]==items[i][j])
                    return true;
            }
        }
    }
    return false;
}
function canMoveUp(items){
    for(var j=0;j<4;j++){
        for(var i=1;i<4;i++){
            if(items[i][j]!= 0){
                if(items[i-1][j]==0||items[i-1][j]==items[i][j])
                    return true;
            }
        }
    }
    return false;
}
function canMoveDown(items){
    for(var j=0;j<4;j++){
        for(var i=2;i>=0;i--){
            if(items[i][j]!= 0){
                if(items[i+1][j]==0||items[i+1][j]==items[i][j])
                    return true;
            }
        }
    }
    return false;
}

function xNoBlock(row,col1,col2,items){
    for(var i=col1+1;i<col2;i++){
        if(items[row][i]!=0)
            return false;
    }
    return true;
}
