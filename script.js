            var start = new Date().getTime();
            
            function getRandomColor() {
              
                var letters = '0123456789ABCDEF';
              
                var color = '#';
              
                for (var i = 0; i < 6; i++) {
                
                    color += letters[Math.floor(Math.random() * 16)];
                    
                }
                
                return color;
            
            }
            
            function makeShapeAppear() {
                
                var top = Math.random ()*300;
                
                var left = Math.random ()*300;
                
                var width = (Math.random ()*100) + 100;
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById ("myShape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById ("myShape").style.borderRadius = 0;
                    
                }
                
                
                
                document.getElementById ("myShape").style.backgroundColor = getRandomColor();
                
                document.getElementById ("myShape").style.display="block";
                
                document.getElementById ("myShape").style.top = top + "px";
                
                document.getElementById ("myShape").style.left = left + "px";
                
                document.getElementById ("myShape").style.width = width + "px";
                
                document.getElementById ("myShape").style.height = width + "px";
                
                start = new Date().getTime();
                
                
                }
            
            function appearAfterDelay() {
                
            
                setTimeout(makeShapeAppear, Math.random()*2000);   
                
            
            }
            
            
            appearAfterDelay()
            
            
            document.getElementById("myShape").onclick=function() {
                
                document.getElementById("myShape").style.display="none";
                
                var end = new Date().getTime();
                
                var time = (end - start)/1000 + "s";
                
                document.getElementById("timeTaken").innerHTML = time;
                
                appearAfterDelay();
                
                
            }