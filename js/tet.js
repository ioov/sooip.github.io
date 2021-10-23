
			$(function(){
				var len = $(".wrap img").length;
				var deg = 360/len;
				//循环遍历每一个图片对象，添加相应的旋转度数与动画时间
				$(".wrap img").each(function(i){
					$(this).css({
						transform:"rotateY("+i*deg+"deg) translateZ(350px)",
						transition:"transform 1s "+(len-i-1)*0.2+"s",
					});
				});

				var vox = 0,voy = -10;
				var cx,cy;
				var timer = null;
				$(document).mousedown(function(e){
					var e = e || window.event;
					var x = e.clientX;
					var y = e.clientY;
					$(document).mousemove(function(e){
						var e = e || window.event;

						clearInterval(timer);//下一次拖动的时候清除上一次的定时
						var x1 = e.clientX;
						var y1 = e.clientY;

						//取差值
						cx = x1 - x;
						cy = y1 - y;

						vox += cx*0.2;
						voy -= cy*0.2;

						$(".wrap").css({
							transform:"rotateX("+voy+"deg) rotateY("+vox+"deg)"
						});
						
						//拿到上一个坐标的值
						x = x1;
						y = y1;

					});
				}).mouseup(function(){
					$(document).unbind("mousemove");
					timer = setInterval(function(){
						cx *= 0.95;//让距离越来越小，乘以摩擦系数
						cy *= 0.95;

						vox += cx*0.2;
						voy -= cy*0.2;

						$(".wrap").css({
							transform:"rotateX("+voy+"deg) rotateY("+vox+"deg)"
						});
						//考虑到会往反方向移动所以加绝对值
						if(Math.abs(cx) < 0.5 || Math.abs(cy) < 0.5){
							clearInterval(timer);
						}

					},10);
				});
				
			});