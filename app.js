  window.onload = function () {
                document.querySelector('#submit').onclick = function () {
                var input = document.querySelector('#pick_topic').value;

                var api = $.get('http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=API_KEY&limit=20')
                        .done(function (result) {
                            
                                for(var i=0;i< result.data.length;i++){
                                var div = document.querySelector('.image');
                                var img = document.createElement('img');
                                
                                img.src = result.data[i].images.original.url;
                                img.className = 'thumb';
                                img.style.width = '200px';
                                div.appendChild(img);
                            }
                            });

                        };

            };